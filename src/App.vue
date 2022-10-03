<template>
  <div id="app">
    <Navigation />
    
    <router-view/>

    <Footer />
    
  </div>
</template>


<script>
// @ is an alias to /src
import Navigation from './components/NavigationComp.vue'
import Footer from './components/FooterComp.vue'

export default {
  name: 'App',
  components: {
    Navigation,
    Footer

  }
}
</script>

<style>
  *{
    max-width:100%;
    overflow-x: hidden;
  }
</style>