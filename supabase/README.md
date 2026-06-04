# Supabase Review Package

These files prepare the MVP Supabase foundation. They have not been executed against the live Supabase project.

## Project From Audit

- Supabase project name: `vizag-school-app`
- Project ref: `sbjahbbayjoahccrxrhy`
- Region: `ap-south-1`
- Current live public app tables: none
- Current live app migrations: none
- Current live storage buckets: none

## Prepared Files

- `migrations/20260604133000_mvp_foundation.sql`: one reviewable migration containing schema, RLS, storage, and seed-data comments.
- `schema/001_mvp_schema.sql`: schema-only reference.
- `policies/001_mvp_rls_policies.sql`: RLS and grants reference.
- `storage/001_school_images.sql`: storage bucket and object policies reference.
- `seeds/schools.seed.sql`: school seed rows from current mock data.
- `seed.sql`: wrapper seed file for local Supabase workflows.

## Important Safety Notes

- Do not run this on production until the schema and policies are reviewed.
- The local Supabase CLI is not installed in this workspace, so the migration filename was prepared manually.
- The seed script uses `on conflict (slug) do nothing` to avoid overwriting existing school rows if run later.
- Expo frontend code should use `EXPO_PUBLIC_SUPABASE_URL` and `EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY`.
- Never place a Supabase secret key or service role key in an Expo public variable.

## Manual Review Order

1. Review `docs/mvp-implementation-plan.md`.
2. Review `migrations/20260604133000_mvp_foundation.sql`.
3. Review reference files under `schema`, `policies`, and `storage`.
4. Review `seeds/schools.seed.sql`.
5. After approval, apply first to a development branch or local Supabase database.
6. Run Supabase security and performance advisors after applying.
