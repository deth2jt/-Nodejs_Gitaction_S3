<template>
  <section class="directory">
    <h1 class="directory__name">{{ directory.name }}</h1>
    <p class="directory__info">{{ directory.info }}</p>
  </section>
</template>
<script>
export default {
  name: "directory-info",
  data() {
    return {
      directory: this.$route.params.dir
    };
  }
};
</script>
<style>
</style>
