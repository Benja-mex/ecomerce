<script lang="ts">
import { ref } from 'vue';

import ProductCard from './ProductCard.vue';
import CartShoping from './Cart.vue';
import { type Product, type ProductShopingCart } from '../model/types';

export default {
    name: 'ProductList',
    components: {
        ProductCard,
        CartShoping
    },
    setup() {
        return {
            productsList: ref<Product[]>([
                { id: 1, name: 'Producto 1', price: 100 },
                { id: 2, name: 'Producto 2', price: 200 },
                { id: 3, name: 'Producto 3', price: 300 },
                { id: 4, name: 'Producto 4', price: 400 },
                { id: 5, name: 'Producto 5', price: 500 },
            ]),
            cart: ref<ProductShopingCart[]>([]),
        }
    },
    methods: {
        onAddProduct(product: Product) {
            const productInCart = this.cart.find(p => p.id === product.id);
            if (productInCart) {
                productInCart.quantity++;
            } else {
                const newProduct: ProductShopingCart = { id: product.id, quantity: 1 };
                this.cart.push(newProduct);
            }

        }
    }
}
</script>

<template>
   
    <v-row>
        <v-col v-for="product in productsList" :key="product.id" cols="4">
            <ProductCard :product="product" :key="product.id" @addtocart="onAddProduct" />
        </v-col>
    </v-row>

    <CartShoping :details="cart" />

</template>