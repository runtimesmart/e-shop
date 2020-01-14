<template>
  <div>
    <el-row>
      <h3>车主专享权益资源位</h3>
    </el-row>
    <el-row>
      <el-button type="primary" @click="addRes">添加资源位</el-button>
    </el-row>
    <el-table :data="resModel"
              border
              stripe
              highlight-current-row
              class="table-list">
      <el-table-column prop="" label="资源位名称">

      </el-table-column>
      <el-table-column prop="" label="资源位图片">

      </el-table-column>
      <el-table-column prop="" label="资源位链接">

      </el-table-column>
      <el-table-column prop="" label="资源位排序">

      </el-table-column>
      <el-table-column prop="" label="操作">

      </el-table-column>

    </el-table>
    <el-pagination background
                   @current-change="handleCurrentChange"
                   :current-page.sync="currentPage"
                   :page-size="20"
                   layout="total, prev, pager, next, jumper"
                   :total="totals"/>
    <el-dialog
      title="添加资源位"
      :visible.sync="dialogVisible"
      width="30%"
      @close="closeDialog('ruleForm')"
      center>
      <el-row>
        <label style="margin-right: 10px">资源位名称：</label>
        <el-input v-model="userId" style="text-align: left;width:170px"/>
      </el-row>
      <el-row>
        <label style="margin-right: 10px ">资源位链接：</label>
        <el-input v-model="userId" style="text-align: left;width:170px"/>
      </el-row>
      <el-row>
        <label style="margin-right: 10px ">资源位图片：</label>

        <el-upload ref="imgUpload" style="display: inline" :action="httpUrl+'/upload'" :on-success="onSuccessUploadImg"
                   :on-error="errorUploadImg"
                   :before-upload="beforeImgUpload"
                   :list-type="picture"
                   accept="image/*"
                   title="只能上传jpg/png文件"
                   :limit="1">
          <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>
      </el-row>
      <el-row>
        <el-image style="width:100%;height:80px;" :src="rightsImgUrl" fit="contain">
        </el-image>
      </el-row>
      <el-row>
        <label style="margin-right: 10px">资源位排序：</label>
        <el-input v-model="userId" style="text-align: left;width:170px"/>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="uploadRights">提交</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>export default {
  name: 'CarOwnerRes',
  data () {
    return {
      resModel: Object,
      dialogVisible: false,
      currentPage: 1
    }
  },
  methods: {
    addRes () {
      this.dialogVisible = true
    }
  }
}
</script>

<style scoped>

</style>
