<template>
    <div class="post">
      
    <!--Card 1-->
    <div class="rounded overflow-hidden shadow-lg">
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
  
  <!-- <style lang="scss" scoped>
  $theme_colour: #81c289;
  $almost_black: rgb(15, 15, 15);
  
  .post {
    margin: 0.8em 0.2em;
    box-sizing: border-box;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
    background-color: rgba(255, 224, 179, 0.2);
    display: grid;
  }
  
  img {
    width: 100%;
    padding: 0;
    max-width: 290px;
    height: auto;
    margin: 0 auto;
    display: block;
  }
  h2,
  p {
    width: 90%;
    padding: 0;
    margin: 5px auto;
  }
  .button {
    padding: 10px;
    background-color: scale-color($theme_colour, $lightness: -30%);
    color: $almost_black;
    text-decoration: none;
    font-weight: bold;
    display: block;
    width: 100px;
    margin: 0.5em 0 0 0;
    align-self: self-end;
  }
  
  @media only screen and (min-width: 450px) {
    .post {
      width: 50%;
    }
  }
  
  @media only screen and (min-width: 800px) {
    .post {
      width: 33%;
    }
  }
  </style>
   -->