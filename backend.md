backend/
│
├── src/
│   │
│   ├── config/
│   │   ├── db.js                # PostgreSQL connection
│   │   ├── env.js              # environment variables
│   │
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── user.controller.js
│   │   ├── invoice.controller.js
│   │   ├── payment.controller.js
│   │   ├── adjustment.controller.js
│   │   ├── admin.controller.js
│   │
│   ├── services/
│   │   ├── auth.service.js
│   │   ├── user.service.js
│   │   ├── invoice.service.js
│   │   ├── payment.service.js
│   │   ├── balance.service.js
│   │
│   ├── routes/
│   │   ├── auth.routes.js
│   │   ├── user.routes.js
│   │   ├── invoice.routes.js
│   │   ├── payment.routes.js
│   │   ├── admin.routes.js
│   │
│   ├── middleware/
│   │   ├── auth.middleware.js   # JWT verification
│   │   ├── role.middleware.js   # admin/manager/user access
│   │   ├── error.middleware.js
│   │
│   ├── models/ (optional if using ORM)
│   │   ├── user.model.js
│   │   ├── invoice.model.js
│   │   ├── payment.model.js
│   │
│   ├── utils/
│   │   ├── response.js
│   │   ├── logger.js
│   │   ├── helpers.js
│   │
│   ├── validations/
│   │   ├── auth.validation.js
│   │   ├── invoice.validation.js
│   │   ├── payment.validation.js
│   │
│   ├── app.js                  # express app setup
│   ├── server.js              # entry point
│
├── .env
├── package.json
└── README.md
