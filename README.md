# ecomerce

Tienda online.

## Entities

### Product

- id
- name
- description
- precio
- image

### Category

- id
- name
- description

### Cart
- products: `[{productId:1, quantity: 3},{productId: 7, quantity: 7}]`

## Components

### ProductCard

## Pages

- / -> Todos los productos
- /category/5 -> Productos solo de la categoría 5
- /cart -> ver el carrito de compras actual

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
