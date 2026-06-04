# Vizag School Selection Platform MVP Review

Prepared on 2026-06-04. This document is a review artifact only. No live Supabase migrations have been executed.

## Current State

The product currently has a strong Expo, React Native, and TypeScript UI prototype. The UI already covers the main parent journey: onboarding, login, discovery, search, school listing, school details, comparison, favorites, profile, and admin mock screens.

The app does not yet have a real backend. School data comes from `src/data/schools.ts`, login and signup buttons only navigate locally, Google sign-in is not wired, favorites are hard-coded, and admin screens do not write data.

The local repository is fragile. The actual app root is `D:\Projects\vizag-school-app\vizag-school-app`. Most app files are untracked, and the local branch appears stale compared with GitHub. Existing work should be committed or otherwise preserved before implementation begins.

## MVP Fit

Product vision: Help parents confidently choose the right school for their child through discovery, comparison, shortlisting, and decision support.

Already useful and should be kept:

- Current app visual direction and screen coverage.
- School discovery cards, category browsing, search screen, details screen, comparison screen, and favorites screen.
- Typed UI model in `src/types/index.ts`.
- Existing mock data as seed-data source material.
- Admin screens as future back-office prototypes.

Should be improved:

- Replace mock data with Supabase reads.
- Replace fake login/signup navigation with real Supabase Auth.
- Convert favorites into authenticated shortlists.
- Add real Google OAuth and protected navigation.
- Add loading, empty, and error states that reflect real network/database operations.
- Add a small recommendation model based on profile preferences.
- Add CI before pushing production work.

Should not be removed yet:

- `index.html`, because it is a useful standalone prototype until the mobile app is fully wired.
- Admin UI, because it clarifies future content workflows.
- Local mock data, until seed data and Supabase reads are verified.

Should be deferred:

- Admin write access from the mobile app.
- Admissions lead management.
- Reviews and ratings submitted by parents.
- Edge Functions for recommendation scoring.
- Cloudflare deployment, unless the product direction includes a web build.

## Data Model

Critical tables:

- `profiles`: one row per Supabase auth user, storing parent preferences.
- `schools`: public catalog of active school profiles.
- `shortlists`: authenticated user-to-school saved list.

Storage:

- `school-images`: public-read image bucket for catalog images.
- Upload, update, and delete are restricted to authenticated users whose JWT `app_metadata.role` is `admin`.

Security:

- RLS is enabled on every public table.
- Public clients get read-only access to active schools.
- Profiles and shortlists are user-owned.
- Admin-only school writes are prepared through `app_metadata`, not user-editable metadata.
- Service keys and secret keys must never be placed in Expo public variables.

## Implementation Plan

### Critical

1. Preserve current local work.
   - Complexity: Low.
   - Risk: Medium.
   - Action: Review `git status`, reconcile stale `origin/main`, then commit current app scaffold before feature implementation.

2. Review and approve the prepared Supabase migration.
   - Complexity: Medium.
   - Risk: High if policies are wrong.
   - Files: `supabase/migrations/20260604133000_mvp_foundation.sql`.

3. Review and approve seed data.
   - Complexity: Low.
   - Risk: Low.
   - Files: `supabase/seeds/schools.seed.sql`, `supabase/seed.sql`.

4. Add Supabase client and auth dependencies.
   - Complexity: Medium.
   - Risk: Medium.
   - Expected packages: `@supabase/supabase-js`, `@react-native-async-storage/async-storage`, `expo-secure-store`, `react-native-url-polyfill`.

5. Add auth provider and protected navigation.
   - Complexity: Medium.
   - Risk: Medium.
   - Outcome: Logged-out users see onboarding/login; logged-in users see app tabs.

6. Wire schools and shortlists to Supabase.
   - Complexity: Medium.
   - Risk: Medium.
   - Outcome: discovery, details, compare, and favorites use live data.

### Recommended

1. Generate TypeScript database types after migration is applied in a development database.
2. Add a simple CI workflow that runs typecheck.
3. Add local `.env.example` and document required Supabase values.
4. Add basic integration tests for RLS policies after a local Supabase CLI setup is available.
5. Add a recommendation service that ranks by preferred board, locality, grade, and budget.

### Optional

1. Add admin roles and a moderated school editing workflow.
2. Add admissions alerts and saved comparison sessions.
3. Add parent reviews after moderation rules are defined.
4. Add Edge Functions for recommendation scoring or lead routing.
5. Add Cloudflare or Expo/EAS deployment configuration.

## Files Prepared For Review

- `supabase/migrations/20260604133000_mvp_foundation.sql`
- `supabase/schema/001_mvp_schema.sql`
- `supabase/policies/001_mvp_rls_policies.sql`
- `supabase/storage/001_school_images.sql`
- `supabase/seeds/schools.seed.sql`
- `supabase/seed.sql`
- `supabase/README.md`
- `.env.example`

## Approval Checklist

Approve these before implementation begins:

- Table names and column names.
- Whether `schools` should be public-read while active.
- Whether `school-images` should be a public bucket.
- Whether admin writes should be controlled by `app_metadata.role = admin`.
- Whether shortlists should support notes and priority.
- Whether current mock schools are acceptable as initial seed data.
- Whether to preserve the standalone `index.html` prototype.
- Whether to commit current untracked app files before wiring Supabase.
- Whether the Expo environment template should use the current Supabase project URL.
