<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">ts-soundcloud-stats</b-navbar-brand>
    </b-navbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide, Prop } from 'vue-property-decorator';
@Component
export default class Navbar extends Vue {}
</script>
