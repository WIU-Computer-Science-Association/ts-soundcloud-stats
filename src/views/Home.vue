<template>
  <div class="home">
    <template v-if="errorInitializingSoundCloud != {}">
      <UserSearch @search="onSearch" :error="userSearchError"/>
      <UserStats :username="resolvedUsername" :userDescription="resolvedDescription" />
    </template>
    <template v-if="errorInitializingSoundCloud == {}">
      <p>There was an error initializing the SoundCloud authentication using the supplied Client ID</p>
      <div>
        <span>error:</span>
        <span>{{errorInitializingSoundCloud}}</span>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Prop, PropSync, Vue } from 'vue-property-decorator';
import UserStats from "@/components/UserStats.vue";
import UserSearch from '@/components/UserSearch.vue';
import SC from 'soundcloud';

@Component({
  components: {
    UserStats,
    UserSearch,
  },
})
export default class Home extends Vue {

  public resolvedUsername:string = "";
  public resolvedDescription:string = "";
  public userSearchError:object = {};
  public errorInitializingSoundCloud:object = {};

  constructor() {
    super();
    this.initializeSoundCloud();
  }

  public async onSearch(username: string): Promise<void> {
    console.log(process.env.VUE_APP_SC_CLIENT_ID);
    console.log(username);
    try {
      const result = await SC.resolve(`https://soundcloud.com/${username}`);
      console.log(result);
      this.resolvedDescription = result.description;
      this.resolvedUsername = result.username;
      this.userSearchError = "";
    } catch (err) {
      console.log('error with getting user');
      console.log(err);
      this.userSearchError = err;
    }
  }

  public async initializeSoundCloud(): Promise<void> {
    try {
      SC.initialize({ client_id: process.env.VUE_APP_SC_CLIENT_ID });
    } catch (err) {
      console.log(
        'An error occurred while trying to initialize the SoundCloud API.',
      );
      console.log('Please check that your soundcloud client ID is valid.');
      console.log('error response:');
      console.log(err);
      this.errorInitializingSoundCloud = err;
    }
  }

}
</script>
