<template>
  <div>
    <h2 class="text-primary text-h4 my-4">Écrire un nouveau livre</h2>

    <v-form class="centering-row">
          <div id="book">
            <FlatBook id="background"/>
            <textarea
              id="title-input"
              placeholder="Titre du livre"/>
            <input
              id="author-name-input"
              placeholder="Nom de l'auteur"
              type="text"/>
          </div>
    </v-form>
  </div>
</template>
<script lang="ts" setup>
  import FlatBook from "@/ui/components/icons/FlatBook.vue";
</script>
<style lang="scss">
.centering-row {
  display: flex;
  justify-content: center;
}

#book {
  position: relative;
}

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
  font-size: 2rem;
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
  width: 70%;
  height: 15%;
  font-size: 1.5rem;
}
</style>
