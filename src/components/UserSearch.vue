<template>
  <b-row class="justify-content-center mt-3">
    <div class="col-md-8 col-11 justify-content-center">
      <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>{{ error.message }}</b-alert>
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
@Component
export default class UserSearch extends Vue {
  @Provide()
  public username = '';
  @Prop() private error!: object;
  @Prop() private showDismissibleAlert!: boolean;
  public search() {
    this.$emit('search', this.username);
  }
}
</script>
