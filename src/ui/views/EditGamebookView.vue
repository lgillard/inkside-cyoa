<script setup lang="ts">
import {useGamebookStore} from "@/application/stores/gamebook.store.ts";
import {useRoute} from "vue-router";
import GamebookTree from "@/ui/components/_EditGamebookView/GamebookTree.vue";

const route = useRoute();

const gamebookStore = useGamebookStore();
gamebookStore.fetchGamebookTree(route.params.gamebookId as string);

</script>

<template>
  <v-skeleton-loader v-if="gamebookStore.loading" type="card"/>
  <div v-else>
    <div class="d-flex">
      <h2 class="text-primary text-h4 my-4">Éditer : {{gamebookStore.currentGamebookTree?.title ?? ''}}</h2>
      <button title="pen-icon">TODO</button>
    </div>
    <GamebookTree :gamebook="gamebookStore.currentGamebookTree"/>
  </div>
</template>
