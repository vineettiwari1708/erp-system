frontend/
│
├── src/
│
│   ├── api/
│   │   ├── axios.js          # base API instance
│   │   ├── auth.api.js
│   │   ├── user.api.js
│   │   ├── invoice.api.js
│   │   ├── payment.api.js
│   │   ├── admin.api.js
│
│   ├── app/
│   │   ├── store.js          # Redux/Zustand store
│   │   ├── slices/
│   │       ├── auth.slice.js
│   │       ├── user.slice.js
│   │       ├── invoice.slice.js
│   │       ├── payment.slice.js
│
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── Table.jsx
│   │   │   ├── Modal.jsx
│   │   │
│   │   ├── charts/
│   │   │   ├── BalanceChart.jsx
│   │   │
│   │   ├── forms/
│   │       ├── LoginForm.jsx
│   │       ├── InvoiceForm.jsx
│   │       ├── PaymentForm.jsx
│
│   ├── pages/
│   │   ├── auth/
│   │   │   ├── Login.jsx
│   │   │
│   │   ├── admin/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Users.jsx
│   │   │   ├── Approvals.jsx
│   │   │   ├── Ledger.jsx
│   │   │
│   │   ├── manager/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── CreateInvoice.jsx
│   │   │   ├── Invoices.jsx
│   │   │
│   │   ├── user/
│   │       ├── Dashboard.jsx
│   │       ├── MyInvoices.jsx
│   │       ├── Payments.jsx
│   │       ├── Balance.jsx
│
│   ├── layouts/
│   │   ├── AdminLayout.jsx
│   │   ├── ManagerLayout.jsx
│   │   ├── UserLayout.jsx
│
│   ├── routes/
│   │   ├── AppRoutes.jsx
│   │   ├── ProtectedRoute.jsx
│
│   ├── hooks/
│   │   ├── useAuth.js
│   │   ├── useBalance.js
│
│   ├── utils/
│   │   ├── formatDate.js
│   │   ├── calculateBalance.js
│
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│
│   ├── App.jsx
│   ├── main.jsx
│
├── .env
├── package.json
└── vite.config.js
