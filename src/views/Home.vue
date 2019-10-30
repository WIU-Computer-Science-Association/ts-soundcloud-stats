<template>
  <div class="home">
    <Navbar />
    <template v-if="errorInitializingSoundCloud != {}">
      <UserSearch/>
      <UserStats/>
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
import UserStats from '@/components/UserStats.vue';
import UserSearch from '@/components/UserSearch.vue';
import Navbar from '@/components/Navbar.vue';
import SC from 'soundcloud';

@Component({
  components: {
    UserStats,
    UserSearch,
    Navbar,
  },
})
export default class Home extends Vue {
  public errorInitializingSoundCloud: object = {};

  constructor() {
    super();
    this.initializeSoundCloud();
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
