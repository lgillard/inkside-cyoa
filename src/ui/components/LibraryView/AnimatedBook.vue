<template>
  <button>
    <ul class="align d-inline-block my-3 mx-7" aria-hidden="true">
      <li>
        <figure class='book'>
          <!-- Cover -->
          <ul class='hardcover_front'>
            <li>
              <div class="coverDesign" :style="coverColorStyle">
                <h1>{{ title }}</h1>
              </div>
            </li>
            <li></li>
          </ul>

          <!-- Pages -->
          <ul class='page'>
            <li></li>
            <li>
              <span class="action-text">{{ content }}</span>
            </li>
            <li></li>
            <li></li>
            <li></li>
          </ul>

          <!-- Back -->
          <ul class='hardcover_back'>
            <li></li>
            <li></li>
          </ul>
          <ul class='book_spine'>
            <li style="margin-left: 4px;"></li>
          </ul>
        </figure>
      </li>
    </ul>

    <!--For screen reader only-->
    <span class="opacity-0 position-absolute">{{title}} : {{content}}</span>
  </button>
</template>

<script lang="ts" setup>
import { computed } from "vue";

const {
  color = 'darkred',
  content = 'Modifier'
} = defineProps({title: String, content: String, color: String});

const coverColorStyle = computed((): string => {
  return `background-color: ${color};
          background-image: -webkit-linear-gradient(top, ${color} 58%, ${color} 0%);
          background-image: -moz-linear-gradient(top, ${color} 58%, ${color} 0%);
          background-image: linear-gradient(top, ${color} 58%, ${color} 0%);`;
});
</script>

<style scoped lang="scss">
* {
  border-radius: 12px;
}

ul {
  list-style: none;
}

.action-text {
  color: #302c2b;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  margin-top: 50%;
  font-size: 1em;
  font-weight: 700;
}

button {
  text-align: center;
}

button:hover,
button:focus {
  .action-text {
    color: rgba(var(--v-theme-primary));
  }
}

