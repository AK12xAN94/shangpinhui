<template>
  <div>
      我是Search
      <h1>{{ this.$route.params.keyword + '---' + this.$route.query.k  }}</h1>
      <h1>{{ keyword + '---' + k  }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Search',
  props: ['keyword', 'k']
}
</script>

<style lang="less" scoped>

</style>