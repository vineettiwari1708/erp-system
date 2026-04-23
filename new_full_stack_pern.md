FULL PROJECT STRUCTURE (PERN SAAS SYSTEM)


📦 saas-finance-platform/
│
├── 📁 backend/
│   │
│   ├── 📁 src/
│   │   │
│   │   ├── 📁 config/
│   │   │   ├── db.config.js
│   │   │   ├── env.config.js
│   │   │   └── logger.config.js
│   │   │
│   │   ├── 📁 middleware/
│   │   │   ├── auth.middleware.js
│   │   │   ├── rbac.middleware.js
│   │   │   ├── audit.middleware.js
│   │   │   ├── error.middleware.js
│   │   │   └── softDelete.middleware.js
│   │   │
│   │   ├── 📁 modules/
│   │   │   │
│   │   │   ├── 📁 auth/
│   │   │   │   ├── auth.controller.js
│   │   │   │   ├── auth.service.js
│   │   │   │   ├── auth.routes.js
│   │   │   │
│   │   │   ├── 📁 users/
│   │   │   │   ├── user.controller.js
│   │   │   │   ├── user.service.js
│   │   │   │   ├── user.repository.js
│   │   │   │   ├── user.routes.js
│   │   │   │
│   │   │   ├── 📁 projects/
│   │   │   │   ├── project.controller.js
│   │   │   │   ├── project.service.js
│   │   │   │   ├── project.routes.js
│   │   │   │
│   │   │   ├── 📁 invoices/
│   │   │   │   ├── invoice.controller.js
│   │   │   │   ├── invoice.service.js
│   │   │   │   ├── invoice.routes.js
│   │   │   │
│   │   │   ├── 📁 payments/
│   │   │   │   ├── payment.controller.js
│   │   │   │   ├── payment.service.js
│   │   │   │   ├── payment.routes.js
│   │   │   │
│   │   │   ├── 📁 ledger/
│   │   │   │   ├── ledger.controller.js
│   │   │   │   ├── ledger.service.js
│   │   │   │   ├── ledger.repository.js
│   │   │   │
│   │   │   ├── 📁 adjustments/
│   │   │   │   ├── adjustment.controller.js
│   │   │   │   ├── adjustment.service.js
│   │   │   │
│   │   │   ├── 📁 notifications/
│   │   │   │   ├── notification.controller.js
│   │   │   │   ├── notification.service.js
│   │   │   │   ├── notification.worker.js
│   │   │   │
│   │   │   ├── 📁 reports/
│   │   │   │   ├── report.controller.js
│   │   │   │   ├── report.service.js
│   │   │   │   ├── report.scheduler.js
│   │   │   │
│   │   │   ├── 📁 analytics/
│   │   │   │   ├── analytics.service.js
│   │   │   │
│   │   │   ├── 📁 audit/
│   │   │   │   ├── audit.service.js
│   │   │   │   ├── audit.repository.js
│   │   │   │
│   │   │   └── 📁 rbac/
│   │   │       ├── rbac.service.js
│   │   │       ├── permission.service.js
│   │   │
│   │   ├── 📁 utils/
│   │   │   ├── jwt.util.js
│   │   │   ├── response.util.js
│   │   │   ├── date.util.js
│   │   │
│   │   ├── app.js
│   │   └── server.js
│   │
│   ├── package.json
│   └── .env
│
│
├── 📁 frontend/
│   │
│   ├── 📁 src/
│   │   │
│   │   ├── 📁 api/
│   │   │   ├── axios.config.js
│   │   │   ├── auth.api.js
│   │   │   ├── user.api.js
│   │   │   ├── project.api.js
│   │   │   ├── invoice.api.js
│   │   │   ├── payment.api.js
│   │   │   ├── ledger.api.js
│   │   │   ├── notification.api.js
│   │   │   ├── report.api.js
│   │   │
│   │   ├── 📁 store/
│   │   │   ├── auth.store.js
│   │   │   ├── user.store.js
│   │   │   ├── project.store.js
│   │   │   ├── finance.store.js
│   │   │
│   │   ├── 📁 context/
│   │   │   ├── AuthContext.jsx
│   │   │   ├── RBACContext.jsx
│   │   │
│   │   ├── 📁 routes/
│   │   │   ├── AppRoutes.jsx
│   │   │   ├── ProtectedRoute.jsx
│   │   │   ├── RoleRoutes.jsx
│   │   │
│   │   ├── 📁 layouts/
│   │   │   ├── AdminLayout.jsx
│   │   │   ├── ManagerLayout.jsx
│   │   │   ├── AccountLayout.jsx
│   │   │   ├── ClientLayout.jsx
│   │   │
│   │   ├── 📁 pages/
│   │   │   │
│   │   │   ├── 📁 admin/
│   │   │   │   ├── Dashboard.jsx
│   │   │   │   ├── Users.jsx
│   │   │   │   ├── Roles.jsx
│   │   │   │   ├── Reports.jsx
│   │   │   │   ├── Analytics.jsx
│   │   │   │   ├── AuditLogs.jsx
│   │   │   │
│   │   │   ├── 📁 manager/
│   │   │   │   ├── Dashboard.jsx
│   │   │   │   ├── Approvals.jsx
│   │   │   │   ├── Invoices.jsx
│   │   │   │   ├── Payments.jsx
│   │   │   │
│   │   │   ├── 📁 account/
│   │   │   │   ├── Dashboard.jsx
│   │   │   │   ├── CreateInvoice.jsx
│   │   │   │
│   │   │   ├── 📁 client/
│   │   │   │   ├── Dashboard.jsx
│   │   │   │   ├── Projects.jsx
│   │   │   │   ├── PaymentRequest.jsx
│   │   │   │   ├── MyReports.jsx
│   │   │   │
│   │   │   ├── 📁 shared/
│   │   │       ├── LedgerView.jsx
│   │   │       ├── BalanceCard.jsx
│   │   │       ├── NotificationPanel.jsx
│   │   │
│   │   ├── 📁 components/
│   │   │   ├── Sidebar.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Table.jsx
│   │   │   ├── Modal.jsx
│   │   │   ├── Form.jsx
│   │   │   ├── Chart.jsx
│   │   │
│   │   ├── 📁 hooks/
│   │   │   ├── useAuth.js
│   │   │   ├── useRBAC.js
│   │   │   ├── useNotifications.js
│   │   │
│   │   ├── 📁 utils/
│   │   │   ├── constants.js
│   │   │   ├── formatters.js
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
│
├── 📄 README.md
└── 📄 docker-compose.yml
