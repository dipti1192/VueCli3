<template>
  <v-app>
    <app-header></app-header>
    <v-content>
      <router-view v-if="activeUser"></router-view>
    </v-content>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";

export default {
  name: "App",
  components: {
    HelloWorld,
    AppHeader,
    AppFooter,
  },
  data() {
    return {
      // activeUser: null,
    };
  },
  created() {
    this.$store.dispatch("setUsers")
    .then(() => {
      this.$store.dispatch("setActiveUser", "Marissa.mayer");
    });
  },
  computed:{
    activeUser(){
      console.log(this.$store.getters.getActiveUser)
      return this.$store.getters.getActiveUser;
    }
  }
};
</script>
