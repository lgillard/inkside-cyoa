<template>
  <div class="my-8 mx-16 position-relative">
    <ShelfImg class="position-absolute" style="margin-top: 210px"/>
    <AnimatedBook
      v-for="gamebook in gamebooksStore.gamebooks"
      :key="gamebook.id"
      :title="gamebook.title"
    />
  </div>
</template>
<script setup lang="ts">
  import {useGamebookStore} from "@/application/stores/gamebook.store.ts";
  import AnimatedBook from "@/ui/components/LibraryView/AnimatedBook.vue";
  import ShelfImg from "@/ui/components/icons/ShelfElement.vue";

  const gamebooksStore = useGamebookStore();
  gamebooksStore.fetchGamebooks();
</script>
