<template>
  <v-container fill-height class="my-2">
    <v-layout row wrap>
      <v-flex xs3 lg12 v-for="(feed, i) in feeds" :key="i" ma-2>
        <v-card>
          <v-layout row>
            <v-flex ma-2>
              <v-avatar v-if="getUserInfo(feed.userId)">
                <img :src="getImageUrl(getUserInfo(feed.userId).dp)" alt="John">
              </v-avatar>
              <span class="mx-1 subheading">{{getUserInfo(feed.userId).name}}</span>
              <span class="grey--text">uploaded story</span>
            </v-flex>
          </v-layout>
          <v-img
            class="white--text"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline">{{feed.title}}</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-title>
            <div>
              <span class="grey--text">{{feed.description}}</span>
              <br>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat fab color="red">
              <v-icon>favorite</v-icon>
            </v-btn>
            <v-btn flat fab color="grey">
              <v-icon>chat</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
        <v-divider></v-divider>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import HelloWorld from "../components/HelloWorld";

export default {
  components: {
    HelloWorld
  },
  data() {
    return {};
  },
  created() {
    console.log(this.$store);
    // this.$store.dispatch("setActiveUser", "Marissa.mayer").then(()=>{
    this.$store.dispatch("setFeeds");
    // })
  },
  methods: {
    getUserInfo(id) {
      console.log(
        this.$store.getters.getUsers,
      );
      return this.$store.getters.getUsers.find(u => u.id === id);
    },
    getImageUrl(pic){
      if (!pic) return;
        return require("../assets" + pic);
    }
  },
  computed: {
    feeds() {
      return this.$store.getters.getFeeds;
    }
  }
};
</script>
