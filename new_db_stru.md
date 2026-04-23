
-- =====================================================
-- EXTENSIONS
-- =====================================================
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- =====================================================
-- USERS (RBAC CORE)
-- =====================================================
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,

    role TEXT NOT NULL CHECK (role IN ('ADMIN','MANAGER','ACCOUNT','CLIENT')),

    status TEXT NOT NULL DEFAULT 'PENDING'
        CHECK (status IN ('PENDING','ACTIVE','DISABLED','DELETED')),

    created_by UUID REFERENCES users(id),
    approved_by UUID REFERENCES users(id),

    deleted_at TIMESTAMP,
    deleted_by UUID REFERENCES users(id),

    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- =====================================================
-- ROLES + PERMISSIONS (RBAC SYSTEM)
-- =====================================================
CREATE TABLE roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT UNIQUE NOT NULL
);

CREATE TABLE permissions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT UNIQUE NOT NULL
);

CREATE TABLE role_permissions (
    role_id UUID REFERENCES roles(id),
    permission_id UUID REFERENCES permissions(id),
    PRIMARY KEY (role_id, permission_id)
);

-- =====================================================
-- PROJECTS (MULTI-PROJECT SYSTEM)
-- =====================================================
CREATE TABLE projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),

    name TEXT NOT NULL,
    description TEXT,

    status TEXT DEFAULT 'ACTIVE'
        CHECK (status IN ('ACTIVE','COMPLETED','ARCHIVED')),

    created_at TIMESTAMP DEFAULT NOW()
);

-- =====================================================
-- INVOICES
-- =====================================================
CREATE TABLE invoices (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    project_id UUID REFERENCES projects(id),
    client_id UUID REFERENCES users(id),
    created_by UUID REFERENCES users(id),

    status TEXT DEFAULT 'PENDING'
        CHECK (status IN ('PENDING','APPROVED','REJECTED','VOID')),

    total_amount NUMERIC(12,2) NOT NULL,

    approved_by UUID REFERENCES users(id),
    approved_at TIMESTAMP,

    created_at TIMESTAMP DEFAULT NOW()
);

-- =====================================================
-- INVOICE ITEMS
-- =====================================================
CREATE TABLE invoice_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    invoice_id UUID REFERENCES invoices(id) ON DELETE CASCADE,

    description TEXT,
    quantity INT,
    unit_price NUMERIC(12,2),
    total NUMERIC(12,2)
);

-- =====================================================
-- PAYMENT REQUESTS
-- =====================================================
CREATE TABLE payment_requests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    project_id UUID REFERENCES projects(id),
    client_id UUID REFERENCES users(id),

    amount NUMERIC(12,2) NOT NULL,

    status TEXT DEFAULT 'PENDING'
        CHECK (status IN ('PENDING','APPROVED','REJECTED')),

    approved_by UUID REFERENCES users(id),
    approved_at TIMESTAMP,

    created_at TIMESTAMP DEFAULT NOW()
);

-- =====================================================
-- LEDGER (IMMUTABLE CORE SYSTEM)
-- =====================================================
CREATE TABLE ledger_entries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    project_id UUID REFERENCES projects(id),
    user_id UUID REFERENCES users(id),

    entry_type TEXT NOT NULL
        CHECK (entry_type IN ('CREDIT','DEBIT')),

    source_type TEXT NOT NULL
        CHECK (source_type IN ('INVOICE','PAYMENT','ADJUSTMENT')),

    source_id UUID NOT NULL,

    amount NUMERIC(12,2) NOT NULL,

    description TEXT,

    created_by UUID REFERENCES users(id),

    created_at TIMESTAMP DEFAULT NOW()
);

-- =====================================================
-- ADJUSTMENTS (ADMIN CORRECTIONS)
-- =====================================================
CREATE TABLE adjustments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID REFERENCES users(id),
    project_id UUID REFERENCES projects(id),

    type TEXT NOT NULL CHECK (type IN ('CREDIT','DEBIT')),
    amount NUMERIC(12,2) NOT NULL,

    reason TEXT,

    created_by UUID REFERENCES users(id),
    created_at TIMESTAMP DEFAULT NOW()
);

-- =====================================================
-- NOTIFICATIONS
-- =====================================================
CREATE TABLE notifications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID REFERENCES users(id),

    title TEXT NOT NULL,
    message TEXT NOT NULL,

    type TEXT CHECK (
        type IN ('INVOICE','PAYMENT','REPORT','SYSTEM','ALERT')
    ),

    is_read BOOLEAN DEFAULT FALSE,

    created_at TIMESTAMP DEFAULT NOW()
);

-- =====================================================
-- REPORTS SYSTEM
-- =====================================================
CREATE TABLE reports (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    type TEXT CHECK (
        type IN ('DAILY','WEEKLY','MONTHLY','USER','PROJECT')
    ),

    scope_id UUID, -- user_id or project_id or NULL (admin report)

    data JSONB,

    generated_by TEXT DEFAULT 'SYSTEM',

    created_at TIMESTAMP DEFAULT NOW()
);

-- =====================================================
-- AUDIT LOGS
-- =====================================================
CREATE TABLE audit_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID REFERENCES users(id),

    action TEXT NOT NULL,
    entity_type TEXT,
    entity_id UUID,

    old_value JSONB,
    new_value JSONB,

    performed_by UUID REFERENCES users(id),

    created_at TIMESTAMP DEFAULT NOW()
);

-- =====================================================
-- INDEXES (PERFORMANCE LAYER)
-- =====================================================

-- USERS
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_role ON users(role);
CREATE INDEX idx_users_status ON users(status);

-- PROJECTS
CREATE INDEX idx_projects_user_id ON projects(user_id);
CREATE INDEX idx_projects_status ON projects(status);

-- INVOICES
CREATE INDEX idx_invoices_project_id ON invoices(project_id);
CREATE INDEX idx_invoices_client_id ON invoices(client_id);
CREATE INDEX idx_invoices_status ON invoices(status);

-- PAYMENTS
CREATE INDEX idx_payments_project_id ON payment_requests(project_id);
CREATE INDEX idx_payments_client_id ON payment_requests(client_id);
CREATE INDEX idx_payments_status ON payment_requests(status);

-- LEDGER
CREATE INDEX idx_ledger_user_id ON ledger_entries(user_id);
CREATE INDEX idx_ledger_project_id ON ledger_entries(project_id);
CREATE INDEX idx_ledger_created_at ON ledger_entries(created_at DESC);

-- NOTIFICATIONS
CREATE INDEX idx_notifications_user_id ON notifications(user_id);
CREATE INDEX idx_notifications_is_read ON notifications(is_read);

-- REPORTS
CREATE INDEX idx_reports_type ON reports(type);
CREATE INDEX idx_reports_scope ON reports(scope_id);

-- AUDIT
CREATE INDEX idx_audit_user_id ON audit_logs(user_id);
CREATE INDEX idx_audit_entity ON audit_logs(entity_type, entity_id);
