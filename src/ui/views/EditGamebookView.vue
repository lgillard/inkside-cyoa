<template>
  <v-skeleton-loader v-if="gamebookStore.loading" type="card"/>
  <div v-else>
    <EditBookTitle/>
    <v-btn @click="createSection">Nouvelle section</v-btn>
    <GamebookTree :gamebook="gamebookStore.currentGamebookTree" class="mt-5"/>
  </div>
</template>

<script setup lang="ts">
import {useGamebookStore} from "@/application/stores/gamebook.store.ts";
import {useRoute, useRouter} from "vue-router";
import GamebookTree from "@/ui/components/_EditGamebookView/GamebookTree.vue";
import EditBookTitle from "@/ui/components/_EditGamebookView/EditBookTitle.vue";

const route = useRoute();
const router = useRouter();

const gamebookStore = useGamebookStore();
gamebookStore.fetchGamebookTree(route.params.gamebookId as string);

function createSection() {
  router.push(route.fullPath + '/section/new');
}
</script>
