                          ┌──────────────┐
                          │    USERS     │
                          ├──────────────┤
                          │ id (PK)      │
                          │ name         │
                          │ email        │
                          │ password     │
                          │ role         │
                          │ status       │
                          │ created_by FK│◄───────────────┐
                          │ approved_by FK│               │
                          └──────┬────────┘               │
                                 │                        │
         ┌───────────────────────┼────────────────────────┼──────────────────────┐
         │                       │                        │                      │
         │                       │                        │                      │
┌────────▼────────┐   ┌──────────▼─────────┐   ┌──────────▼─────────┐  ┌───────▼──────────┐
│    INVOICES     │   │ PAYMENT_REQUESTS   │   │ USER_ADJUSTMENTS   │  │  TRANSACTIONS    │
├─────────────────┤   ├────────────────────┤   ├────────────────────┤  ├──────────────────┤
│ id (PK)         │   │ id (PK)            │   │ id (PK)            │  │ id (PK)          │
│ user_id (FK)    │   │ user_id (FK)       │   │ user_id (FK)       │  │ user_id (FK)     │
│ manager_id (FK) │   │ invoice_id (FK)    │   │ type               │  │ invoice_id (FK)  │
│ admin_id (FK)   │   │ amount             │   │ amount             │  │ amount           │
│ total_amount    │   │ status             │   │ note               │  │ payment_req_id FK│
│ status          │   │ admin_id (FK)      │   │ created_by (FK)    │  │ created_at       │
│ created_at      │   │ created_at         │   │ created_at         │  └──────────────────┘
└──────┬──────────┘   └─────────┬──────────┘   └─────────┬──────────┘
       │                        │                        │
       │                        │                        │
       │                ┌───────▼────────┐              │
       │                │ INVOICE_ITEMS  │              │
       │                ├────────────────┤              │
       │                │ id (PK)        │              │
       │                │ invoice_id (FK)│──────────────┘
       │                │ description    │
       │                │ quantity       │
       │                │ price          │
       │                │ total          │
       │                └────────────────┘
       │
       ▼
┌────────────────────┐
│   APPROVAL_LOGS    │
├────────────────────┤
│ id (PK)            │
│ entity_type        │
│ entity_id          │
│ action             │
│ admin_id (FK)      │
│ created_at         │
└────────────────────┘
