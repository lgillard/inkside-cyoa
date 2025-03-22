<template>
  <div class="shelf-container" aria-hidden="true">
    <div class="shelf-trapezoid"></div>
    <div class="shelf-bottom"></div>
  </div>
</template>

<style scoped>
.shelf-container {
  width: 100%;
  height: 60px;
  position: relative;
}

.shelf-trapezoid {
  height: 40px;
  background-color: #D2B48C;
  position: relative;
  transform: perspective(600px) rotateX(15deg);
  transform-origin: bottom;
  width: 100%;
  margin: 0 auto;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.shelf-bottom {
  width: 100%;
  height: 8px;
  background-color: #8B4513;
  position: absolute;
  bottom: 12px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
}
</style>
