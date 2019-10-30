<template>
    <div id="UserStats">
      <template v-if="username">
          <h1>{{ username() }}</h1>
          <h2>{{ userDescription() }}</h2>
      </template>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import {getModule} from 'vuex-module-decorators';
import UserSearchModule from '../store/modules/UserSearchModule';

@Component
export default class UserStats extends Vue {
  public username() {
    const searchModule = getModule(UserSearchModule, this.$store);
    return searchModule.soundcloudUser.username;
  }
  public userDescription() {
    const searchModule = getModule(UserSearchModule, this.$store);
    return searchModule.soundcloudUser.description;
  }
}
</script>

<style scoped>
</style>