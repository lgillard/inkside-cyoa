<template>
  <p class="text-center mx-16 text-subtitle-1 my-8">
    <span class="text-h3 d-block font-weight-bold text-secondary mb-4">
      Créez, Publiez et Partagez vos Livres-Jeux grâce à <span lang="en">Inkside</span>
    </span>
    <span lang="en">Inkside</span> est une plateforme dédiée aux auteurs de livres-jeux qui souhaitent créer des aventures interactives, en solo ou en multijoueur, et les partager avec une communauté passionnée.
  </p>

  <WhatIsAGamebook/>
  <AuthorFeaturesList/>
  <GetStarted/>
</template>
<script setup lang="ts">
import WhatIsAGamebook from "@/ui/components/_HomeView/WhatIsAGamebook.vue";
import AuthorFeaturesList from "@/ui/components/_HomeView/AuthorFeaturesList.vue";
import GetStarted from "@/ui/components/_HomeView/GetStarted.vue";
</script>
