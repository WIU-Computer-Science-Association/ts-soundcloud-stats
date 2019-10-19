<template>
  <div class="home">
    <UserSearch/>
    <!-- <UserStats :username="resolvedUsername" :userDescription="resolvedDescription" /> -->
  </div>
</template>

<script lang="ts">
import { Component, Prop, PropSync, Vue } from "vue-property-decorator";
// import UserStats from "@/components/UserStats.vue";
import UserSearch from "@/components/UserSearch.vue";
import SC from "soundcloud";

@Component({
  components: {
    // UserStats
    UserSearch
  }
})
export default class Home extends Vue {



  constructor() {
    super();
    try {
      SC.initialize({ client_id: process.env.VUE_APP_SC_CLIENT_ID });
    } catch (err) {
      console.log(
        "An error occurred while trying to initialize the SoundCloud API."
      );
      console.log("Please check that your soundcloud client ID is valid.");
      console.log("error response:");
      console.log(err);
    }

    // this.setUserData(process.env.VUE_APP_SC_TEST_USERNAME);
  }

  private async setUserData(un: string) {
    const result = await SC.resolve(`https://soundcloud.com/${un}`);
    console.log(result);
    this.resolvedUsername = result.username;
    this.resolvedDescription = result.description;
  }
  private async getUserData(){
    console.log(usernameInput)
  }
}
</script>
