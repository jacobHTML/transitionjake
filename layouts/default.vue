<template>
  <div>
    <app-navigation />
    <nuxt/>
  </div>
</template>

<script>
import AppNavigation from '~/components/AppNavigation.vue'

export default {
  components: {
    AppNavigation
  }
}
</script>


<style>
/* common styles shared through the application */

body {
  background: black;
  color: white;
  font-family: 'AileronBlack', serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  line-height: 1.2;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

a,
a:visited,
a:active {
  color: orangered;
  text-decoration: none;
}

button {
  margin-bottom: 10px;
  background: orangered;
  border: 0;
  cursor: pointer;
  padding: 6px 8px;
  font-size: 16px;
  color: white;
  border-radius: 4px;
}

h1,
h2,
h3,
h4 {
  font-family: 'AileronHeavy', serif;
  font-weight: normal;
}

main {
  padding: 75px 20px 0 20px;
  max-width: 1000px;
  margin: 0 auto 0;
  display: flex;
  justify-content: space-between;
  background-color: white;
  color: black;
  min-height: calc(100vh - 150px);
}

.top {
  text-transform: uppercase;
  font-size: 14px;
  color: #666;
  padding: 0;
  margin: 30px 0 0;
}

.places {
  width: 60%;
}

aside.sidebar {
  width: 35%;
  padding: 20px;
  margin: 40px 0 0 20px;
  background: #eee;
  float: right;
}

hr {
  border-top: 1px solid #ccc;
  border-bottom: none;
  margin-top: 15px;
}

@media screen and (max-width: 1030px) {
  main {
    padding: 0 20px;
  }
}

@media screen and (max-width: 600px) {
  main {
    flex-direction: column;
  }
  .places {
    width: 100%;
  }
  aside.sidebar {
    width: 100%;
    margin: 10px 0;
  }
}

.page-enter-active,
.page-leave-active {
  transition: all 0.5s ease;
}

.page-enter,
.page-leave-active {
  opacity: 0;
  backface-visibility: hidden;
  transform: translatey(200vh);
}
 

/* screen reader only */
.hidden {
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
}
</style>
