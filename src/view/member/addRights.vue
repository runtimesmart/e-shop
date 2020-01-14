<template>
  <div>
    <el-col>
      <h3>新增会员权益</h3>
    </el-col>
    <el-form ref="rightsModel" enctype="multipart/form-data" :rules="rightsRules" :model="formModel"
             label-width="150px">
      <el-form-item label="权益名称：">
        <el-input maxlength="60" clearable type="string" v-model="formModel.rightsName"
                  placeholder="不超过60个字符"></el-input>
      </el-form-item>
      <el-form-item label="供应商名称：">
          <el-select v-model="supplierModel" @select="supplierSelect">
            <el-option
              v-for="item in supplierModel"
              :key="item.supplierId"
              :label="item.supplierName">

            </el-option>
          </el-select>
      </el-form-item>
      <el-form-item prop="" label="权益类型：">
        <el-radio-group v-model="formModel.radioModel" @change="rightsCheckEvent">
          <el-radio label="1">商品详情页</el-radio>
          <el-radio label="2">小程序页面</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item v-if="formModel.radioModel==='2'" label="小程序页面：">
        <el-select v-model="tinyPageValue" @select="tinyPageSelect">
          <el-option
            v-for="item in tinyPageModel"
            :key="item.value"
            :label="item.label">

          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item v-else label="关联商品：" v-model="formModel.associateGoods">
        <el-input maxlength="60" clearable placeholder="不超过60个字符"></el-input>
      </el-form-item>
      <el-form-item label="排序：" v-model="formModel.sortNum">
        <el-input maxlength="60" clearable placeholder="不超过60个字符"></el-input>
      </el-form-item>
      <el-form-item label="导入数字兑换码：">
        <el-row type="flex" justify="start">
        <el-upload :action="uploadUrl+'/upload'"
                   ref="checkNoUpload"
                   :limit="1"
                   :before-upload="beforeNoUpload"
                   :on-success="NoUploadSuccess"
                   :http-request="procNoUpload">
          <el-button style="width: 100px" type="primary">上传文件</el-button>
        </el-upload>
        <el-button title="下载数据兑换码模板" style="margin-left: 30px" type="primary" @click="exportRightsModule">下载模版</el-button>
        </el-row>
      </el-form-item>

      <el-form-item label="会员权益icon：">
        <el-row type="flex" justify="start">
          <el-upload :action="uploadUrl+'/upload'"
                     ref="rightsIconUpload"
                     :limit="1"
                     :before-upload="beforeIconUpload"
                     :on-success="iconUploadSuccess"
                     accept="image/*"
                     :http-request="procIconUpload">
            <el-button type="primary">上传图片</el-button>
          </el-upload>
        </el-row>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit('form')">提交</el-button>
        <el-button @click="onBack('form')">返回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>import {baseUrl} from '../../config/env.js'
import {getSupplier} from '../../api/request.js'

export default {
  name: 'addRights',
  data () {
    return {
      uploadUrl: baseUrl,
      rightsIconUrl: '',
      formModel: {
        rightsName: '',
        supplyName: '',
        radioModel: '1',
        associateGoods: '',
        sortNum: ''

      },
      supplierModel: [],
      tinyPageModel: [{}],
      tinyPageValue: '1',
      rightsRules: {}
    }
  },
  mounted () {
    this.getSupplierList()
  },
  methods: {
    async getSupplierList () {
      let res = await getSupplier()
      if (res.code === '0') {
        this.supplierModel = res.data.supplierList
      }
    },
    rightsCheckEvent (value) {

    },
    tinyPageSelect (param) {

    },
    beforeIconUpload (iconFile) {
      const isPic = iconFile.type === 'image/png' || iconFile.type === 'image/jpg' || iconFile.type === 'image/jpeg'
      const isLt2M = iconFile.size / 1024 / 1024 < 20

      if (!isPic) {
        this.$message.error('上传头像图片只能是 JPG/PNG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 20MB!')
      }
      return isPic && isLt2M
    },
    iconUploadSuccess (res, file) {
      this.rightsIconUrl = URL.createObjectURL(file.raw)
      console.log(this.rightsIconUrl + 'ddddd')
    },
    procIconUpload () {

    },
    beforeNoUpload () {

    },
    NoUploadSuccess () {

    },
    procNoUpload () {

    },
    onSubmit () {
      this.$refs.checkNoUpload.submit()
      this.$refs.rightsNoUpload.submit()
    },
    exportRightsModule () {
      let link = document.createElement('a') // 创建a标签
      link.style.display = 'none' // 将a标签隐藏
      link.href = 'https://dwz.cn/qpeOcCmc' // 给a标签添加下载链接
      link.setAttribute('download', '权益模版.xls') // 此处注意，要给a标签添加一个download属性，属性值就是文件名称 否则下载出来的文件是没有属性的，空白白
      document.body.appendChild(link)
      link.click() // 执行a标签
    },
    onBack () {
      this.$router.push({
        path: '/member/index'
      })
    }
  }
}
</script>

<style scoped>

</style>
