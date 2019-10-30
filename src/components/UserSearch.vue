<template>
  <b-row class="col justify-content-center mt-3">
    <div class="col-md-8 col-11 justify-content-center">
      <b-alert :show="showAlert()" v-on:dismissed="dismissAlert()" variant="danger" dismissible>{{ error().message }}</b-alert>
      <b-form v-on:submit.prevent="search()" inline class="col justify-content-center mb-4">
        <label class="sr-only" for="inline-form-input-name">username</label>
        <b-input-group prepend="@">
          <b-input id="inline-form-input-username" v-model.trim="username" placeholder="Username"></b-input>
        </b-input-group>
        <b-button type="submit" variant="primary">Search</b-button>
      </b-form>
    </div>
  </b-row>
</template>

<script lang="ts">
import { Component, Vue, Provide, Prop } from 'vue-property-decorator';
import store from '@/store/store';
import {getModule} from 'vuex-module-decorators';
import UserSearchModule from '../store/modules/UserSearchModule';

@Component
export default class UserSearch extends Vue {
  @Provide()
  public username = '';

  public async search() {
    const searchModule = getModule(UserSearchModule, this.$store);
    searchModule.searchUser(this.username);
  }

  public error() {
    const searchModule = getModule(UserSearchModule, this.$store);
    return searchModule.searchError;
  }

  public showAlert() {
    const searchModule = getModule(UserSearchModule, this.$store);
    return searchModule.errorShown;
  }

  public dismissAlert() {
    const searchModule = getModule(UserSearchModule, this.$store);
    searchModule.clearSearchError();
  }

}
</script>
