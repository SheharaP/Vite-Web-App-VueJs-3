<template>
    <div class="post">

    <div class="rounded px-5 overflow-hidden shadow-lg">
      <img :src="article.urlToImage" :alt="article.title" class="rounded"/>
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ article.title }}</div>
        <p class="text-gray-700 text-base">
          {{ article.description }}  
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <a :href="article.url" class="button">Read more</a>
      </div>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ArticleItem",
    props: ["article"], //"article property"
  };
  </script>