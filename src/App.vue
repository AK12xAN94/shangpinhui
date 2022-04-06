<template>
  <div>
    <Header />
    <router-view></router-view>
    <Footer v-if="this.$route.meta.showFooter"></Footer>
  </div>
</template>

<script>
import Header from "./components/Header/index.vue";
import Footer from "./components/Footer/index.vue";

export default {
  name: "",
  components: {
    Header,
    Footer,
  },
  computed: {
    
  }
};
</script>

<style>
</style>