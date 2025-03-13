<template>
  <div>
    <h2 class="text-primary text-h4 my-4">Écrire un nouveau livre</h2>

    <v-form class="centering-row">
      <!-- Legend column part containing labels -->
      <div id="legend-column" class="text-h5 d-flex flex-column justify-space-between">
        <div><label for="title-input">Titre du livre</label> :</div>
        <div class="d-flex">
          <div><label for="cover-color-input">Couleur de la couverture</label> :</div>
          <ColorPicker
            id="cover-color-input"
            v-model="coverColor"
            type="color"/>
        </div>
        <div><label for="author-name-input">Nom de l'auteur</label> :</div>
      </div>

      <!-- Book part containing inputs-->
      <div id="book">
        <FlatBook id="background" :color="coverColor"/>
        <textarea
          id="title-input"
          placeholder="Titre du livre"
          class="text-h4"/>
        <input
          id="author-name-input"
          placeholder="Nom de l'auteur"
          type="text"
          class="text-h5"/>
      </div>

      <!-- Pour centrer sur le livre et non sur sa légende -->
      <div class="col-spacer"></div>
    </v-form>
  </div>
</template>
<script lang="ts" setup>
  import FlatBook from "@/ui/components/icons/FlatBook.vue";
  import ColorPicker from "@/ui/components/ColorPicker.vue";

  const coverColor = defineModel({ default: '#8b0000'});
</script>
<style lang="scss">
.centering-row {
  display: flex;
  justify-content: center;
}

#book {
  position: relative;
  flex: 0 1 auto;
  margin-right: 15vw;

  #background {
    max-height: 65vh;
    max-width: 65vw;
    height: 65vh;
  }

  #title-input {
    position: absolute;
    text-align: center;
    left: 0;
    padding: 5%;
    margin-left: 6%;
    width: 94%;
    height: 40%;
    resize: none;
    overflow: hidden;
    word-wrap: break-word;
    white-space: pre-wrap;
  }

  #author-name-input {
    position: absolute;
    text-align: end;
    right: 0;
    bottom: 0;
    margin-bottom: 12%;
    padding: 5%;
    width: 94%;
    height: 15%;
    font-size: 1.5rem;
  }
}

#legend-column {
  flex: 1 1 auto;
  text-align: end;
  padding-right: 5px;
  padding-top: 2%;
  padding-bottom: 5%;

  #cover-color-input {
    width: 40px;
    height: 40px;
    margin-top: auto;
  }

  div:has(> label[for='cover-color-input']) {
    padding-top: 10px;
    padding-right: 10px;
    margin-left: auto;
  }
}

.col-spacer {
  flex: 1 1 100px;
  min-width: 0;
}
</style>
