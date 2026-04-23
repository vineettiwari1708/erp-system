
📦 saas-finance-system/
│
├── 📁 backend/
│   │
│   ├── 📁 src/
│   │   ├── 📁 config/
│   │   │   ├── db.js
│   │   │   ├── env.js
│   │   │   └── logger.js
│   │   │
│   │   ├── 📁 middleware/
│   │   │   ├── auth.middleware.js
│   │   │   ├── rbac.middleware.js
│   │   │   ├── error.middleware.js
│   │   │   └── audit.middleware.js
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
│   │   │   │   ├── user.routes.js
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
│   │   │   │   ├── ledger.routes.js
│   │   │   │
│   │   │   ├── 📁 adjustments/
│   │   │   │   ├── adjustment.controller.js
│   │   │   │   ├── adjustment.service.js
│   │   │   │   ├── adjustment.routes.js
│   │   │   │
│   │   │   └── 📁 audit/
│   │   │       ├── audit.service.js
│   │   │       ├── audit.model.js
│   │   │
│   │   ├── 📁 utils/
│   │   │   ├── jwt.js
│   │   │   ├── response.js
│   │   │   └── helpers.js
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
│   │   │   ├── axios.js
│   │   │   ├── auth.api.js
│   │   │   ├── user.api.js
│   │   │   ├── invoice.api.js
│   │   │   ├── payment.api.js
│   │   │   ├── ledger.api.js
│   │   │
│   │   ├── 📁 store/
│   │   │   ├── auth.store.js
│   │   │   ├── user.store.js
│   │   │   ├── finance.store.js
│   │   │
│   │   ├── 📁 routes/
│   │   │   ├── AppRoutes.jsx
│   │   │   ├── ProtectedRoute.jsx
│   │   │
│   │   ├── 📁 layouts/
│   │   │   ├── AdminLayout.jsx
│   │   │   ├── ManagerLayout.jsx
│   │   │   ├── AccountLayout.jsx
│   │   │   ├── ClientLayout.jsx
│   │   │
│   │   ├── 📁 pages/
│   │   │   ├── 📁 auth/
│   │   │   │   ├── Login.jsx
│   │   │   │   ├── Register.jsx
│   │   │   │
│   │   │   ├── 📁 admin/
│   │   │   │   ├── Dashboard.jsx
│   │   │   │   ├── Users.jsx
│   │   │   │   ├── RoleManagement.jsx
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
│   │   │   │   ├── MyInvoices.jsx
│   │   │   │   ├── PaymentRequest.jsx
│   │   │   │
│   │   │   ├── 📁 shared/
│   │   │       ├── LedgerView.jsx
│   │   │       ├── BalanceCard.jsx
│   │   │
│   │   ├── 📁 components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── Table.jsx
│   │   │   ├── Modal.jsx
│   │   │   ├── Form.jsx
│   │   │
│   │   ├── 📁 hooks/
│   │   │   ├── useAuth.js
│   │   │   ├── usePermissions.js
│   │   │
│   │   ├── 📁 context/
│   │   │   ├── AuthContext.jsx
│   │   │
│   │   ├── 📁 utils/
│   │   │   ├── constants.js
│   │   │   ├── formatters.js
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
│
├── 📄 README.md
└── 📄 docker-compose.yml
