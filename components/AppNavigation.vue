<template>
  <header :class="{ 
    'portfolio' : (page === 'portfolio'), 
    'info' : (page === 'info'), 
    'blog' : (page === 'blog'),
    'index' : (page === 'index') 
  }">

    <!--<transition-group name="bk" tag="div" class="bk-img">
      <div key="img1" v-if="page === 'blog'" class="header-img1"></div>
      <div key="img2" v-else-if="page === 'portfolio'" class="header-img2"></div>
      <div key="img3" v-else-if="page === 'info'" class="header-img3"></div>
    </transition-group>-->

    <div :class="{ 
    'nav-wrapper' : (page !== 'index'), 
    'home' : (page === 'index')
    }">
      <nav>
        <ul>
          <transition-group class="navigation" name="big">
            <nuxt-link key="link4" class="four" to="/"><li>jake</li></nuxt-link>
            <nuxt-link key="link1" class="one" to="/blog"><li>blog</li></nuxt-link>
            <nuxt-link key="link2" class="two" to="/portfolio"><li>portfolio</li></nuxt-link>
            <nuxt-link key="link3" class="three" to="/info"><li>info</li></nuxt-link>
          </transition-group>
        </ul>
        <div  @click="menuOpened = !menuOpened">
          <icon-base :class="{ 
          'menu' : (page !== 'index'), 
          'home-menu' : (page === 'index')
          }" icon-name="menu" icon-color="white" width="28" height="28">
            <icon-three-dot/>
          </icon-base>
        </div>
        <app-menu-drawer :menuOpened="menuOpened" />

        <app-nav-transition />
      </nav>
    </div>
  </header>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import { TimelineMax, Expo, Sine, Back } from 'gsap'
import IconBase from './IconBase.vue'
import IconThreeDot from './IconThreeDot.vue'
import AppMenuDrawer from './AppMenuDrawer.vue'
import AppNavTransition from './AppNavTransition.vue'

export default {
  data() {
    return {
      saved: false,
      menuOpened: false
    }
  },
  components: {
    IconBase,
    IconThreeDot,
    AppMenuDrawer,
    AppNavTransition
  },
  methods: {
    openMenu() {
      TweenMax.to('.first', 0.2, {
        x: 18,
        ease: Sine.easeOut
      })
      TweenMax.to('.last', 0.2, {
        x: -18,
        ease: Sine.easeOut
      })
      TweenMax.staggerTo(
        '.first, .middle, .last',
        0.2,
        {
          fill: '#7eebe6',
          ease: Sine.easeOut
        },
        0.04
      )
    },
    closeMenu() {
      TweenMax.to('.first', 0.2, {
        x: 0,
        ease: Sine.easeIn
      })
      TweenMax.to('.last', 0.2, {
        x: 0,
        ease: Sine.easeIn
      })
      TweenMax.to('.first, .middle, .last', 0.2, {
        fill: '#fff'
      })
    }
  },
  computed: {
    ...mapState(['page']),
    ...mapGetters(['selectedUser'])
  },
  filters: {
    firstName(input) {
      var lastIndex = input.lastIndexOf(' ')
      return input.substring(0, lastIndex)
    }
  },
  watch: {
    menuOpened(val) {
      if (val) {
        this.openMenu()
      } else {
        this.closeMenu()
      }
    }
  }
}
</script>

<style scoped lang="scss">
@keyframes index-leave {
  from {opacity: 1;}
  to {opacity: 0;}
}
header {
  width: 100vw;
  height: 150px;
  position: relative;
  
}

@mixin header ($hcolor) {
  background-color: $hcolor;
  position: absolute;
  width: 100vw;
  height: 150px;
}

.header-img1 {
  @include header(#000000);
}

.header-img2 {
  @include header(#000000);
}

.header-img3 {
  @include header(#000);
}
.bk-enter-active,
.bk-leave-active {
  transition: all 0.4s ease;
}

.bk-enter,
.bk-leave-to {
  
  opacity: 0;
}

.bk-img {
  position: absolute;
  width: 100vw;
  height: 300px;
  overflow: hidden;
  top: 0;
}

.nav-wrapper {
  width: 100vw;
  position: relative;
  z-index: 1000;
}

@media screen and (max-width: 1030px) {
  .nav-wrapper {
    padding: 0 20px;
  }
}

ul {
  list-style: none;
  padding: 0;
  float: left;
  li {
    display: inline-block;
    font-size: 30px;
    font-family: 'AileronHeavy' , sans-serif;
    margin-top: 60px;
    margin-right: 20px;
    transition: .4s ease-out;
    border-bottom: 2px solid white;
    ::after {
      content:" "
    }
  }
  .four {
    li {
      opacity: .6;
      margin: 10px 10px;
      float:none;
    }
    ::after{
        content: "'s";
        transition: all 1s ease;
        opacity: 1;
    }

  }
  .nuxt-link-active{
    border: none;
    display: inline-block;
    transform: translate(20px, 30px);
    float: left;
    margin: 0;
    li{
      font-size: 75px;
      color: white;
      transition: .4s linear;
      display: block;
      float: left;
      margin-top: 0;
      border: none;
    }
  }
  .nuxt-link-exact-active {
    margin-right: 30px;
    transition: all 1s ease;
    
  }
  
  a,
  a:active,
  a:visited {
    color: white;
    text-decoration: none;
    
  }
}


.index {
  transition: all 1s ease;
  .one, .two, .three{
    transition: all .2s ease;
    opacity: 0;
    
    ::after{
      opacity: 0;
      content: " ";
    }
  }
  .nuxt-link-exact-active {
    margin-left: -20px;
    transition: all 1s ease;
    opacity: .6;
    cursor: default;
    transition: all 1s ease;
  }
}
.one, .two, .three, .four{
    opacity: 1;
    transition: all 1s ease;
  }

@media screen and (max-width: 600px) {
  ul {
    display: none;
  }
}

.nuxt-link-active {
  font-weight: bold;
}

nav {
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
}

.menu {
  position: absolute;
  right: 0;
  top: 8px;
  cursor: pointer;
}
.index * {
  font-family: 'AileronBold', sans-serif;
}


.home-menu{
  display: none;
}



</style>