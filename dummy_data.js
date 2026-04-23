
// ================================
// USERS (RBAC SYSTEM)
// ================================
export const users = [
  {
    id: "u1",
    name: "Admin User",
    email: "admin@saas.com",
    role: "ADMIN",
    status: "ACTIVE"
  },
  {
    id: "u2",
    name: "Manager One",
    email: "manager@saas.com",
    role: "MANAGER",
    status: "ACTIVE"
  },
  {
    id: "u3",
    name: "Account User",
    email: "account@saas.com",
    role: "ACCOUNT",
    status: "ACTIVE"
  },
  {
    id: "u4",
    name: "Client A",
    email: "client@saas.com",
    role: "CLIENT",
    status: "ACTIVE"
  }
];


// ================================
// PROJECTS (MULTI-PROJECT SYSTEM)
// ================================
export const projects = [
  {
    id: "p1",
    name: "E-Commerce Platform",
    userId: "u4",
    status: "ACTIVE"
  },
  {
    id: "p2",
    name: "CRM System",
    userId: "u4",
    status: "ACTIVE"
  }
];


// ================================
// INVOICES
// ================================
export const invoices = [
  {
    id: "i1",
    projectId: "p1",
    clientId: "u4",
    createdBy: "u3",
    status: "PENDING",
    totalAmount: 5000,
    items: [
      {
        description: "UI Development",
        quantity: 1,
        unitPrice: 3000,
        total: 3000
      },
      {
        description: "Backend API",
        quantity: 1,
        unitPrice: 2000,
        total: 2000
      }
    ]
  },
  {
    id: "i2",
    projectId: "p2",
    clientId: "u4",
    createdBy: "u3",
    status: "APPROVED",
    totalAmount: 8000
  }
];


// ================================
// PAYMENT REQUESTS
// ================================
export const payments = [
  {
    id: "pay1",
    projectId: "p1",
    clientId: "u4",
    amount: 2000,
    status: "PENDING"
  },
  {
    id: "pay2",
    projectId: "p2",
    clientId: "u4",
    amount: 5000,
    status: "APPROVED"
  }
];


// ================================
// LEDGER (FINANCIAL CORE)
// ================================
export const ledger = [
  {
    id: "l1",
    projectId: "p1",
    userId: "u4",
    type: "DEBIT",
    source: "INVOICE",
    amount: 5000,
    balanceAfter: 5000
  },
  {
    id: "l2",
    projectId: "p1",
    userId: "u4",
    type: "CREDIT",
    source: "PAYMENT",
    amount: 2000,
    balanceAfter: 3000
  },
  {
    id: "l3",
    projectId: "p2",
    userId: "u4",
    type: "DEBIT",
    source: "INVOICE",
    amount: 8000,
    balanceAfter: 11000
  }
];


// ================================
// NOTIFICATIONS
// ================================
export const notifications = [
  {
    id: "n1",
    userId: "u4",
    title: "Invoice Created",
    message: "New invoice i1 has been created",
    type: "INVOICE",
    isRead: false
  },
  {
    id: "n2",
    userId: "u2",
    title: "Payment Request",
    message: "Client requested ₹2000 payment",
    type: "PAYMENT",
    isRead: false
  },
  {
    id: "n3",
    userId: "u1",
    title: "Daily Report Ready",
    message: "System daily report generated",
    type: "REPORT",
    isRead: true
  }
];


// ================================
// REPORTS (ADMIN + USER)
// ================================
export const reports = [
  {
    id: "r1",
    type: "DAILY",
    scope: "ADMIN",
    data: {
      totalRevenue: 20000,
      totalExpense: 8000,
      activeUsers: 4
    }
  },
  {
    id: "r2",
    type: "USER",
    scope: "u4",
    data: {
      totalInvoices: 2,
      totalPaid: 2000,
      balance: 11000
    }
  }
];


// ================================
// ANALYTICS (DASHBOARD STATS)
// ================================
export const analytics = {
  totalRevenue: 20000,
  totalOutstanding: 11000,
  totalUsers: 4,
  totalProjects: 2,
  pendingInvoices: 1,
  pendingPayments: 1
};


🧠 HOW TO USE THIS IN FRONTEND
📌 Example (React)
import { users, invoices, payments } from "../data/dummy_data";

console.log(users);
console.log(invoices);
🔄 EASY BACKEND MIGRATION LATER

When backend is ready, just replace:

dummy_data.js  →  API calls (axios/fetch)

Example:

// before
import { invoices } from "./dummy_data";

// after
const res = await axios.get("/api/invoices");
