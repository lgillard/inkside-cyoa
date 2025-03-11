<template>
  <v-card class="elevation-12 mx-auto mt-8" max-width="500">
    <v-toolbar color="primary">
      <v-toolbar-title>Créer un compte</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form>
        <v-text-field
            name="email"
            label="Email"
            type="email"
        ></v-text-field>
        <v-text-field
            name="login"
            label="Pseudo"
            type="text"
        ></v-text-field>
        <v-text-field
            id="password"
            name="password"
            label="Mot de passe"
            type="password"
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" type="submit">Créer le compte</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: 'SignUpForm'
}
</script>