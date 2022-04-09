<template>
  <div>
    <!-- 三级联动 -->
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor v-for="item in floorList" :key="item.id" :list="item"></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import TypeNav from "@/components/TypeNav";
import ListContainer from "./ListContainer/index.vue";
import Recommend from "./Recommend/index.vue";
import Rank from "./Rank/index.vue";
import Like from "./Like/index.vue";
import Floor from "./Floor/index.vue";
import Brand from "./Brand/index.vue";
import { mapState } from "vuex";
export default {
  components: { TypeNav, ListContainer, Recommend, Rank, Like, Floor, Brand },
  created() {
    //获取楼层信息
    this.$store.dispatch("getFloorList");
  },
    computed: {
    ...mapState({
      floorList: state => state.home.floorList
    })
  }
};
</script>

<style lang="less" scoped>
</style>