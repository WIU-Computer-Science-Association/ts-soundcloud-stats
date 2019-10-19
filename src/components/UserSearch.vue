<template>
  <form v-on:submit.prevent inline class="d-flex justify-content-center">
    <div class="col-md-6 col-8 pl-0">
      <input v-model.trim="username" class="w-100 mr-sm-2" type="text" placeholder="Enter Search Term"/>
    </div>
    <button class="my-2 my-sm-0" @click="search()">Search</button>
  </form>
</template>

<script lang="ts">
  import { Component, Vue, Provide } from 'vue-property-decorator'
  @Component
  export default class VsInput extends Vue {
    @Provide()
    username = '';
    search() {
      this.$emit('search', this.username);
    }
  }
</script>
