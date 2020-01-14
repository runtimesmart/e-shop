<template>
  <div>
    <el-row>
      <h3>洗车服务兑换码列表(所有数字兑换码)</h3>
    </el-row>
    <el-row>
      <el-button type="primary" @click="exportExcels">导出表格</el-button>
    </el-row>
    <el-table :data="redeemCodeModel"
              border
              stripe
              highlight-current-row
              class="table-list">
      <el-table-column prop="" label="数字兑换码 ID">

      </el-table-column>
      <el-table-column prop="" label="数字兑换码">

      </el-table-column>
      <el-table-column prop="" label="订单编号">

      </el-table-column>
      <el-table-column prop="" label="购买人">

      </el-table-column>
      <el-table-column prop="" label="购买时间">

      </el-table-column>

    </el-table>
    <el-pagination background
                   @current-change="handleCurrentChange"
                   :current-page.sync="currentPage"
                   :page-size="20"
                   layout="total, prev, pager, next, jumper"
                   :total="totals"/>
  </div>
</template>

<script>export default {
  name: 'redeeCodeList',
  data () {
    return {
      redeemCodeModel: Object,
      currentPage: 1

    }
  },
  mounted () {
  },
  methods: {
    exportExcels () {

    },
    handleCurrentChange () {

    }
  }
}
</script>

<style scoped>

</style>
