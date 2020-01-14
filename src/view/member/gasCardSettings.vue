<template>
  <div>
    <el-row>
      <h3>加油卡配置</h3>
    </el-row>
    <el-row type="flex" justify="end">
      <el-button type="primary" @click="addRelation">关联商品</el-button>
      <el-button type="primary" @click="addGasConfig">新增</el-button>
    </el-row>
    <el-table :data="resModel"
              border
              stripe
              highlight-current-row
              class="table-list">
      <el-table-column prop="" label="邀请人数">

      </el-table-column>
      <el-table-column prop="" label="加油卡折扣（%）">

      </el-table-column>
      <el-table-column prop="" label="排序">

      </el-table-column>
      <el-table-column prop="" label="展示图片">

      </el-table-column>
      <el-table-column prop="" label="操作">
        <el-link @click="editConfig">编辑</el-link>
        <el-link @click="deleteConfig">删除</el-link>
      </el-table-column>

    </el-table>

    <el-pagination background
                   @current-change="handleCurrentChange"
                   :current-page.sync="currentPage"
                   :page-size="20"
                   layout="total, prev, pager, next, jumper"
                   :total="totals"/>
    <!--    新增折扣奖励弹框-->
    <el-dialog
      title="新增折扣奖励"
      :visible.sync="discountVisible"
      width="30%"
      @close="closeDialog('ruleForm')"
      center>
      <el-row>
        <label style="margin-right: 10px">邀请人数：</label>
        <el-input v-model="discountAwardModel.inviteNumber" style="text-align: left;width:170px"/>
      </el-row>
      <el-row>
        <label style="margin-right: 10px ">加油卡折扣（%）</label>
        <el-input v-model="discountAwardModel.gasDiscount" style="text-align: left;width:170px"/>
      </el-row>
      <el-row>
        <label style="margin-right: 10px ">展示图片：</label>

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
        <el-image style="width:100%;height:80px;" :src="discountAwardModel.displayImgUrl" fit="contain">
        </el-image>
      </el-row>
      <el-row>
        <label style="margin-right: 10px">排序：</label>
        <el-input v-model="discountAwardModel.casSort" style="text-align: left;width:170px"/>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitDiscount">提交</el-button>
      </span>
    </el-dialog>
    <!--    关联商品-->
    <el-dialog title="关联商品"
               :visible.sync="associteVisible"
               width="30%"
               @close="closeDialog('ruleForm')"
               center>
      <el-row>
        <label style="margin-right: 10px">关联商品：</label>
        <el-input v-model="addGoodsNumber" style="text-align: left;width:170px"/>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitDiscount">提交</el-button>
      </span>
    </el-dialog>
    <!--     编辑关联商品-->
    <el-dialog title="编辑关联商品"
               :visible.sync="editAssociteVisible"
               width="30%"
               @close="closeDialog('ruleForm')"
               center>
      <el-row>
        <label style="margin-right: 10px">关联商品：</label>
        <el-input v-model="editGoodsNumber" style="text-align: left;width:170px"/>
      </el-row>
      <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="submitDiscount">提交</el-button>
        </span>
    </el-dialog>
  </div>
</template>

<script>export default {
  name: 'carInsurance',
  data () {
    return {
      discountVisible: false,
      associteVisible: false,
      editAssociteVisible: false,
      editGoodsNumber: '',
      addGoodsNumber: '',
      discountAwardModel: {
        inviteNumber: '',
        gasDiscount: 0,
        casSort: '',
        displayImgUrl: ''
      }
    }
  },
  methods: {
    closeDialog (dialogName) {
      this.rightsImgUrl = ''
      this.$refs.imgUpload.clearFiles()
    },
    addGasConfig () {
      this.discountVisible = true
    },
    addRelation () {
      this.associteVisible = true
    },
    // 编辑加油配置
    editConfig () {

    },
    // 删除加油配置
    deleteConfig () {

    },
    // 上传图片方法
    beforeImgUpload (file) {
      const isPic = file.type === 'image/png' || file.type === 'image/jpg' || file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 20

      if (!isPic) {
        this.$message.error('上传头像图片只能是 JPG/PNG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 20MB!')
      }
      return isPic && isLt2M
    },
    onSuccessUploadImg (res, file) {
      this.rightsImgUrl = URL.createObjectURL(file.raw)
      // let uploadPath = res.filePath
    },
    errorUploadImg () {
      this.$message.error('图片上传失败')
    },
    uploadRights () {
      this.dialogVisible = false
      this.rightsImgUrl = ''
      this.$refs.imgUpload.clearFiles()
    },

    submitDiscount () {
    },
    getNowTime () {
      var now = new Date()
      var year = now.getFullYear()
      var month = now.getMonth()
      var date = now.getDate()
      var strhour = ` ${now.getHours()}:${now.getSeconds()}:${now.getMinutes()}`
      month = month + 1
      month = month.toString().padStart(2, '0')
      date = date.toString().padStart(2, '0')
      var defaultDate = `${year}-${month}-${date}${strhour}`
      return defaultDate
      // this.$set(this.value1, 'value1', defaultDate)
    }
  }
}
</script>

<style scoped>

</style>
