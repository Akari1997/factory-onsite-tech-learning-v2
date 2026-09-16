# Factory Knowledge & Capability Platform (FKCP)

This repository contains the initial specification and skeleton for the Factory Knowledge & Capability Platform (FKCP).

Product vision

- Title: Factory Knowledge & Capability Platform (FKCP)
- One-liner: A single platform for factories to create learning paths, centralize operational knowledge, track employee capability and progress, and surface knowledge with AI — secure and integrated with Microsoft Entra ID.

MVP Scope

- User Login (Microsoft Entra ID)
- Learning Path Creation
- Knowledge Base
- Search Function
- Progress Tracking
- Dashboard

Stack

- Next.js
- TypeScript
- Tailwind CSS
- PostgreSQL
- Prisma
- Azure

Contents

- prisma/schema.prisma - initial data model
- pages/ - Next.js pages (login, dashboard, etc.)
- README with PRD summary and roadmap

Next steps

- Configure Microsoft Entra ID app registration
- Provision Azure Postgres and Blob Storage
- Wire up authentication, Prisma migrations, and CI/CD

Run locally (English)

Follow these steps to run the project locally for development:

1. Clone the repository and change into the directory

   - git clone git@github.com:Akari1997/factory-onsite-tech-learning-v2.git
   - cd factory-onsite-tech-learning-v2

2. Install dependencies

   - npm install

3. Create a local environment file

   - Copy .env.example if provided or create a new .env.local in the project root. At minimum set the following variables for local development:
     - DATABASE_URL=postgresql://<user>:<password>@<host>:5432/<database>
     - NEXT_PUBLIC_APP_NAME="FKCP"
     - ENTRA_CLIENT_ID=<your-environment-client-id>
     - ENTRA_CLIENT_SECRET=<your-environment-client-secret>
     - ENTRA_TENANT_ID=<your-tenant-id>
     - NEXTAUTH_URL=http://localhost:3000

   Note: For sensitive values in production, use Azure Key Vault or another secret store instead of environment files.

4. Generate Prisma client and run initial migration (development)

   - npx prisma generate
   - npm run prisma:migrate   # runs: prisma migrate dev --name init

   If you prefer to apply migrations in CI/CD or production, use `prisma migrate deploy` in those environments instead.

5. Start the development server

   - npm run dev

6. Open your browser

   - Visit http://localhost:3000

Quick commands

- npm run dev       # start Next.js in development
- npm run build     # build for production
- npm run start     # start the production build
- npx prisma studio  # inspect the database (after generating prisma client)

Notes and recommendations

- Authentication: The project is scaffolded for Microsoft Entra ID (OpenID Connect). Configure an App Registration in your Azure AD tenant and set the redirect URI to your auth callback (for example: http://localhost:3000/api/auth/entra/callback or the NextAuth callback URL).
- Database: Use Azure Database for PostgreSQL for hosted environments. In production, use a connection pooler (PgBouncer) or Prisma Data Proxy to avoid connection exhaustion.
- Storage: Use Azure Blob Storage for attachments and lesson assets. For uploads, issue SAS tokens or use a backend signed upload flow.
- Search & AI: For better search performance and AI features, plan to integrate Azure Cognitive Search and Azure OpenAI in future milestones.
- Secrets & keys: Use Azure Key Vault for production secrets and managed identities for services where possible.

If you want, I can add an example .env.example, a Prisma seed script, or a GitHub Actions workflow to deploy to Azure. Tell me which to add next.
