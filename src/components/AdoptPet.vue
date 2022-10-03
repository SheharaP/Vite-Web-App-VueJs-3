<template>
  <div class="post">

  <div class="rounded px-5 overflow-hidden shadow-lg">
    <img :src="article.urlToImage" :alt="article.title" class="rounded"/>
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ article.title }}</div>
      <p class="text-gray-700 text-base">
        {{ article.description }}  
      </p>
      <p class="text-gray-700 font-semibold mt-6 text-base">
        {{ article.list.title }}
      </p>
      <p class="text-gray-700 mt-4 mb-6 text-base">
        {{ article.list.desc }}  
      </p>
      <ul v-if="article.consider.title != ''" class="list-disc">
        <li class="font-semibold list-none mb-4">
          {{ article.consider.title }}
        </li>
        <li>
          {{ article.consider.desc1 }}
        </li>
        <li>
          {{ article.consider.desc2}}  
        </li>
        <li>
          {{ article.consider.desc3 }}  
        </li>
        <li>
          {{ article.consider.desc4 }}
        </li>
      </ul>
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