<template>
  <!-- <div class="about"> -->
    <v-footer class="pa-3" app>
      <v-spacer/>
      <div> powered by Dipti © {{ new Date().getFullYear() }}</div>
    </v-footer>
  <!-- </div> -->
</template>
<script>
export default {
  name: "AppFooter",
  data() {
    return {
      //
    };
  },
  computed: {
    // activeUser() {
    //   return this.$store.getters.getActiveUser;
    // }
  }
};
</script>
