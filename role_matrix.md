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
