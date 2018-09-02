<template>
  <main>
    <h1>Hello, I'm Jake Bravo</h1>
    <h2>I'm a full-stack web developer based on Barcelona. I'm also keen on design, writing fiction and reading.</h2>
    <h2>I write on my <nuxt-link class="nav" to="/blog">blog</nuxt-link> and in the short future, on Medium</h2>
    <h2>My <nuxt-link class="nav" to="/portfolio" >portfolio</nuxt-link> is a collection of my best work, check it out.</h2>
    <h2>If you want to know more about me, check out my <nuxt-link class="nav" to="/info">info page</nuxt-link> or check my profiles online on github, twitter, dev.to. Of course, you can always email me at <a class="mail" href="mailto:jacobhtml@outlook.com">jacobHTML@outlook.com</a></h2>
  </main>
</template>

<script>
</script>

<style>

.mapboxgl-missing-css {
  display: none;
}
</style>

<style lang="scss" scoped>

main {
  background-color: black;
  color: white;
  padding: 0;
  display: block;
  h1 {
    font-size: 75px;
    display: block;
    margin-bottom: 20px;
    font-family: 'AileronBold', sans-serif;
  }
  h2 {
    font-size: 40px;
    margin-bottom: 20px;
    font-family: 'AileronBold', sans-serif;
    a {
      color: white;
      border-bottom: 2px solid white;
      
    }
    a:hover {
      color: #999;
      border-bottom-color: #999;
      transition: .2s ease;
    }
    a.mail {
      border-bottom-width: 2px;
    }
  }
}
.page-enter-active {
  transition: all 1s ease;
}
@keyframes index-leave {
  from {opacity: 1;}
  to {opacity: 0;}
}
.page-leave-active {
  transition: all 1s ease;
  transform: translateY(-100vh);
  animation: index-leave 1s;
}

.page-enter {
  opacity: 0;
  backface-visibility: hidden;
  transform: translatey(200vh);
  transition: all 1s ease;
}
</style>
