<template>
    <div id="UserStats">
      <template v-if="username">
          <h1>{{ username }}</h1>
          <h2>{{ userDescription }}</h2>
      </template>
      <template v-if="!username">
          <h1>Please enter a username above</h1>
      </template>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class UserStats extends Vue {
  @Prop() private username!: string;
  @Prop() private userDescription!: string;
}
</script>

<style scoped>
</style>