-- Storage bucket and policies reference for school catalog images.
-- The executable migration is in ../migrations/20260604133000_mvp_foundation.sql.

insert into storage.buckets (
  id,
  name,
  public,
  file_size_limit,
  allowed_mime_types
)
values (
  'school-images',
  'school-images',
  true,
  5242880,
  array['image/jpeg', 'image/png', 'image/webp']
)
on conflict (id) do nothing;

create policy "Admins can list school image objects"
on storage.objects
for select
to authenticated
using (
  bucket_id = 'school-images'
  and coalesce(auth.jwt() -> 'app_metadata' ->> 'role', '') = 'admin'
);

create policy "Admins can upload school image objects"
on storage.objects
for insert
to authenticated
with check (
  bucket_id = 'school-images'
  and coalesce(auth.jwt() -> 'app_metadata' ->> 'role', '') = 'admin'
  and (storage.foldername(name))[1] = 'schools'
);

create policy "Admins can update school image objects"
on storage.objects
for update
to authenticated
using (
  bucket_id = 'school-images'
  and coalesce(auth.jwt() -> 'app_metadata' ->> 'role', '') = 'admin'
)
with check (
  bucket_id = 'school-images'
  and coalesce(auth.jwt() -> 'app_metadata' ->> 'role', '') = 'admin'
  and (storage.foldername(name))[1] = 'schools'
);

create policy "Admins can delete school image objects"
on storage.objects
for delete
to authenticated
using (
  bucket_id = 'school-images'
  and coalesce(auth.jwt() -> 'app_metadata' ->> 'role', '') = 'admin'
);
