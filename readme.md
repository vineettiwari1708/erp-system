🧠 MASTER PROMPT (FULL PERN INVOICE + PAYMENT SYSTEM)

Design a complete production-ready PERN stack (PostgreSQL, Express, React, Node.js) application for a financial invoice and payment management system with role-based access control, approvals, and balance tracking.

👥 ROLES

The system has 3 roles:

Admin
Manager
User
🔐 USER MANAGEMENT RULES
Only Admin or Manager can create users
Users cannot self-register
Admin must approve or disable users
Only active users can log in
Track who created and approved each user
🧾 INVOICE SYSTEM
Manager creates invoices for users
Admin approves or rejects invoices
Approved invoices become active financial records
Each invoice has multiple items
Invoices increase user debt (DEBIT balance)
💳 PAYMENT SYSTEM
Users can make manual payment requests (no gateway integration)
Users enter only amount (no payment method selection)
Payment request must be approved by Admin
Approved payment becomes a transaction
Transactions increase user credit (CREDIT balance)
🛠 ADMIN ADJUSTMENTS
Admin can directly add or subtract balance from user
No approval required for admin adjustments
Used for corrections, bonuses, penalties
📊 BALANCE LOGIC

Balance must always be calculated dynamically:

Balance =
SUM(transactions + admin credits)
- SUM(invoices + admin debits)
Negative balance = user owes money (pending)
Positive balance = user has advance
Zero = settled
📜 AUDIT SYSTEM

Track all actions:

invoice approvals
payment approvals
user status changes
admin adjustments
🧱 DATABASE REQUIREMENTS

Design PostgreSQL schema with:

users (role + approval system)
invoices
invoice_items
payment_requests
transactions
user_adjustments
approval_logs

Include:

UUID primary keys
Foreign keys
Status tracking
Proper indexing
🔄 CORE FLOWS
👤 User Flow
View invoices
Create payment request
Check balance (pending/advance)
👨‍💼 Manager Flow
Create invoices
Manage users (create only)
View invoice status
👑 Admin Flow
Approve/disable users
Approve invoices
Approve payment requests
Make direct balance adjustments
View full system financial report
⚙️ SYSTEM FEATURES
Role-based authentication (JWT)
Approval-based workflow system
Ledger-style financial tracking
No self-registration
Manual payment verification
Full audit trail
🎨 FRONTEND REQUIREMENTS (REACT)

Create dashboards for:

Admin dashboard (users, approvals, adjustments, reports)
Manager dashboard (invoice creation, user management)
User dashboard (invoices, payments, balance)

Include:

Tables
Forms
Role-based routing
Protected routes
🚀 OUTPUT REQUIRED

Generate:

PostgreSQL database schema
ER diagram
Backend folder structure (Node + Express)
API routes list
Frontend folder structure (React)
Flow diagrams (invoice, payment, adjustment)
System architecture explanation
🧠 GOAL

Build a scalable accounting-style system that supports:

invoices
manual payments
admin corrections
balance tracking
role-based access control
