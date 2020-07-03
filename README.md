# Personal Finances Manager API

## 1) Functional Requirements
  ### Authentication
  - To do Login by e-mail and password with e-mail check;
  - Password redefinition by password old, notification of the change by e-mail and token session expiration;
  - Password redefinition  by e-mail;
  - Hash token authentication.
  ### Features
  - Create, update, exclude and list non-basic categories;
  - Create, update, exclude and list accounts;
  - Create, update, exclude and list fixed or non-fixed financial expenditure;
  - Create, update, and exclude and list fixed and non-fixed finances resources of accounts;
  - Create, update, and delete and list non-fixed payment methods;
  - Fixed or non-fixed financial expenditure should be linked to some of the categories;
  - Fixed or non-fixed financial expenditure should be linked to some of the payment methods;
  - The fixed payment methods should be linked to some of fixed accounts;
  - The financial expenditure are accounting entries of an account;
  - Add and diseable accounting entries of an account;
  - The fixed payment methods: Credit card, In cash, Bank debit;
  - The fixed accounts: Bank account, Credit card, Cash;
  - Transfers between accounts should be allowed.

### 2) Non-Functional Requirements
  - API REST;
  - Use of postgresql relational database for entities;
  - Use non-relational database like mongo ou firebase for the logs;
  - Push Notification manager;
  - Use of the most current NodeJs for API development;
  - Use non-relational database Redis for cache of constants and refresh tokens.
  - Use docker's containers.
  - The API's response around de 2 seconds;
  - Success and error messages REST should be standardized;
  - Using the TDD development method.

*By Welisson Moura*

License
----

MIT