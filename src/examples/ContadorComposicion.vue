<script setup lang="ts">
import { ref } from "vue";

const contador = ref(0);
const incrementar = () => contador.value++;
const decrementar = () => contador.value--;

</script>

<template>
    <h1>Soy l version de Contador con composition API</h1>
    <h2>Contador: {{ contador }}</h2>
    <button @click="incrementar">Incrementar</button>
    <button @click="decrementar">Decrementar</button>
</template>
