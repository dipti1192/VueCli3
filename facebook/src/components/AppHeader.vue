<template>
  <v-toolbar app>
    <v-toolbar-title class="headline">
      <v-flex ma-2>
        <v-avatar>
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
        </v-avatar>
        <span class="font-weight-light body-2 mx-2">Welcome</span>
        <span class="mx-1 body-2 text-uppercase">{{activeUser.name}} {{activeUser.lastName}} !</span>
      </v-flex>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn flat fab target="_blank">
      <v-icon>exit_to_app</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      //
    };
  },
  computed: {
    activeUser() {
      return this.$store.getters.getActiveUser;
    }
  }
};
</script>
