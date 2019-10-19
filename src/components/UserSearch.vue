<template>
  <form v-on:submit.prevent inline class="d-flex justify-content-center">
    <p v-if="Object.entries(error).length !== 0 && error.constructor === Object">
      <b>Error with retrieving SoundCloud user data: </b> {{ error }}
    </p>
    <div class="col-md-6 col-8 pl-0">
      <input v-model.trim="username" class="w-100 mr-sm-2" type="text" placeholder="Enter Search Term"/>
    </div>
    <button class="col-md-6 col-4" @click="search()">Search</button>
  </form>
</template>

<script lang="ts">
import { Component, Vue, Provide, Prop } from 'vue-property-decorator';
@Component
export default class VsInput extends Vue {
  @Prop() private error!: object;
  @Provide()
  public username = '';
  public search() {
    this.$emit('search', this.username);
  }
}
</script>
