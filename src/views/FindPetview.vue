<template>
  <div class="about">
    <FindPet/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import FindPet from '../components/FindPet.vue'

export default {
  name: 'FindPetView',
  components: {
    FindPet
  }
}
</script>
