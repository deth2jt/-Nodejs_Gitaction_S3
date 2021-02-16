<template>
  <!--<section class="directory">-->
 <section class="directory" v-if="directory">
    <h1 class="directory__name">{{ directory.name }}</h1>
    <p class="directory__info">{{ directory.info }}</p>
  </section>
</template>
<script>
/*
export default {
  name: "directory-info",
  data() {
    return {
      directory: this.$route.params.dir
    };
  }
};
*/
//https://www.smashingmagazine.com/2020/04/getting-started-nuxt/
import { mapState } from "vuex";
export default {
  name: "directory-info",
  computed: {
    ...mapState(["directory"])
  }
};
</script>
<style>
</style>
