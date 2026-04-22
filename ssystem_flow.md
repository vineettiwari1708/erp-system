                        ┌──────────────┐
                        │   ADMIN      │
                        └──────┬───────┘
                               │
                ┌──────────────┼────────────────┐
                │              │                │
                ▼              ▼                ▼

     ┌────────────────┐ ┌────────────────┐ ┌──────────────────┐
     │ CREATE USER    │ │ APPROVE USER  │ │ DISABLE USER     │
     │ (or manager)   │ │               │ │                  │
     └──────┬─────────┘ └──────┬─────────┘ └──────────────────┘
            │                  │
            ▼                  ▼
     status = pending    status = active/disabled


────────────────────────────────────────────────────────────


                 ┌────────────────────┐
                 │     MANAGER       │
                 └────────┬──────────┘
                          │
                          ▼
               ┌────────────────────┐
               │ CREATE INVOICE     │
               │ (for user)         │
               └────────┬───────────┘
                        │
                        ▼
              ┌─────────────────────┐
              │ ADMIN APPROVAL      │
              └────────┬────────────┘
                       │
              approved │ rejected
                       ▼
              ┌─────────────────────┐
              │ INVOICE ACTIVE      │
              │ (DEBIT BALANCE)     │
              └─────────────────────┘


────────────────────────────────────────────────────────────


                      ┌──────────────┐
                      │    USER      │
                      └──────┬───────┘
                             │
        ┌────────────────────┼────────────────────┐
        │                    │                    │
        ▼                    ▼                    ▼

┌────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│ VIEW INVOICES  │  │ CUSTOM PAYMENT   │  │ VIEW BALANCE     │
│ (approved only)│  │ (manual amount)  │  │ (pending/advance)│
└──────┬─────────┘  └──────┬───────────┘  └──────────────────┘
       │                   │
       ▼                   ▼

 DEBIT BALANCE     ┌────────────────────┐
                   │ PAYMENT REQUEST     │
                   │ (pending approval)  │
                   └────────┬───────────┘
                            │
                            ▼
                   ┌────────────────────┐
                   │ ADMIN APPROVAL     │
                   └────────┬───────────┘
                            │
                  approved  │ rejected
                            ▼
                   ┌────────────────────┐
                   │ TRANSACTION CREATED│
                   │ (CREDIT BALANCE)   │
                   └────────────────────┘


────────────────────────────────────────────────────────────


                 ┌────────────────────────┐
                 │ ADMIN ADJUSTMENT       │
                 └─────────┬──────────────┘
                           │
            ┌──────────────┼──────────────┐
            ▼                             ▼

   CREDIT USER BALANCE         DEBIT USER BALANCE
   (bonus/add money)           (penalty/deduction)

______________________________________________________________________



🧠 SIMPLE SYSTEM SUMMARY
🧾 Invoice Flow
Manager → Invoice → Admin Approval → Debit Balance
💳 Payment Flow
User → Payment Request → Admin Approval → Transaction → Credit Balance
🛠 Adjustment Flow
Admin → Direct Credit/Debit → Immediate Balance Update
👤 User Flow
Login → View invoices → Make payments → Check balance
👑 Admin Flow
User management → Invoice approval → Payment approval → Adjust balances
📊 FINAL SYSTEM VIEW
BALANCE = (Payments + Admin Credits)
          - (Invoices + Admin Debits)
🚀 WHAT THIS FLOW GIVES YOU

✔ Clear financial logic
✔ Full approval system
✔ Real-world accounting behavior
✔ Scalable architecture
✔ Easy frontend mapping
✔ Clean separation of roles
