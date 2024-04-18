<script lang="ts">
import type { Product } from './types';
export default {
    name: 'ProductCard',
    inheritAttrs: false,
    props: {
        product: {
            type: Object as () => Product,
            required: true
        }
    },
    emits: ['addtocart'],
    methods: {
        addToCart() {
            this.$emit('addtocart', this.product);
        }
    }
}
</script>

<template>
    <p>{{ product.name }}</p>
    <p>{{ product.price }}</p>
    <button @click="addToCart">Agregar al carrito</button>
    <hr />
</template>