<template>
  <div v-if="section">
    <h2 class="text-h4 my-4">{{gamebookStore.currentGamebookTree?.title ?? ''}}</h2>
    <form @submit.prevent="saveSection">
      <section>
        <h3 class="text-h5">{{isCreateSectionPage ? 'Nouvelle section' : 'Éditer la section'}}</h3>
        <div class="d-flex">
          <v-text-field id="section-title"
                        label="Titre"
                        placeholder="Chemin des os"
                        v-model="section.title"
                        persistent-placeholder/>
        </div>

        <v-textarea label="Texte"
                    auto-grow
                    placeholder="Vous avancez prudemment dans le couloir sombre. Une porte grinçante apparaît sur votre gauche, tandis qu'un escalier en colimaçon s'enfonce dans les ténèbres à droite. Que faites-vous ?"
                    v-model="section.content"
                    hide-details
                    persistent-placeholder/>
        <v-switch label="Fin" id='is-end' v-model="section.isEnd" @change="section.types = []"  base-color="primary" color="" hide-details>
          <template v-slot:prepend><label for="is-end">Intrigue</label></template>
        </v-switch>

        <fieldset>
          <legend>Type</legend>

          <v-btn-toggle v-if="section.isEnd" v-model="section.types">
            <v-btn v-for="type of SectionTypeEnum.getTypesByCategory('end')"
                   :key="type.slug"
                   :value="type.slug"
                   role="checkbox">
              <v-icon :icon="type.icon" class="mr-2"/>
              {{type.label}}
            </v-btn>
          </v-btn-toggle>

          <v-btn-toggle v-else v-model="section.types">
            <v-btn v-for="type of SectionTypeEnum.getTypesByCategory('normal')"
                   :key="type.slug"
                   :value="type.slug"
                   role="checkbox">
              <v-icon :icon="type.icon" class="mr-2"/>
              {{type.label}}
            </v-btn>
          </v-btn-toggle>
        </fieldset>
      </section>

      <section v-if="!section.isEnd">
        <h3 class="text-h5">Choix</h3>

        <fieldset v-for="(path, index) in section.paths" :key="index" class="d-flex">
          <legend>Choix n°{{ index + 1 }} :</legend>
          <v-text-field
            label="Titre"
            placeholder="Ouvrir la porte"
            v-model="path.title"
            hide-details
            persistent-placeholder
            required
            class="mr-4"
          />
          <v-autocomplete
            label="Section suivante"
            :items="[{value: 'new', title: 'Nouvelle section'}, ...gamebookStore.currentGamebookTree?.sections.map(section => {return {value: section.id, title: section.title}})]"
            v-model="path.target"
            placeholder="Entrée de la chaumière"
            hide-details
            required
            class="mr-4"
          />
          <button
            class="text-primary hover:text-secondary"
            title="Supprimer le chemin"
            type="button"
            @click="removePath(index)"
          >
            <v-icon :icon="mdiDelete"/>
          </button>
        </fieldset>
        <div class="d-flex"><v-btn type="button" class="mx-auto" @click="addPath">Ajouter un chemin</v-btn></div>
      </section>

      <div class="d-flex justify-end mt-4">
        <v-btn type="submit">Sauvegarder</v-btn>
      </div>
    </form>
  </div>
  <div v-else>Chargement ...</div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { useGamebookStore } from "@/application/stores/gamebook.store.ts";
import { useSectionStore } from "@/application/stores/section.store.ts";
import {
  mdiAccountCowboyHat,
  mdiDelete,
  mdiHeartBroken,
  mdiLeaf,
  mdiSkull,
  mdiSword,
  mdiTreasureChest,
  mdiTrophyVariant
} from "@mdi/js";
import { computed, onBeforeMount, ref } from "vue";
import { RandomTitleGenerator } from "@/domain/services/RandomTitleGenerator.ts";
import type {Section} from "@/domain/models/Section.ts";
import {SectionTypeEnum} from "@/domain/enums/SectionTypeEnum.ts";

const route = useRoute();
const router = useRouter();
const gamebookId = route.params.gamebookId as string;
const sectionId = route.params.sectionId as string;
const isCreateSectionPage = computed(() => sectionId === 'new');

const gamebookStore = useGamebookStore();
const sectionStore = useSectionStore();

const section = ref<Section>(null);

onBeforeMount(async () => {
  if(!gamebookStore.currentGamebookTree) {
    await gamebookStore.fetchGamebookTree(gamebookId);
  }
  if (isCreateSectionPage.value) {
    section.value = {
      id: '',
      title: new RandomTitleGenerator().generateSectionTitle(),
      content: '',
      isEnd: false,
      types: [],
      paths: [{title: '', target: 'new'}],
    };
  } else {
    section.value = gamebookStore.currentGamebookTree?.sections.find(s => s.id === sectionId);
  }
});

function addPath() {
  if (!section.value.paths) {
    section.value.paths = [];
  }
  section.value.paths.push({
    title: '',
    target: 'new',
  });
}

function removePath(index) {
  section.value.paths.splice(index, 1);
}

function saveSection() {
  if (!section.value) return;

  const sectionData = {
    id: section.value.id,
    title: section.value.title,
    content: section.value.content,
    isEnd: section.value.isEnd,
    types: section.value.types,
    paths: section.value.paths,
    gamebookId
  };

  const promise = isCreateSectionPage.value
    ? sectionStore.create(sectionData)
    : sectionStore.update(sectionData);

  promise.then(() => {
    router.push(`/gamebook/${gamebookId}`);
  });
}
</script>

<style lang="scss">
fieldset {
  border: none;
  margin-bottom: 12px;
  legend {
    margin-bottom: 12px;
  }
}

h3 {
  color: rgba(var(--v-theme-secondary));
  margin-bottom: 12px;
}

label {
  cursor: pointer;
}
</style>
