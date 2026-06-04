-- Schema-only reference for the MVP foundation.
-- The executable migration is in ../migrations/20260604133000_mvp_foundation.sql.

create schema if not exists private;

create extension if not exists pgcrypto with schema extensions;

create type public.school_board as enum (
  'CBSE',
  'ICSE',
  'State Board',
  'International'
);

create type public.admission_status as enum (
  'Open',
  'Limited Seats',
  'Closed'
);

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  avatar_url text,
  child_grade text,
  preferred_boards public.school_board[] not null default '{}',
  preferred_localities text[] not null default '{}',
  budget_min integer check (budget_min is null or budget_min >= 0),
  budget_max integer check (budget_max is null or budget_max >= 0),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint profiles_budget_range_check check (
    budget_min is null
    or budget_max is null
    or budget_min <= budget_max
  )
);

create table public.schools (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  tagline text,
  description text,
  board public.school_board not null,
  locality text not null,
  address text,
  latitude numeric(9, 6),
  longitude numeric(9, 6),
  annual_fee_min integer check (annual_fee_min is null or annual_fee_min >= 0),
  annual_fee_max integer check (annual_fee_max is null or annual_fee_max >= 0),
  currency text not null default 'INR',
  rating numeric(2, 1) not null default 0 check (rating >= 0 and rating <= 5),
  review_count integer not null default 0 check (review_count >= 0),
  admission_status public.admission_status not null default 'Open',
  grades text[] not null default '{}',
  facilities text[] not null default '{}',
  phone text,
  website text,
  image_url text,
  gallery_urls text[] not null default '{}',
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint schools_slug_format_check check (slug = lower(slug) and slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$'),
  constraint schools_fee_range_check check (
    annual_fee_min is null
    or annual_fee_max is null
    or annual_fee_min <= annual_fee_max
  )
);

create table public.shortlists (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  school_id uuid not null references public.schools(id) on delete cascade,
  note text,
  priority smallint not null default 0 check (priority >= 0 and priority <= 5),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id, school_id)
);

create function private.set_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create function private.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.profiles (id, full_name, avatar_url)
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'full_name', new.raw_user_meta_data ->> 'name'),
    new.raw_user_meta_data ->> 'avatar_url'
  )
  on conflict (id) do nothing;

  return new;
end;
$$;

create trigger set_profiles_updated_at
before update on public.profiles
for each row execute function private.set_updated_at();

create trigger set_schools_updated_at
before update on public.schools
for each row execute function private.set_updated_at();

create trigger set_shortlists_updated_at
before update on public.shortlists
for each row execute function private.set_updated_at();

create trigger on_auth_user_created
after insert on auth.users
for each row execute function private.handle_new_user();

create index profiles_child_grade_idx on public.profiles (child_grade);
create index schools_active_idx on public.schools (is_active);
create index schools_board_idx on public.schools (board);
create index schools_locality_idx on public.schools (locality);
create index schools_admission_status_idx on public.schools (admission_status);
create index schools_rating_idx on public.schools (rating desc);
create index schools_search_idx on public.schools using gin (
  to_tsvector(
    'simple',
    coalesce(name, '') || ' ' ||
    coalesce(tagline, '') || ' ' ||
    coalesce(locality, '')
  )
);
create index shortlists_user_id_idx on public.shortlists (user_id);
create index shortlists_school_id_idx on public.shortlists (school_id);
create index shortlists_user_created_idx on public.shortlists (user_id, created_at desc);
