You are a senior full-stack architect and production-grade software engineer.

Build a complete production-ready PERN stack application (PostgreSQL + Express + React + Node.js) for a SaaS Finance / Invoice / Payment / Ledger system.

The system must follow strict role-based access control, ledger-based accounting, and audit logging.

========================================================
🏗️ CORE ROLES
========================================================

1. ADMIN
- Full system control
- Can create/approve/disable/delete users
- Can override anything
- Can perform adjustments on ledger
- Can view audit logs

2. MANAGER
- Full operational access (like admin-lite)
- Can create users
- Can approve/disable users
- Can create/approve invoices
- Can approve payments
- ❌ Cannot delete anything
- ❌ Cannot manage roles/permissions

3. ACCOUNT
- Can create invoices only
- Finance entry role

4. CLIENT
- Can request payments
- Can view own invoices and balance only

========================================================
💰 FINANCE SYSTEM RULES
========================================================

- Invoice approval → creates DEBIT entry in ledger
- Payment approval → creates CREDIT entry in ledger
- Ledger is IMMUTABLE (NO UPDATE, NO DELETE EVER)
- Admin corrections must be done via "adjustments table" only
- Balance is computed dynamically:
  Balance = SUM(CREDITS) - SUM(DEBITS)

========================================================
📊 DATABASE (POSTGRESQL REQUIRED)
========================================================

Design full schema including:

- users
- roles
- permissions
- role_permissions
- invoices
- invoice_items
- payment_requests
- ledger_entries (immutable core table)
- adjustments (admin corrections only)
- audit_logs (full activity tracking)

Requirements:
- UUID primary keys
- Foreign keys everywhere needed
- Proper ENUM constraints or CHECK constraints
- Production-grade indexing for performance
- No missing relationships

========================================================
⚡ BACKEND (NODE + EXPRESS)
========================================================

Create full backend structure with:

- JWT authentication
- RBAC middleware (role + permission based)
- Audit logging middleware
- Ledger service (immutable enforcement)
- Invoice service
- Payment service
- User management service

Folder structure must be modular:

src/
  config/
  middleware/
  modules/
    auth/
    users/
    invoices/
    payments/
    ledger/
    adjustments/
    audit/
  utils/
  server.js

Requirements:
- Clean architecture
- Service-layer design
- Role-based route protection
- No business logic in controllers

========================================================
🎨 FRONTEND (REACT + VITE)
========================================================

Create full frontend with role-based dashboards:

layouts:
- AdminLayout
- ManagerLayout
- AccountLayout
- ClientLayout

pages:
- Admin Dashboard (users, roles, audit logs)
- Manager Dashboard (approvals, invoices, payments)
- Account Dashboard (invoice creation)
- Client Dashboard (payment requests, balance view)

features:
- Protected routes (RBAC)
- Axios API layer
- Global auth context
- Role-based sidebar menu
- Tables + forms for CRUD
- Ledger view screen
- Balance card component

========================================================
🔐 SECURITY REQUIREMENTS
========================================================

- Password hashing (bcrypt)
- JWT authentication
- RBAC middleware
- No direct ledger mutation from frontend
- All financial actions must go through backend services
- Audit log every critical action

========================================================
📦 OUTPUT REQUIRED FROM YOU (CLAUDE)
========================================================

1. Full PostgreSQL schema (production-ready)
2. Backend folder structure + key code files
3. Frontend folder structure + key components
4. API route list (REST endpoints)
5. Example flow diagrams (invoice, payment, ledger)
6. System architecture explanation

Make it production-grade, scalable, and enterprise-level.
Do NOT simplify the system.
Assume this will be deployed in a real SaaS environment.
