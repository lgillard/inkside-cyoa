<template>
  <h2 class="text-primary text-h4 my-4">Ma bibliothèque</h2>

  <div class="my-8 mx-16 position-relative" v-for="shelf in shelfs">
    <ShelfImg class="position-absolute" style="margin-top: 210px"/>
    <template v-for="gamebook in shelf" :key="gamebook.id">
      <AnimatedBook
          v-if="gamebook.id === '0'"
          :title="gamebook.title"
          content="Créer"
          color="gray"
          @click="router.push(`/gamebook/new`)"/>
      <AnimatedBook
          v-else
          :title="gamebook.title"
          :color="gamebook.coverColor"
          @click="router.push(`/gamebook/${gamebook.id}`)"/>
    </template>
  </div>
</template>
<script setup lang="ts">
  import {useGamebookStore} from "@/application/stores/gamebook.store.ts";
  import AnimatedBook from "@/ui/components/LibraryView/AnimatedBook.vue";
  import ShelfImg from "@/ui/components/icons/ShelfElement.vue";
  import {useRouter} from "vue-router";
  import {onUnmounted, ref, watch} from "vue";
  import {Gamebook} from "@/domain/models/Gamebook.ts";
  import {storeToRefs} from "pinia";

  const router = useRouter();
  const shelfs: ref<Array<Array<Gamebook>>> = ref([]);

  const gamebooksStore = useGamebookStore();

  const { gamebooks } = storeToRefs(gamebooksStore)
  gamebooksStore.fetchGamebooks();

  const refreshShelfs = (gamebooksList: Array<Gamebook>) => {
    const booksByShelf = Math.trunc((window.innerWidth - 176) / 217);

    shelfs.value = [[Object.assign(new Gamebook(), {id: '0', title: 'Nouveau livre'})]];
    for(let i = 1; i<=gamebooksList.length; i++) {
      if(! shelfs.value[Math.trunc(i/booksByShelf)]) {
        shelfs.value[Math.trunc(i/booksByShelf)] = [];
      }
      shelfs.value[Math.trunc(i/booksByShelf)].push(gamebooksList[i-1]);
    }
  }

  watch(gamebooks, refreshShelfs);
  const refreshShelfsOnResize = () => refreshShelfs(gamebooksStore.gamebooks);
  window.addEventListener("resize", refreshShelfsOnResize);

  onUnmounted(() => {
    window.removeEventListener("resize", refreshShelfsOnResize);
  });
</script>
