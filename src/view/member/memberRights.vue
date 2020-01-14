<template>
  <div>
    <el-row class="member-header">
      <h3>会员权益列表</h3>
    </el-row>
    <el-row class="top-row">
      <label>权益名称/ID</label>
      <el-input style="width:200px" suffix-icon="el-icon-search" v-model="ticketModel" placeholder="请输入权益名称"/>

      <label>是否上线</label>
      <el-select class="op-select" @change="onSelect" v-model="filterValue">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled">
        </el-option>
      </el-select>
      <div style="display: inline; margin-left: 50px">
        <el-button type="primary" @click="showUploadDialog">上传会员推荐权益</el-button>
        <el-button type="primary" @click="addRights">添加会员权益</el-button>
      </div>
    </el-row>
    <el-table
      :data="memberRightsList"
      border
      stripe
      highlight-current-row
      class="table-list">
      <el-table-column prop="" label="权益ID">

      </el-table-column>
      <el-table-column prop="" label="会员权益icon">

      </el-table-column>
      <el-table-column prop="" label="权益名称">

      </el-table-column>
      <el-table-column prop="" label="供应商名称">

      </el-table-column>
      <el-table-column prop="" label="页面链接">

      </el-table-column>
      <el-table-column prop="" label="关联商品sku编号">

      </el-table-column>
      <el-table-column prop="" label="商品名称">

      </el-table-column>
      <el-table-column prop="" label="数字兑换码剩余数量/总数量">

      </el-table-column>
      <el-table-column prop="" label="排序">

      </el-table-column>
      <el-table-column prop="" label="权益状态">

      </el-table-column>
      <el-table-column label="操作">
        <el-button>导入数字兑换码</el-button>
        <el-button>{{btnRightAction}}</el-button>
      </el-table-column>

    </el-table>
    <el-pagination background
                   @current-change="handleCurrentChange"
                   :current-page.sync="currentPage"
                   :page-size="20"
                   layout="total, prev, pager, next, jumper"
                   :total="totals"/>
    <el-dialog
      title="上传会员权益"
      :visible.sync="dialogVisible"
      width="30%"
      @close="closeDialog('ruleForm')"
      center>
      <el-row>
        <label style="display: inline-block; width: 130px; ">会员权益</label>
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
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="uploadRights">提交</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>import {baseUrl} from '../../config/env.js'

export default {
  name: 'memberRights',
  data () {
    return {
      httpUrl: baseUrl,
      options: [{
        label: '不限',
        value: '0'
      }, {
        label: '上线',
        value: '1'
      }, {
        label: '下线',
        value: '2'
      }],
      filterValue: '0',
      memberRightsList: Object,
      btnRightAction: '权益上线',
      dialogVisible: false,
      rightsImgUrl: ''
    }
  },
  mounted () {
  },
  methods: {
    addRights () {
      this.$router.push({
        path: '/member/addRights'
      })
    },
    showUploadDialog () {
      this.dialogVisible = true
    },
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
    closeDialog (dialogName) {
      this.rightsImgUrl = ''
      this.$refs.imgUpload.clearFiles()
    },
    onSelect (param) {
      this.filterValue = param
    }
  }
}
</script>

<style scoped>
  @import "../../style/index.scss";

  .op-select {
    width: 150px;
  }

  .table-list {
    margin-top: 20px;
  }

  member-header {
    padding-bottom: 20px;
  }
</style>
