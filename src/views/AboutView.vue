<template>
  <div>
    <main class="register">
       <p>Create an account</p>
      <div>
            <label for="myEmail">Email</label>
        <input type="email" v-model="email" id="myEmail" name="myEmail" required class="w-48 focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none text-sm text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"/>
    
      </div>
      <div>
             <label for="myPassword">Password</label>
        <input type="password" v-model="password" id="myPassword" name="myPassword" required class="w-48 focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none text-sm text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"/>
   
      </div>
      <button @click="register" class="px-6 h-12 uppercase font-semibold tracking-wider border-2 border-black bg-teal-400 text-black">Register</button>
    </main>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import { useRouter } from "vue-router";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"

export default {
  name: "register",
  data() {
    return {
      email: "",
      password: "",
      router: useRouter(),
    };
  },
  methods: {
        register() {
          console.log("register");
          createUserWithEmailAndPassword(getAuth(), this.email, this.password)
          .then(
          (data) => {
            console.log("Logged in");
            this.router.push('/');
          })
          .catch((error) => {
            console.log(error.code);
            alert("Sorry you could not sign up" + error.message);
          }
        );
    }

  },
};
</script>