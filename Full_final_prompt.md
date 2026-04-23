You are a senior principal full-stack engineer and system architect.

Build a complete production-ready PERN stack SaaS application with PostgreSQL, Express, React, and Node.js.

This is a multi-project financial management system with RBAC, invoice processing, payments, ledger accounting, notifications, reporting, analytics, audit logs, and soft delete support.

========================================================
🏗️ SYSTEM OVERVIEW
========================================================

This is a SaaS Finance & Project Accounting Platform.

Each user can have multiple projects.

All financial operations are project-based.

System must support:
- Role-based access control (RBAC)
- Immutable ledger accounting
- Invoice → Payment → Ledger flow
- Notifications system
- Reports + Analytics
- Audit logging
- Soft delete system

========================================================
👥 ROLES
========================================================

1. ADMIN
- Full system access
- Manage users, roles, permissions
- Can soft delete anything
- Can override system data
- Can view all analytics and reports

2. MANAGER
- Full operational access except delete
- Can approve users, invoices, payments
- Can manage finance workflows

3. ACCOUNT
- Can create invoices only

4. CLIENT
- Can create payment requests
- Can view projects, invoices, reports, and balance

========================================================
💰 FINANCE RULES
========================================================

- Invoice approval = DEBIT entry in ledger
- Payment approval = CREDIT entry in ledger
- Ledger is IMMUTABLE (NO UPDATE, NO DELETE EVER)
- Admin corrections only via adjustments table
- Balance = SUM(CREDITS) - SUM(DEBITS)

========================================================
📁 PROJECT SYSTEM
========================================================

- One user can have multiple projects
- All invoices, payments, ledger entries belong to a project

========================================================
🔔 NOTIFICATIONS
========================================================

Trigger notifications for:
- Invoice created
- Invoice approved/rejected
- Payment request created
- Payment approved/rejected
- Daily report generated
- Admin alerts

========================================================
📊 REPORTS + ANALYTICS
========================================================

Reports:
- Daily system report
- User report
- Project report
- Admin financial report

Analytics:
- Revenue tracking
- Cashflow analysis
- User activity
- Project performance

========================================================
🗑️ SOFT DELETE
========================================================

- No hard delete allowed (except admin override logic)
- Use deleted_at + status flag
- Must preserve audit history

========================================================
🧱 DATABASE DESIGN (POSTGRESQL)
========================================================

Create full schema with:

- users
- roles
- permissions
- role_permissions
- projects
- invoices
- invoice_items
- payment_requests
- ledger_entries (immutable)
- adjustments
- notifications
- reports
- audit_logs

Requirements:
- UUID primary keys
- Foreign keys properly linked
- Indexed for performance
- JSONB for reports data
- ENUM or CHECK constraints for status fields

========================================================
⚙️ BACKEND (NODE + EXPRESS)
========================================================

Create modular backend structure:

src/
  config/
  middleware/
    auth.middleware
    rbac.middleware
    audit.middleware
    softDelete.middleware
  modules/
    auth/
    users/
    projects/
    invoices/
    payments/
    ledger/
    adjustments/
    notifications/
    reports/
    analytics/
    audit/
  utils/
  server.js

Requirements:
- Service layer architecture (no logic in controllers)
- JWT authentication
- RBAC middleware
- Audit logging on every action
- Ledger service must enforce immutability
- Notification worker service
- Report scheduler (cron jobs)

========================================================
🎨 FRONTEND (REACT + VITE)
========================================================

Create full frontend with role-based dashboards:

Layouts:
- AdminLayout
- ManagerLayout
- AccountLayout
- ClientLayout

Pages:
- Admin Dashboard (users, roles, analytics, reports, audit logs)
- Manager Dashboard (approvals, invoices, payments)
- Account Dashboard (invoice creation)
- Client Dashboard (projects, payments, reports)

Shared Features:
- Ledger viewer
- Balance card
- Notification center
- Charts & analytics dashboard
- Tables + forms

Requirements:
- Protected routes (RBAC)
- Axios API layer
- Context API for auth + role
- Role-based sidebar navigation

========================================================
📦 OUTPUT REQUIRED
========================================================

Generate:

1. Full PostgreSQL schema (production-ready)
2. Backend folder structure + key logic explanation
3. Frontend folder structure + architecture explanation
4. REST API route list (all endpoints)
5. System architecture diagram (text or mermaid)
6. Data flow explanation (invoice, payment, ledger, report)

Make it production-grade, scalable, and suitable for real SaaS deployment.

Do NOT simplify the system.
Assume this will be used in production environment handling real financial data.
