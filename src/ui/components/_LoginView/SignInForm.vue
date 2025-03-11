<template>
  <v-form @submit.prevent="login">
    <v-card class="elevation-12 mx-auto mt-8" max-width="500">
      <v-toolbar color="primary">
        <v-toolbar-title>Connectez-vous</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
          <v-text-field
              name="username"
              label="Pseudo"
              type="text"
              v-model="username"
              :disabled="userStore.loading"
          ></v-text-field>
          <v-text-field
              id="password"
              name="password"
              label="Mot de passe"
              type="password"
              v-model="password"
              :disabled="userStore.loading"
          ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" type="submit" :disabled="userStore.loading">Se connecter</v-btn>
      </v-card-actions>
    </v-card>
  </v-form>
</template>

<script lang="ts" setup>
import {useUserStore} from "@/application/stores/user.store.ts";
import {ref} from "vue";
import {useRouter} from "vue-router";

const router = useRouter();
const userStore = useUserStore();

const username = ref<string>('');
const password = ref<string>('');

function login():void {
  userStore.login(username, password)
    .then(() => router.push('/library'));
}
</script>
