<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
        <h2 class="headline font-weight-bold mb-3">{{name}}</h2> 
        <v-flex class="headline test font-weight-bold mb-3">{{name}}</v-flex>
        <!-- <v-btn @click="clickBtn">
          <v-icon>people</v-icon>
        </v-btn> -->
        <button @click="clickBtn">Increment</button>
        <div>{{clickText}}</div>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      testText: 'Hello',
      clickValue: 0,
      clickText: "",
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader'
        },
      ],
    }),
    computed: {
      name(){
        return this.$store.getters.getName;
      },
    },
    created(){
      console.log("i am created......")
    },
    methods:{
      clickBtn(){
        this.clickValue = this.clickValue + 2;
        this.clickText = "I am clicked";
      },
    },
  }
</script>

<style>
.test{
  color: blue;
}
</style>
