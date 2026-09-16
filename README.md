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

