<template>
  <div id="LoginComponent">
    <div v-if="!authenticated">
      <span>
        <label for="myEmail">Email</label>
        <input type="email" v-model="email" class="myEmail" name="myEmail" required />
        
      </span>
      <span>
        <label for="myPassword">Password</label>
        <input type="password" v-model="password" class="myPassword" name="myPassword" required />
        
      </span>
      <button @click="signin">Login</button>
          <p v-if="errMsg">{{ errMsg }}</p>
     </div>
    <div v-if="authenticated">
      <button @click="logout" class="myLogout">Logout</button>
    </div>
  </div>
</template>



<script>
/* eslint-disable no-unused-vars */
import { getAuth, onAuthStateChanged,signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useRouter } from "vue-router";

export default {
  name: "LoginBox", 

  data() {
    return {
      loggedIn: false,
      email: "",
      password: "",
       router: useRouter(),
      errMsg: "",
      auth:getAuth()
    };
  },
  mounted() {

    const ref = this;
  onAuthStateChanged(this.auth, (user) =>{
      if (user) {
        ref.loggedIn = true;
      } else {
        ref.loggedIn = false;
      }
    });
  },
  computed: {
    authenticated() {
      return this.loggedIn;
    }
  },
  methods: {
signin() {
      signInWithEmailAndPassword(this.auth, this.email, this.password)
        .then((data) => {
          console.log("Logged in");
          // this.router.push("/feed");
        })
        .catch((error) => {
          console.log(error.code);
          switch (error.code) {
            case "auth/invalid-email":
              this.errMsg = "Invalid Email";
              break;
            case "auth/user-not-found":
              this.errMsg = "No account with that email found";
              break;
            case "auth/wrong-password":
              this.errMsg = "Password incorrect";
              break;
            default:
              this.errMsg = "Email or password was incorrect";
              break;
          }
        });
    },
    logout() {

  signOut(this.auth).then(() => {
          this.loggedIn = false;
          this.email = "";
          this.password = "";
          this.router.push("/");
        });
    }
  }
};
</script>
