<script lang="ts">
import { watch } from 'vue';

import ProductCard from './ProductCard.vue';
import CartShoping from './Cart.vue';
import  { type Product, type ProductShopingCart } from './types';

export default {
    name: 'ProductList',
    components: {
        ProductCard,
        CartShoping
    },
    setup() {
        return {
            productsList:<Array<Product>>[
            { id: 1, name: 'Producto 1', price: 100 },
            { id: 2, name: 'Producto 2', price: 200 },
            { id: 3, name: 'Producto 3', price: 300 },
            { id: 4, name: 'Producto 4', price: 400 },
            { id: 5, name: 'Producto 5', price: 500 },
        ],
            cart: <Array<ProductShopingCart>>[],
        }
    },
    methods: {
        onAddProduct(product: Product) {
            console.log('onAddProduct', product);
            const productInCart = this.cart.find(p => p.id === product.id);
           
            if (productInCart) {
                console.log('productInCart', productInCart);
                productInCart.quantity++;    
                console.log('cart new', this.cart);
            } else {
                console.log('newProduct', product);
                const newProduct: ProductShopingCart = { id:product.id, quantity: 1  };
                this.cart.push( newProduct);
                console.log('cart new', this.cart);
            }
            console.log('cart', this.cart);
        }
    }
}
</script>

<template>
    <div>
        <h1>Lista de productos</h1>

        <ProductCard v-for="product in productsList" :product="product" :key="product.id" @addtocart="onAddProduct" />
        <CartShoping :details="cart" />

    </div>
</template>