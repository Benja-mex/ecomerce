<script lang="ts">
//imports
import type { PropType } from 'vue';
import type { ProductShopingCart } from '../model/types';

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
    <v-card class="mt-4">
        <v-card-text>
            <v-card-title>Productos agregados al carrito</v-card-title>
            <v-list>
                <v-list-item v-for="product in details" :value="product.id">
                    <v-list-item-content>
                        <v-list-item-title>
                            producto {{ product.id }}
                        </v-list-item-title>
                        <v-list-item-subtitle>
                           cantidad: {{ product.quantity }}
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>

        </v-card-text>
    </v-card>
</template>