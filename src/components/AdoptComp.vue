<template>
    <div id="articleContainer">
        <div class="p-0 grid grid-cols-1 sm:p-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
      <ArticleItem
        class="container"
        v-for="(article, index) in myJson.articles"
        :key="index"
        :article="article"
      ></ArticleItem>
    </div>
    </div>
  </template>
  
  
  <script>

  import ArticleItem from "./AdoptPet.vue";

  export default {
    name: "GetArticles",
    props: ["myData"],
    components: {
      ArticleItem
    },
    data() {
      return {
        //myJson: json
        myJson: [],
      };
    },
    created() {
      // Fetch Data
      this.fetchData();
    },
    methods: {
      fetchData() {
        fetch(this.myData)
          .then((stream) => stream.json())
          .then((data) => (this.myJson = data))
          .catch((error) => console.error(error));
      },
    },
  };
  </script>
  <style>
  </style>
  