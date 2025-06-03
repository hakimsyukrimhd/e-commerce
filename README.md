# e-commerce

This repository is about e-commerce

# IMPORTANTS!

1. create file .gitignore and .env
2. in .gitignore file write node_modules and .env in the second line

# ENDPOINTS PRODUCTS

| Method | Routes        | Requirement |
| ------ | ------------- | ----------- |
| GET    | /products     | -           |
| GET    | /products/:id | params      |
| POST   | /products     | (admin)     |
| PUT    | /products/:id | params      |
| DELETE | /products/:id | params      |

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
| POST   | /auth/register | -           |
| POST   | /auth/login    | -           |
| GET    | /users         | (admin)     |
| GET    | /users/:id     | params      |
| PUT    | /users/:id     | params      |
| DELETE | /users/:id     | params      |

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
}
```
