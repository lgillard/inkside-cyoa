<template>
  <button>
    <slot/>
  </button>
</template>

<style scoped lang="scss">
button {
  height: fit-content;
  display: inline-block;
  text-transform: uppercase;
  font-size: 1em;
  font-weight: 700;
  padding: 6px;
  border-radius: 5px;
  color: rgba(var(--v-theme-primary));
  border: rgba(var(--v-theme-primary)) solid 1px;
}

button:hover,
button:focus {
  color: rgba(var(--v-theme-secondary));
  border-color: rgba(var(--v-theme-secondary));
}
</style>
