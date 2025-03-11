<script setup lang="ts">
import { RouterView } from 'vue-router'
import InksideLogo from "@/ui/components/icons/InksideLogo.vue";
</script>

<template>
  <v-app>
    <v-app-bar height="100">
      <template v-slot:prepend>
        <RouterLink to="/"><InksideLogo class="logo"/></RouterLink>
      </template>
      <v-app-bar-title>

        <h1 class="text-center">
          <span class="text-h3 d-block" lang="en">Inkside</span>
          <span class="text-subtitle-1 d-block text-primary">Créez des livres qui vous ressemblent</span>
        </h1>
      </v-app-bar-title>

      <RouterLink to="/login">Login</RouterLink>
    </v-app-bar>

    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap');

body {
  font-family: 'Nunito', sans-serif;
  color: rgba(var(--v-theme-on_surface));
}

main {
  margin: 0 16px;
}

.logo {
  height: 100px;
  width: 100px
}
</style>
