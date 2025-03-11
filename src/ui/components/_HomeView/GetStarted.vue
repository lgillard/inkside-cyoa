<template>
  <h2 class="text-primary text-h4 mt-8">Comment ça marche ?</h2>
  <v-container class="ml-0">
  <v-timeline
      density="compact"
      truncate-line="both"
      dot-color="primary"
      size="small">
    <v-timeline-item>
      <h3 class="text-secondary text-h6">Créez un compte <span lang="en">Inkside</span> ou <RouterLink to="/login">connectez-vous</RouterLink></h3>
      <p>
        Créez votre compte <span lang="en">Inkside</span> et accédez à tous les outils de création.
        L'inscription est gratuite et vous donne accès à l'ensemble des fonctionnalités de la plateforme.
      </p>
    </v-timeline-item>

    <v-timeline-item>
      <h3 class="text-secondary text-h6">Écrivez votre livre-jeu</h3>
      <p>
        Utilisez notre éditeur visuel pour structurer votre histoire, ajouter des embranchements et intégrer des
        mécaniques de jeu.
      </p>
    </v-timeline-item>

    <v-timeline-item>
      <h3 class="text-secondary text-h6">Configurez l'expérience joueur</h3>
      <p>
        Définissez comment les joueurs choisissent et collaborent, et personnalisez l'expérience sociale de votre
        livre-jeu.
      </p>
    </v-timeline-item>

    <v-timeline-item>
      <h3 class="text-secondary text-h6">Publiez et partagez</h3>
      <p>
        Une fois votre création terminée, publiez-la.
        Vos lecteurs pourront alors y accéder immédiatement et commencer leur aventure sur leur mobile ou pc.
      </p>
    </v-timeline-item>

    <v-timeline-item>
      <h3 class="text-secondary text-h6">Suivez et améliorez</h3>
      <p>
        Analysez les statistiques de jeu, recueillez les retours des joueurs et mettez à jour votre livre-jeu pour
        offrir la meilleure expérience possible.
      </p>
    </v-timeline-item>
  </v-timeline>
  </v-container>
</template>
