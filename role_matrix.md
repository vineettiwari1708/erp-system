FULL PERMISSION MATRIX
LEGEND:
✔ = Allowed
✖ = Not Allowed
△ = Conditional (rules apply)

👥 USER MANAGEMENT
| Action          | Admin | Manager                   | Account          | Client |
| --------------- | ----- | ------------------------- | ---------------- | ------ |
| Create Manager  | ✔     | ✖                         | ✖                | ✖      |
| Create Account  | ✔     | ✔                         | ✖                | ✖      |
| Create Client   | ✔     | ✔                         | ✔ (optional)     | ✖      |
| Approve Manager | ✔     | ✖                         | ✖                | ✖      |
| Approve Account | ✔     | ✖                         | ✖                | ✖      |
| Approve Client  | ✔     | ✔ (if created under them) | ✖                | ✖      |
| Disable User    | ✔     | △ (only lower hierarchy)  | ✖                | ✖      |
| View Users      | ✔     | ✔ (own hierarchy)         | ✔ (clients only) | ✖      |

🧾 INVOICE MANAGEMENT
| Action                         | Admin | Manager            | Account          | Client |
| ------------------------------ | ----- | ------------------ | ---------------- | ------ |
| Create Invoice                 | ✔     | ✔                  | ✔                | ✖      |
| Edit Invoice (before approval) | ✔     | ✔ (own)            | ✔ (own)          | ✖      |
| Delete Invoice (soft)          | ✔     | ✔ (own)            | ✖                | ✖      |
| Approve Invoice                | ✔     | △ (optional layer) | ✖                | ✖      |
| Reject Invoice                 | ✔     | △                  | ✖                | ✖      |
| View All Invoices              | ✔     | ✔ (own hierarchy)  | ✔ (clients only) | ✖      |
| View Own Invoices              | ✔     | ✔                  | ✔                | ✔      |

💳 PAYMENT SYSTEM
| Action                 | Admin | Manager           | Account     | Client  |
| ---------------------- | ----- | ----------------- | ----------- | ------- |
| Create Payment Request | ✔     | ✔                 | ✔           | ✔       |
| Verify Payment         | ✔     | ✔                 | ✔           | ✖       |
| Approve Payment        | ✔     | ✖ (or △ optional) | ✖           | ✖       |
| Reject Payment         | ✔     | ✖                 | ✖           | ✖       |
| View Payments          | ✔     | ✔ (hierarchy)     | ✔ (clients) | ✔ (own) |

💰 LEDGER / TRANSACTIONS
| Action              | Admin | Manager       | Account     | Client |
| ------------------- | ----- | ------------- | ----------- | ------ |
| View All Ledger     | ✔     | ✔ (hierarchy) | ✔ (clients) | ✖      |
| View Own Ledger     | ✔     | ✔             | ✔           | ✔      |
| Create Ledger Entry | ✔     | ✖             | ✖           | ✖      |

🛠 ADMIN ADJUSTMENTS
| Action            | Admin | Manager       | Account     | Client |
| ----------------- | ----- | ------------- | ----------- | ------ |
| Credit Adjustment | ✔     | ✖             | ✖           | ✖      |
| Debit Adjustment  | ✔     | ✖             | ✖           | ✖      |
| View Adjustments  | ✔     | ✔ (hierarchy) | ✔ (clients) | ✖      |

REPORTS
| Action                  | Admin | Manager | Account | Client |
| ----------------------- | ----- | ------- | ------- | ------ |
| System Financial Report | ✔     | ✖       | ✖       | ✖      |
| Team Report             | ✔     | ✔       | ✖       | ✖      |
| Client Report           | ✔     | ✔       | ✔       | ✖      |
| Personal Report         | ✔     | ✔       | ✔       | ✔      |

🔐 SYSTEM CONTROL
| Action             | Admin | Manager     | Account | Client |
| ------------------ | ----- | ----------- | ------- | ------ |
| Role Assignment    | ✔     | ✖           | ✖       | ✖      |
| Change Permissions | ✔     | ✖           | ✖       | ✖      |
| Access Audit Logs  | ✔     | ✔ (limited) | ✖       | ✖      |

