<template>
  <v-skeleton-loader v-if="gamebookStore.loading" type="card"/>
  <div v-else>
    <EditBookTitle/>
    <GamebookTree :gamebook="gamebookStore.currentGamebookTree"/>
  </div>
</template>

<script setup lang="ts">
import {useGamebookStore} from "@/application/stores/gamebook.store.ts";
import {useRoute} from "vue-router";
import GamebookTree from "@/ui/components/_EditGamebookView/GamebookTree.vue";
import EditBookTitle from "@/ui/components/_EditGamebookView/EditBookTitle.vue";

const route = useRoute();

const gamebookStore = useGamebookStore();
gamebookStore.fetchGamebookTree(route.params.gamebookId as string);
</script>
