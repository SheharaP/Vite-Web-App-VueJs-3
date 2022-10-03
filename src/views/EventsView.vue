<template>
  <div class="feed">
    <main>
      <h2 class="text-center text-5xl font-bold mt-10 mb-10 text-cyan-500">Adoption Events</h2>
      <GetArticles myData="/Events.json" />
    </main>
  </div>
</template>

<script>
import GetArticles from "../components/PetsComp.vue";

export default {
  name: "EventsView",
  components: {
    GetArticles,
  },
};
</script>
