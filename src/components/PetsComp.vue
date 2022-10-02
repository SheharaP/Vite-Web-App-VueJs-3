<template>
    <div id="articleContainer">
        <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
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

  import ArticleItem from "./ArticleItem.vue";

  export default {
    name: "GetArticles",
    props: ["myData"],
    components: {
      ArticleItem,
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
  