<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" style="float:left; height:5em;"> -->
    <UserStats :username="resolvedUsername" :userDescription="resolvedDescription"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, PropSync, Vue } from 'vue-property-decorator';
import UserStats from '@/components/UserStats.vue';
import SC from 'soundcloud';

@Component({
  components: {
    UserStats,
  },
})
export default class Home extends Vue {
  private username: string = 'Look up a User!';
  private description: string = 'Their information will show up here.';

  get resolvedUsername() {
    return this.username;
  }
  set resolvedUsername(value: string) {
    this.username = value;
  }

  get resolvedDescription() {
    return this.description;
  }
  set resolvedDescription(value: string) {
    this.description = value;
  }

  constructor() {
    super();
    SC.initialize({ client_id: process.env.VUE_APP_SC_CLIENT_ID});

    this.setUserData(process.env.VUE_APP_SC_TEST_USERNAME);
  }

  private async setUserData(un: string) {
    const result = await SC.resolve(`https://soundcloud.com/${un}`);
    console.log(result);
    this.resolvedUsername = result.username;
    this.resolvedDescription = result.description;
  }
}
</script>
