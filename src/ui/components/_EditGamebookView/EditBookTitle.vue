<template>
  <div class="d-flex" v-if="!titleUpdInProgress">
    <h2 class="text-primary text-h4 my-4">{{gamebookTitle}}</h2>
    <button @click="() => titleUpdInProgress = true">
      <v-icon :icon="mdiLeadPencil" title="Modifier le titre du livre"/>
    </button>
  </div>
  <form class="d-flex" v-else>
    <input type="text" class="text-primary text-h4 my-4" v-model="gamebookTitle"/>
    <button @click="saveTitle">
      <v-icon :icon="mdiCheck" title="Sauvegarder le titre du livre"/>
    </button>
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
