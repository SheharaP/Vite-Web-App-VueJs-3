<template>
  <div class="feed">
    <main>
      <h2 class="text-center text-5xl font-bold mt-10 mb-10 text-cyan-500">All About Adoption!</h2>

      <div class="text-center align-middle content-center">
        <button @click.prevent="prevA" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-40 content-align rounded-l">
          Adult Owners
        </button>
        <button @click.prevent="prevC" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2  px-40 rounded-r">
          Kids View
        </button>
      </div>

      <div class="myJson">
        <div :class="child ? 'flex' : 'hidden'">
        <GetArticles myData="/Adopt-C.json" />
      </div>
      <div :class="adult ? 'flex' : 'hidden'">
        <GetArticles myData="/Adopt-A.json" />
      </div>
      </div>
      
      
    </main>
  </div>
</template>

<script>
import GetArticles from "../components/AdoptComp.vue";

export default {
  name: "AdoptionView.vue",
  data() {
    return {
      adult:"",
      child:"",
      myJson:null,
    };
  },
  components: {
    GetArticles,
  },
  methods : {

    prevA() {

      this.adult = true;
      this.child = false;
      console.log(this.adult);
    },

    prevC() {
      this.child = true;
      this.adult = false;
    },
  }
};
</script>