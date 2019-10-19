<template>
  <div class="home">
    <UserSearch @search="onSearch" />
    <!-- <UserStats :username="resolvedUsername" :userDescription="resolvedDescription" /> -->
  </div>
</template>

<script lang="ts">
import { Component, Prop, PropSync, Vue } from 'vue-property-decorator';
// import UserStats from "@/components/UserStats.vue";
import UserSearch from '@/components/UserSearch.vue';
import SC from 'soundcloud';

@Component({
  components: {
    // UserStats
    UserSearch,
  },
})
export default class Home extends Vue {

  constructor() {
    super();
    this.initializeSoundCloud();
  }

  public async onSearch(username: string): void {
    console.log(process.env.VUE_APP_SC_CLIENT_ID);
    console.log(username);
    try {
      const result = await SC.resolve(`https://soundcloud.com/${username}`);
      console.log(result);
    } catch (err) {
      console.log('error with getting user');
      console.log(err);
    }
  }

  public async initializeSoundCloud(): void {
    try {
      SC.initialize({ client_id: process.env.VUE_APP_SC_CLIENT_ID });
    } catch (err) {
      console.log(
        'An error occurred while trying to initialize the SoundCloud API.',
      );
      console.log('Please check that your soundcloud client ID is valid.');
      console.log('error response:');
      console.log(err);
    }
  }

}
</script>
