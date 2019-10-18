<template>
    <div id="UserStats">
        <h1>{{ username }}</h1>
        <h2>{{ userDescription }}</h2>
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