.book {
  position: relative;
  width: 160px;
  height: 220px;
  -webkit-perspective: 1000px;
  -moz-perspective: 1000px;
  perspective: 1000px;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

/*
  2. background & color
*/

/* HARDCOVER FRONT */
.hardcover_front li:first-child {
  background-color: #eee;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  backface-visibility: hidden;
}

/* reverse */
.hardcover_front li:last-child {
  background: #bdbdbd;
}

/* HARDCOVER BACK */
.hardcover_back li:first-child {
  background: #bdbdbd;
}

/* reverse */
.hardcover_back li:last-child {
  background: #bdbdbd;
}

.book_spine li:first-child {
  background: #eee;
}

/* page */

.page > li {
  background: -webkit-linear-gradient(left, #e1ddd8 0%, #fffbf6 100%);
  background: -moz-linear-gradient(left, #e1ddd8 0%, #fffbf6 100%);
  background: -ms-linear-gradient(left, #e1ddd8 0%, #fffbf6 100%);
  background: linear-gradient(left, #e1ddd8 0%, #fffbf6 100%);
  box-shadow: inset 0px -1px 2px rgba(50, 50, 50, 0.1), inset -1px 0px 1px rgba(150, 150, 150, 0.2);
}

/*
  3. opening cover, back cover and pages
*/

.hardcover_front {
  -webkit-transform: rotateY(-34deg) translateZ(8px);
  -moz-transform: rotateY(-34deg) translateZ(8px);
  transform: rotateY(-34deg) translateZ(8px);
  z-index: 100;
}

.hardcover_back {
  -webkit-transform: rotateY(-15deg) translateZ(-8px);
  -moz-transform: rotateY(-15deg) translateZ(-8px);
  transform: rotateY(-15deg) translateZ(-8px);
}

.page li:nth-child(1) {
  -webkit-transform: rotateY(-28deg);
  -moz-transform: rotateY(-28deg);
  transform: rotateY(-28deg);
}

.page li:nth-child(2) {
  -webkit-transform: rotateY(-30deg);
  -moz-transform: rotateY(-30deg);
  transform: rotateY(-30deg);
}

.page li:nth-child(3) {
  -webkit-transform: rotateY(-32deg);
  -moz-transform: rotateY(-32deg);
  transform: rotateY(-32deg);
}

.page li:nth-child(4) {
  -webkit-transform: rotateY(-34deg);
  -moz-transform: rotateY(-34deg);
  transform: rotateY(-34deg);
}

.page li:nth-child(5) {
  -webkit-transform: rotateY(-36deg);
  -moz-transform: rotateY(-36deg);
  transform: rotateY(-36deg);
}

/*
  4. position, transform & transition
*/

.hardcover_front,
.hardcover_back,
.book_spine,
.hardcover_front li,
.hardcover_back li,
.book_spine li {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.hardcover_front,
.hardcover_back {
  -webkit-transform-origin: 0% 100%;
  -moz-transform-origin: 0% 100%;
  transform-origin: 0% 100%;
}

.hardcover_front {
  -webkit-transition: all 0.8s ease, z-index 0.6s;
  -moz-transition: all 0.8s ease, z-index 0.6s;
  transition: all 0.8s ease, z-index 0.6s;
}

/* HARDCOVER front */
.hardcover_front li:first-child {
  cursor: default;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  -webkit-transform: translateZ(2px);
  -moz-transform: translateZ(2px);
  transform: translateZ(2px);
}

.hardcover_front li:last-child {
  -webkit-transform: rotateY(180deg) translateZ(2px);
  -moz-transform: rotateY(180deg) translateZ(2px);
  transform: rotateY(180deg) translateZ(2px);
}

/* HARDCOVER back */
.hardcover_back li:first-child {
  -webkit-transform: translateZ(2px);
  -moz-transform: translateZ(2px);
  transform: translateZ(2px);
}

.hardcover_back li:last-child {
  -webkit-transform: translateZ(-2px);
  -moz-transform: translateZ(-2px);
  transform: translateZ(-2px);
}

/* BOOK SPINE */
.book_spine {
  -webkit-transform: rotateY(60deg) translateX(-5px) translateZ(-12px);
  -moz-transform: rotateY(60deg) translateX(-5px) translateZ(-12px);
  transform: rotateY(60deg) translateX(-5px) translateZ(-12px);
  width: 16px;
  z-index: 0;
}

.book_spine li:first-child {
  -webkit-transform: translateZ(2px);
  -moz-transform: translateZ(2px);
  transform: translateZ(2px);
}

.page,
.page > li {
  position: absolute;
  top: 0;
  left: 0;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.page {
  width: 100%;
  height: 98%;
  top: 1%;
  left: 3%;
  z-index: 10;
}

.page > li {
  width: 100%;
  height: 100%;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  transform-origin: left center;
  -webkit-transition-property: transform;
  -moz-transition-property: transform;
  transition-property: transform;
  -webkit-transition-timing-function: ease;
  -moz-transition-timing-function: ease;
  transition-timing-function: ease;
}

.page > li:nth-child(1) {
  -webkit-transition-duration: 0.6s;
  -moz-transition-duration: 0.6s;
  transition-duration: 0.6s;
}

.page > li:nth-child(2) {
  -webkit-transition-duration: 0.6s;
  -moz-transition-duration: 0.6s;
  transition-duration: 0.6s;
}

.page > li:nth-child(3) {
  -webkit-transition-duration: 0.4s;
  -moz-transition-duration: 0.4s;
  transition-duration: 0.4s;
}

.page > li:nth-child(4) {
  -webkit-transition-duration: 0.5s;
  -moz-transition-duration: 0.5s;
  transition-duration: 0.5s;
}

.page > li:nth-child(5) {
  -webkit-transition-duration: 0.6s;
  -moz-transition-duration: 0.6s;
  transition-duration: 0.6s;
}

/*
  5. events
*/

.book:hover > .hardcover_front,
.book:focus > .hardcover_front {
  -webkit-transform: rotateY(-145deg) translateZ(0);
  -moz-transform: rotateY(-145deg) translateZ(0);
  transform: rotateY(-145deg) translateZ(0);
  z-index: 0;
}

.book:hover > .page li:nth-child(1),
.book:focus > .page li:nth-child(1) {
  -webkit-transform: rotateY(-30deg);
  -moz-transform: rotateY(-30deg);
  transform: rotateY(-30deg);
  -webkit-transition-duration: 1.5s;
  -moz-transition-duration: 1.5s;
  transition-duration: 1.5s;
}

.book:hover > .page li:nth-child(2),
.book:focus > .page li:nth-child(2) {
  -webkit-transform: rotateY(-35deg);
  -moz-transform: rotateY(-35deg);
  transform: rotateY(-35deg);
  -webkit-transition-duration: 1.8s;
  -moz-transition-duration: 1.8s;
  transition-duration: 1.8s;
}

.book:hover > .page li:nth-child(3),
.book:focus > .page li:nth-child(3) {
  -webkit-transform: rotateY(-118deg);
  -moz-transform: rotateY(-118deg);
  transform: rotateY(-118deg);
  -webkit-transition-duration: 1.6s;
  -moz-transition-duration: 1.6s;
  transition-duration: 1.6s;
}

.book:hover > .page li:nth-child(4),
.book:focus > .page li:nth-child(4) {
  -webkit-transform: rotateY(-130deg);
  -moz-transform: rotateY(-130deg);
  transform: rotateY(-130deg);
  -webkit-transition-duration: 1.4s;
  -moz-transition-duration: 1.4s;
  transition-duration: 1.4s;
}

.book:hover > .page li:nth-child(5),
.book:focus > .page li:nth-child(5) {
  -webkit-transform: rotateY(-140deg);
  -moz-transform: rotateY(-140deg);
  transform: rotateY(-140deg);
  -webkit-transition-duration: 1.2s;
  -moz-transition-duration: 1.2s;
  transition-duration: 1.2s;
}

/*
  6. Bonus
*/

/* cover CSS */

.coverDesign {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  backface-visibility: hidden;
}

.coverDesign h1 {
  color: #fff;
  font-size: 1.5em;
  letter-spacing: 0.05em;
  text-align: center;
  margin: 10% 0 0 0;
  text-shadow: -1px -1px 0 rgba(0,0,0,0.1);
}

.coverDesign p {
  color: #f8f8f8;
  font-size: 1em;
  text-align: center;
  text-shadow: -1px -1px 0 rgba(0,0,0,0.1);
}

.yellow {
  background-color: #f1c40f;
  background-image: -webkit-linear-gradient(top, #f1c40f 58%, #e7ba07 0%);
  background-image: -moz-linear-gradient(top, #f1c40f 58%, #e7ba07 0%);
  background-image: linear-gradient(top, #f1c40f 58%, #e7ba07 0%);
}

.grey {
  background-color: #f8e9d1;
  background-image: -webkit-linear-gradient(top, #f8e9d1 58%, #e7d5b7 0%);
  background-image: -moz-linear-gradient(top, #f8e9d1 58%, #e7d5b7 0%);
  background-image: linear-gradient(top, #f8e9d1 58%, #e7d5b7 0%);
}

/* Basic ribbon */

.ribbon {
  background: #c0392b;
  color: #fff;
  display: block;
  font-size: 0.7em;
  position: absolute;
  top: 11px;
  right: 1px;
  width: 40px;
  height: 20px;
  line-height: 20px;
  letter-spacing: 0.15em;
  text-align: center;
  -webkit-transform: rotateZ(45deg) translateZ(1px);
  -moz-transform: rotateZ(45deg) translateZ(1px);
  transform: rotateZ(45deg) translateZ(1px);
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  backface-visibility: hidden;
  z-index: 10;
}

/* Media Queries */
@media screen and (max-width: 37.8125em) {
  button > li {
    width: 100%;
    min-height: 440px;
    height: auto;
    padding: 0;
    margin: 0 0 30px 0;
  }

  .book {
    margin: 0 auto;
  }
}
</style>
