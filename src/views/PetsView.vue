<template>
  <div class="feed">
    <main>
      <h2 class="text-center text-4xl font-bold">Our Pets</h2>
      <GetArticles myData="/blog.json" />
    </main>
  </div>
</template>

<script>
import GetArticles from "../components/PetsComp.vue";

export default {
  name: "PetsView",
  components: {
    GetArticles,
  },
};
</script>