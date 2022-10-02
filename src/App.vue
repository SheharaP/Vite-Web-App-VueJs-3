<template>
  <div id="app">
    <Navigation />
    <router-view/>

  </div>
</template>


<script>
// @ is an alias to /src
import Navigation from './components/NavigationComp.vue'

export default {
  name: 'App',
  components: {
    Navigation,

  }
}
</script>