<template>
  <b-form v-on:submit.prevent inline >
    <p v-if="Object.entries(error).length !== 0 && error.constructor === Object">
      <b>Error with retrieving SoundCloud user data: </b> {{ error }}
    </p>
    <label class="sr-only" for="inline-form-input-name">username</label>
    <b-input-group prepend="@">
      <b-input id="inline-form-input-username" v-model.trim="username" placeholder="Username"></b-input>
    </b-input-group>
    <b-button variant="primary" @click="search()">Search</b-button>
  </b-form>
</template>

<script lang="ts">
import { Component, Vue, Provide, Prop } from 'vue-property-decorator';
@Component
export default class VsInput extends Vue {
  @Provide()
  public username = '';
  @Prop() private error!: object;
  public search() {
    this.$emit('search', this.username);
  }
}
</script>
