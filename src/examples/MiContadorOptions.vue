<script  lang="ts">
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    incrementar() {
      this.count++
    },
    decrementar() {
      this.count--
    }
  }
}
</script>

<template>
<h1>Contador: {{ count }}</h1>
<button @click="incrementar">Incrementar</button>
<button @click="decrementar">Decrementar</button>
<p v-if="count<=10">Vamos tu puedes</p>
<p v-else>ya te falta muy poco</p>
</template>