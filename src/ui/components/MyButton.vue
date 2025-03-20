<template>
  <button>
    <slot/>
  </button>
</template>

<style scoped lang="scss">
button {
  display: inline-block;
  text-transform: uppercase;
  font-size: 1em;
  font-weight: 700;
  padding: 5px 10px;
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
