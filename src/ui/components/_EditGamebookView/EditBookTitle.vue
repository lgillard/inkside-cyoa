<template>
  <div class="d-flex" v-if="!titleUpdInProgress">
    <h2 class="text-h4 my-4">{{gamebookTitle}}</h2>
    <v-btn class="text-primary btn" variant="text" @click="() => titleUpdInProgress = true">
      <v-icon :icon="mdiLeadPencil" title="Modifier le titre du livre"/>
    </v-btn>
  </div>
  <form class="d-flex" v-else>
    <input type="text" class="text-primary text-h4 my-4" v-model="gamebookTitle"/>
    <v-btn class="btn" @click="saveTitle">
      <v-icon :icon="mdiCheck" title="Sauvegarder le titre du livre"/>
    </v-btn>
  </form>
</template>
<script setup lang="ts">
import {ref} from "vue";
import {mdiCheck, mdiLeadPencil} from "@mdi/js";
import {useGamebookStore} from "@/application/stores/gamebook.store.ts";
import {useRoute} from "vue-router";

const route = useRoute();
const gamebookStore = useGamebookStore();

const gamebookTitle = ref(gamebookStore.currentGamebookTree?.title ?? '');

const titleUpdInProgress = ref(false);

function saveTitle() {
  gamebookStore.editGamebookTitle(
    route.params['gamebookId'],
    gamebookTitle
  ).then(() => { titleUpdInProgress.value = false });
}
</script>


<style lang="scss">
.btn {
  margin-top: auto;
  margin-bottom: auto;
}
</style>
