<script lang="ts">
//imports
import type { PropType } from 'vue';
import type { ProductShopingCart } from './types';

export default {
    name: 'CartShoping',
    inheritAttrs: false,
    props: {
        details: {
            type: Object as PropType<Array<ProductShopingCart>>,
            required: true
        }
    }
 
}
</script>

<template>
<p>Productos agregados al carrito</p>
<ul>
    <li v-for="product in details" :key="product.id">
        {{ product.id }} - {{ product.quantity }}
    </li>
</ul>
</template>