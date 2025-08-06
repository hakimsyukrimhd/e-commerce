# e-commerce

This repository is about e-commerce

# IMPORTANTS!

1. create file .gitignore and .env
2. in .gitignore file write node_modules and .env in the second line

# ENDPOINTS PRODUCTS

| Method | Routes         | Requirement |
| ------ | -------------- | ----------- |
| GET    | /product       | -           |
| GET    | /product/:slug | params      |
| POST   | /product       | (admin)     |
| PUT    | /product/:slug | (admin)     |
| DELETE | /product/:slug | (admin)     |

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

| Method | Routes         | Requirement |
| ------ | -------------- | ----------- |
| POST   | /user/register | -           |
| POST   | /user/login    | -           |
| PUT    | /user/:id      | params      |
| DELETE | /user/:id      | params      |

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

| Method | Routes                 | Requirement |
| ------ | ---------------------- | ----------- |
| GET    | /products/category     | -           |
| GET    | /product/category/:id  | params      |
| POST   | /products/category     | (admin)     |
| PUT    | /products/category/:id | params      |
| DELETE | /products/category:id  | params      |

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
    "id" : 1,
    "productId" : "",
    "quantity" : 1,
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
