<template>
  <div class="bg-indigo-600">
    <nav class="
        container
        px-20
        pt-15
        pb-10
        mx-auto
        ml-500
        md:flex md:justify-between md:items-center
      ">
      <img class="p-0 mt-5 my-0 object-fill h-48 w-auto" src="../assets/logo.png" alt="logo">

      <div class="flex items-center justify-right">
        

        <router-link to="/" class="
            text-xxl
            font-bold
            text-gray-100
            mr-10
            sm:mr-80
            md:text-2xl
            md:mt-10
          ">Springfield Pet Rescue
        </router-link>
      </div>

      <!-- Mobile menu button -->
      <div @click="toggleNav" class="flex md:hidden">
          <button type="button" class="
              text-black-100
              mt-10
              hover:text-black-400
              focus:outline-none focus:text-black-400
              
            ">
            <svg viewBox="0 0 20 20" class="w-8 h-6 fill-current">
              <path fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
              </path>
            </svg>
          </button>
        </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul :class="showMenu ? 'flex' : 'hidden'" class="
          flex-col
          mt-8
          xl:mx-10
          mx-0
          space-y-4
          space-x-20
          md:flex md:space-y-0 md:flex-row md:items-center md:space-x-8 md:mt-10
        ">

        <router-link to="/">
          <li class="text-white text-lg font-bold hover:text-black cursor-pointer">Home</li>
        </router-link>
        <router-link to="/search">
          <li class="text-white text-lg font-bold hover:text-black cursor-pointer">Find a pet</li>
        </router-link>
        <router-link to="/about">
          <li class="text-white text-lg font-bold hover:text-black cursor-pointer">About Us</li>
        </router-link>
        <router-link to="/events">
          <li class="text-white text-lg font-bold hover:text-black cursor-pointer">Events</li>
        </router-link>
        <router-link to="/adopt">
          <li class="text-white text-lg font-bold hover:text-black cursor-pointer">Adoption</li>
        </router-link>
        
      </ul>
    </nav>
  </div>
</template>
<script>
import { ref } from 'vue';
export default {
  setup() {
    let showMenu = ref(false);
    const toggleNav = () => (showMenu.value = !showMenu.value);
    return { showMenu, toggleNav };
  },
};
</script>