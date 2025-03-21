<template>
  <h2 class="text-h4 my-4">{{gamebookStore.currentGamebookTree?.title ?? ''}}</h2>
  <form @submit.prevent="saveSection">
    <section>
      <h3 class="text-h5">Nouvelle section</h3>
      <div class="d-flex">
        <v-text-field id="section-title"
                      label="Titre"
                      placeholder="Chemin des os"
                      v-model="title"
                      persistent-placeholder/>
      </div>

      <v-textarea label="Texte"
                  auto-grow
                  placeholder="Vous avancez prudemment dans le couloir sombre. Une porte grinçante apparaît sur votre gauche, tandis qu'un escalier en colimaçon s'enfonce dans les ténèbres à droite. Que faites-vous ?"
                  v-model="text"
                  hide-details
                  persistent-placeholder/>
      <v-switch label="Fin" id='is-end' v-model="isEnd" @change="types = []"  base-color="primary" color="" hide-details>
        <template v-slot:prepend><label for="is-end">Intrigue</label></template>
      </v-switch>

      <fieldset>
        <legend>Type</legend>

        <v-btn-toggle v-if="isEnd" v-model="types" class="text-primary">
          <v-btn value="tragicEnd" role="checkbox"><v-icon :icon="mdiSkull" class="mr-2"/>Fin tragique</v-btn>
          <v-btn value="happyEnd" role="checkbox"><v-icon :icon="mdiTrophyVariant" class="mr-2"/>Fin victorieuse</v-btn>
        </v-btn-toggle>

        <v-btn-toggle v-if="!isEnd" v-model="types" class="text-primary">
          <v-btn value="fight" role="checkbox"><v-icon :icon="mdiSword" class="mr-2"/>Combat</v-btn>
          <v-btn value="discovery" role="checkbox"><v-icon :icon="mdiTreasureChest" class="mr-2"/>Découverte</v-btn>
          <v-btn value="injury" role="checkbox"><v-icon :icon="mdiHeartBroken" class="mr-2"/>Blessure</v-btn>
          <v-btn value="care" role="checkbox"><v-icon :icon="mdiLeaf" class="mr-2"/>Soin</v-btn>
          <v-btn value="meet" role="checkbox"><v-icon :icon="mdiAccountCowboyHat" class="mr-2"/>Rencontre</v-btn>
        </v-btn-toggle>
      </fieldset>
    </section>

    <section v-if="!isEnd">
      <h3 class="text-h5">Choix</h3>

      <fieldset v-for="(path, index) in paths" :key="index" class="d-flex">
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
          v-model="path.nextSection"
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
import { ref } from "vue";
import {RandomTitleGenerator} from "@/domain/services/RandomTitleGenerator.ts";

const route = useRoute();
const router = useRouter();
const gamebookId = route.params.gamebookId as string;

const gamebookStore = useGamebookStore();
const sectionStore = useSectionStore();
gamebookStore.fetchGamebookTree(gamebookId);

const title = defineModel('title', {default: new RandomTitleGenerator().generateSectionTitle()});
const text = defineModel('text', {default: ''});
const isEnd = defineModel('isEnd', {default: false});
const types = defineModel('type', {default: []});
const paths = ref([{title: '', nextSection: 'new'}]);

function addPath() {
  paths.value.push({
    title: '',
    nextSection: 'new',
  });
}

function removePath(index) {
  paths.value.splice(index, 1);
}

function saveSection() {
    const sectionData = {
      title: title.value,
      text: text.value,
      paths: paths.value,
      gamebookId
    };

    sectionStore.create(sectionData).then(() => {
      router.push(`/gamebook/${gamebookId}`);
    })
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
