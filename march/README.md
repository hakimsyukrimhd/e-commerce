# e-commerce

This repository is about e-commerce

# IMPORTANTS!

1. create file .gitignore and .env
2. in .gitignore file write node_modules and .env in the second line

# ENDPOINTS PRODUCTS

| Method | Routes         | Requirement   |
| ------ | -------------- | ------------- |
| GET    | /product       | -             |
| GET    | /product/:slug | params        |
| POST   | /product       | body          |
| PUT    | /product/:slug | body & params |
| DELETE | /product/:slug | params        |

### PRODUCTS Body Requirement

```
{
    "id" : 1,
    "name"  : "",
    "description" : "",
    "price" : 1,
    "stock" : 1,
    "imageUrl" : 25,
}
```

# ENDPOINTS USERS

| Method | Routes         | Requirement   |
| ------ | -------------- | ------------- |
| POST   | /user/register | body          |
| POST   | /user/login    | body          |
| PUT    | /user/:id      | body & params |
| DELETE | /user/:id      | params        |

### USER Body Requirements

```
{
    "id" : 1,
    "fullName" : "",
    "username": "",
    "email" : "",
    "password": "",
}
```

# ENDPOINTS CATEGORY

| Method | Routes                 | Requirement   |
| ------ | ---------------------- | ------------- |
| GET    | /products/category     | -             |
| POST   | /products/category     | body          |
| PUT    | /products/category/:id | body & params |
| DELETE | /products/category:id  | params        |

### CATEGORY Body Requirements

```
{
    "id" : 1,
    "name" : "",
}
```

# ENDPOINTS CART

| Method | Routes          | Requirement |
| ------ | --------------- | ----------- |
| GET    | /cart           | -           |
| POST   | /cart/items     | -           |
| PUT    | /cart/items/:id | params      |
| DELETE | /cart/items/:id | params      |

### CART Body Requirements

```
{
    "userId" : 1,
    "status" : "",
}
```

# ENDPOINTS ORDERS

| Method | Routes      | Requirement |
| ------ | ----------- | ----------- |
| GET    | /orders     | -           |
| GET    | /orders/:id | params      |
| POST   | /orders     | -           |
| PUT    | /orders/:id | params      |
| DELETE | /orders/:id | params      |

### ORDERS Body Requirements ??? dibagian iko ndak tau kim apo isinyo bg

```
{
    "id" : 1,
    "productId" : "",
    "quantity" : 1,
    "status" : "",
    "orderedAt" : "",
}
```

# ENTITY RELATION

Create Database with name : E-Commerce

| Tabel Name | Fields                                                        | Relation                                      |
| ---------- | ------------------------------------------------------------- | --------------------------------------------- |
| users      | fullname, username, email, password                           | has many products                             |
| categories | name                                                          | has many products                             |
| products   | name, description, price, stock, imageUrl, userId, categoryId | belongs to category, belongs to users         |
| customer   | fullname, username, email, password                           | has many cart, has many order                 |
| cart       | productId, customerId, quantity                               | has many products, cart belongs to customer   |
| orders     | productId, customerId, quantity, status                       | has many products, orders belongs to customer |





