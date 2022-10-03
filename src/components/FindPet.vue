<template>
  <h2 class="text-center text-5xl font-bold mt-10 mb-20 text-cyan-500">Find your best friend!</h2>
  <div class="container rounded">
    <form id="pet-form">
      <div class="form-group">
        <label for="animal" class="mx-8 mr-8 text-xl">Enter type of pet</label>
        <select v-model="animalType" id="animalType"
          class="form-control border-solid border-2 border-black-600 shadow-sm focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm form-control-lg">
          <option value="" selected disabled>Enter type of pet</option>
          <option value="cat">Cat</option>
          <option value="dog">Dog</option>
          <option value="bird">Bird</option>
          <option value="barnyard">Barnyard</option>
        </select><br><br>
        <input type="text" id="zip" v-model="zip"
          class="placeholder:italic placeholder:text-slate-400 block bg-white w-60 ml-8 border border-slate-300 rounded-md py-2 pl-2 pr-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Enter your zipcode">
        <buton type="submit" @click.prevent="searchPets" data-mdb-ripple="true" data-mdb-ripple-color="light"
          class="inline-block px-6 py-2.5 ml-8 mt-6 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
          Find a pet!
        </buton>
      </div>
    </form>


    <div v-for="(name, index) in petName">

      <div class="rounded pt-10 pb-10 mt-10 mb-10 p-10  overflow-hidden shadow-lg">

        <div class="px-6 py-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          <div class="font-bold text-xl mb-2">
            <p>
              Name: {{name }}
            </p>
            <p>
              Age : {{age[index]}}
            </p>
          </div>
          <div class="font-bold text-xl mb-2">
            <p>
              Publish Date : {{date[index]}}
            </p>
            <p>
              Adoption Status : {{ status[index] }}
            </p>
          </div>
          <div class="font-bold text-xl mb-2">
            <p>
              <a :href="url[index]" class="button hover:text-cyan-600">Read more</a>
            </p>
          </div>
        </div>
        <!-- <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2"></div>
        <p class="text-gray-700 text-base">
           
          <p>Contact : {{ email[index] }} , {{ phone[index] }} </p>
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <a :href="url[index]" class="button">Read more</a>
      </div> -->
      </div>
    </div>



  </div>
</template>

<script>

import { Client } from "@petfinder/petfinder-js";

export default {
  name: "AdoptPet",
  props: ["adoptInfo"],
  data() {
    return {
      petName: [],
      date: [],
      status: [],
      url: [],
      age: [],
      animalType: "",
      zip:"",
      loading: false,
      apiKey: "t3HFYnWiXchY92ECiZ1aOBCqB831ty4259jPQIK2gfaldf7Pz6",
      secret: "nK9ZaxYTeKSwdxMvp8AtvCxNoSVeVlxYCsPT0fEb",
      apiResponse: "",
      myJson: null,
      client: "",


    };
  },
  created() {
    // Fetch Data
    this.fetchData();
  },
  mounted() {
    this.authenticate();
  },

  methods: {

    isValidZip(zip) {
      return /^\d{5}(-\d{4})?$/.test(zip);
    },
    searchPets() {
      this.showAnimals(this.animalType, this.zip);
    },

    async authenticate() {

      this.client = new Client({ apiKey: "t3HFYnWiXchY92ECiZ1aOBCqB831ty4259jPQIK2gfaldf7Pz6", secret: "nK9ZaxYTeKSwdxMvp8AtvCxNoSVeVlxYCsPT0fEb" });


      this.client.authenticate()
        .then(resp => {
          const token = resp.data.access_token;
          const expires = resp.data.expires_in;
        });

      return this.client;
    },

    async showAnimals(animalType, zip) {

      console.log("Connected to API");

      this.apiResponse = null;

      let page = 1;
      do {

        this.apiResponse = await this.client.animal.search({
          type: animalType,
          location: zip,
          page,
          limit: 10,
        });

        let dogIdx = (page - 1) * 100;

        let x = Object.values(this.apiResponse.data)[0];
        let y =
          console.log(x);

        for (let i = 0; i < 10; i++) {

          this.petName[i] = Object.values(x)[i].name;
          this.status[i] = Object.values(x)[i].status;
          this.age[i] = Object.values(x)[i].age;
          this.url[i] = Object.values(x)[i].url;
          this.date[i] = Object.values(x)[i].published_at;
        }

        this.loading = false;

        page++;
      } while (apiResult.data.pagination && apiResult.data.pagination.total_pages >= page);
    },

    fetchData() {
      fetch(this.adoptInfo)
        .then((stream) => stream.json())
        .then((data) => (this.myJson = data))
        .catch((error) => console.error(error));
    },

  },

};
</script>















