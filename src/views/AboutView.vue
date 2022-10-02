<template>
  <div class="about">
        <h1>This is an about page</h1>
    <Weather/>
  </div>
</template>

<script>
// @ is an alias to /src
import Weather from '../components/WeatherComp.vue'

export default {
  name: 'About',
  components: {
    Weather
  }
}
</script>
