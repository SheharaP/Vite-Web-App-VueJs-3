<template>
  <div class="home">

    <div class="rounde overflow-hidden  content-center shadow-lg">
      <div class="px-6 py-4">
        <div class="font-bold mt-10 text-2xl sm:text-5xl text-indigo-600 text-center mb-2 ">Our Vision & Mission</div>
        <p class="
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-3 first-letter:float-left 
  text-gray-700 text-xl  sm:text-2xl  sm:my-20 sm:mx-20 text-base">
          Springfield Pet Rescue has contributed to real social change for over 20 years, by popularizing pet adoption.
          Numerous animals in need of rescue and rehabilitation in Liverpool have benefited from our efforts, as well as
          the Liverpool rescue community.
          We all still have a ton of hard, dirty work to do until every pet is safe, respected, and cherished.
          Learn more about our goal to save 100,000 adoptable, healthy pets annually.
        </p>
      </div>
    </div>

    <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      <!--Card 1-->
      <div class="rounded overflow-hidden shadow-lg">
        <img class="w-full" src="../assets/img2.jpg" alt="Mountain">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">River</div>
          <p class="text-gray-700 text-base">
            River is a gentle and sweet dog. He loves playing fetch and belly rubs. Currently looking for a good home and a lovable friend.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#friendly</span>
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#playful</span>
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#happy
            pill</span>
        </div>
      </div>
      <!--Card 2-->
      <div class="rounded overflow-hidden shadow-lg">
        <img class="w-full" src="../assets/img10.jpg" alt="River">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Pooh and Tiger</div>
          <p class="text-gray-700 text-base">
            Pooh and Tiger and best friends/ brother born just over 5 months ago, these two a re playful and little tricksters! They are definetly the most fun cats to have around!
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#playful</span>
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#cats</span>
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#kittens</span>
        </div>
      </div>

      <!--Card 3-->
      <div class="rounded overflow-hidden shadow-lg">
        <img class="w-full" src="../assets/img6.png" alt="Forest">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Mickey</div>
          <p class="text-gray-700 text-base">
            Mickey -known as the sweetheart, has the most prettiest smile. His lovable charisma can uplift anyone. He loves to go on walks and eat sweets.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#happy
            pill</span>
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#playful</span>
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#sweet</span>
        </div>
      </div>
    </div>


    <h2 class="text-center text-5xl font-bold mt-10 mb-10 text-cyan-500">Pet Facts!</h2>
    <GetArticles myData="/PetFacts.json" />


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
