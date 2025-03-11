<template>
  <h2 class="text-primary text-h4 mt-8 mb-4">Espace auteur</h2>

  <v-row class="justify-center">
    <v-col cols="12" md="5" v-for="feature in features" :key="feature.title">
      <v-card variant="tonal">
        <v-card-title><h3 class="text-secondary text-h5">{{feature.title}}</h3></v-card-title>
        <v-card-text><p class="mb-4">{{feature.description}}</p></v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script setup lang="ts">
  const features: Array<{title: string, description: string}> = [
    {
      title: "Éditeur intuitif",
      description: "Créez facilement des histoires ramifiées grâce à notre éditeur visuel. Ajoutez des choix, des conséquences et des événements aléatoires sans avoir besoin de coder."
    },
    {
      title: "Système de jeu personnalisable",
      description: "Créez des livres-jeux classiques en solo ou concevez des aventures où les joueurs collaborent ou s'affrontent. Choisissez l'expérience adaptée à vos histoires."
    },
    {
      title: "Publication multi-plateforme",
      description: "Publiez vos créations et touchez instantanément une communauté de passionnés."
    },
    {
      title: "Suivis Statistiques",
      description: "Suivez la progression des joueurs, analysez leurs choix et améliorez votre histoire grâce à des données précises."
    },
  ];
</script>
