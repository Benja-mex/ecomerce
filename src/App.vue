<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <v-app>
    <v-app-bar flat>
      <v-container class="mx-auto d-flex align-center justify-center">
        <v-avatar class="me-4 " color="grey-darken-1" size="32"></v-avatar>

        <RouterLink to="/" custom v-slot="{ navigate }"><v-btn variant="text" @click="navigate">Home</v-btn></RouterLink>
        <RouterLink to="/cart" custom v-slot="{ navigate }"><v-btn variant="text" @click="navigate">Cart</v-btn></RouterLink>
        <RouterLink to="/about" custom v-slot="{ navigate }"><v-btn variant="text" @click="navigate">Abaut</v-btn></RouterLink>
      </v-container>
    </v-app-bar>

    <v-main>
      <v-container>
        <RouterView />
      </v-container>
    </v-main>
  </v-app>


</template>
