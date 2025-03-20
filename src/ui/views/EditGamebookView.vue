<template>
  <v-skeleton-loader v-if="gamebookStore.loading" type="card"/>
  <div v-else>
    <EditBookTitle/>
    <MyButton @click="createSection">Nouvelle section</MyButton>
    <GamebookTree :gamebook="gamebookStore.currentGamebookTree"/>
  </div>
</template>

<script setup lang="ts">
import {useGamebookStore} from "@/application/stores/gamebook.store.ts";
import {useRoute, useRouter} from "vue-router";
import GamebookTree from "@/ui/components/_EditGamebookView/GamebookTree.vue";
import EditBookTitle from "@/ui/components/_EditGamebookView/EditBookTitle.vue";
import MyButton from "@/ui/components/MyButton.vue";

const route = useRoute();
const router = useRouter();

const gamebookStore = useGamebookStore();
gamebookStore.fetchGamebookTree(route.params.gamebookId as string);

function createSection() {
  router.push(route.fullPath + '/section/new');
}
</script>
