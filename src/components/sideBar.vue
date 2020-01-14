<template>
  <el-menu background-color="#304156"
           text-color="#fff"
           active-text-color="#409EFF"
           :unique-opened="true"
           :default-active="this.$route.path"
           router>
    <el-submenu index=1>
      <template slot="title"><i class="el-icon-menu"></i>会员权益管理</template>
      <el-menu-item-group>
        <el-menu-item index="/member/index">
          会员权益列表
        </el-menu-item>

        <el-menu-item index="/member/ownerRes">
          车主专享权益资源位
        </el-menu-item>
        <el-menu-item index="/member/gasCard">
          加油折扣配置
        </el-menu-item>
        <el-menu-item index="/member/carInsurance">
          汽车保险明细
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>
<script>export default {
  data () {
    return {}
  }
}
</script>
<style lang="scss">
  @import "../style/sidebar";
</style>
