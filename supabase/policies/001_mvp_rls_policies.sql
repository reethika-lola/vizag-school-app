-- RLS and Data API grants reference for the MVP foundation.
-- The executable migration is in ../migrations/20260604133000_mvp_foundation.sql.

alter table public.profiles enable row level security;
alter table public.schools enable row level security;
alter table public.shortlists enable row level security;

grant select, insert, update on table public.profiles to authenticated;
grant select on table public.schools to anon, authenticated;
grant insert, update, delete on table public.schools to authenticated;
grant select, insert, update, delete on table public.shortlists to authenticated;

create policy "Users can read their own profile"
on public.profiles
for select
to authenticated
using ((select auth.uid()) = id);

create policy "Users can insert their own profile"
on public.profiles
for insert
to authenticated
with check ((select auth.uid()) = id);

create policy "Users can update their own profile"
on public.profiles
for update
to authenticated
using ((select auth.uid()) = id)
with check ((select auth.uid()) = id);

create policy "Active schools are publicly readable"
on public.schools
for select
to anon, authenticated
using (
  is_active = true
  or coalesce(auth.jwt() -> 'app_metadata' ->> 'role', '') = 'admin'
);

create policy "Admins can insert schools"
on public.schools
for insert
to authenticated
with check (coalesce(auth.jwt() -> 'app_metadata' ->> 'role', '') = 'admin');

create policy "Admins can update schools"
on public.schools
for update
to authenticated
using (coalesce(auth.jwt() -> 'app_metadata' ->> 'role', '') = 'admin')
with check (coalesce(auth.jwt() -> 'app_metadata' ->> 'role', '') = 'admin');

create policy "Admins can delete schools"
on public.schools
for delete
to authenticated
using (coalesce(auth.jwt() -> 'app_metadata' ->> 'role', '') = 'admin');

create policy "Users can read their own shortlists"
on public.shortlists
for select
to authenticated
using ((select auth.uid()) = user_id);

create policy "Users can insert their own shortlist rows"
on public.shortlists
for insert
to authenticated
with check ((select auth.uid()) = user_id);

create policy "Users can update their own shortlist rows"
on public.shortlists
for update
to authenticated
using ((select auth.uid()) = user_id)
with check ((select auth.uid()) = user_id);

create policy "Users can delete their own shortlist rows"
on public.shortlists
for delete
to authenticated
using ((select auth.uid()) = user_id);
