<template>
  <el-container direction="vertical">
    <el-header style="height: 60px; line-height:60px;background-color: #eff2f7; vertical-align: middle">
      <sideTop></sideTop>
    </el-header>
    <el-container>
      <el-aside class="sidebar-container">
        <sideBar class="item-sidebar"></sideBar>
      </el-aside>
      <el-main>
        <transition name="fade" mode="out-in">
          <router-view></router-view>

        </transition>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import SideTop from '../../components/sideTop'
import SideBar from '../../components/sideBar'

export default {
  name: 'index', components: {SideTop, SideBar}
}
</script>

<style lang="scss">
  @import "../../style/index";
</style>
