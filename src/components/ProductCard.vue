<script lang="ts">
import type { Product } from '../model/types';
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
    <v-card>
        <v-img class="align-end text-white" height="200px" src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            cover ><v-card-title>{{ product.name }}</v-card-title></v-img>
            <v-chip class="mt-4 ml-3">$ {{ product.price }}</v-chip>


        <v-card-text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore
            voluptatibus!
        </v-card-text>

        <v-card-actions>
            <v-btn @click="addToCart" color="indigo-darken-3">Agregar al carrito</v-btn>
        </v-card-actions>
    </v-card>

</template>