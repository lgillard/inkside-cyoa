<template>
  <v-card
      :style="menuPosition"
      color="primary"
      variant="outlined"
      density="compact"
      class="bg-surface"
  >
    <v-card-title class="text-on_surface">{{ section.title }}</v-card-title>
    <v-card-text class="font-italic text-blue-grey-lighten-4">{{ section.content }}</v-card-text>
    <v-card-actions>
      <v-btn color="primary" @click="editSection(section.id)">
        Modifier la section
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script setup lang="ts">
  import {computed} from "vue";
  import {useRoute, useRouter} from "vue-router";

  const { section = null, x = 0, y = 0 } = defineProps({
    section: { id: String, title: String, content: String },
    x: Number,
    y: Number,
  });

  const router = useRouter();
  const route = useRoute();

  const menuPosition = computed(() =>{
    return {
      position: 'fixed',
      left: `${x + 10}px`,
      top: `${y + 10}px`,
      zIndex: 100,
    }
  });

  function editSection(sectionId: number) {
    router.push(`${route.fullPath}/section/${sectionId}`);
  }
</script>
