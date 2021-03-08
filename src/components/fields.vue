<template>
  <div>
    <div class="fields" v-for="item in fields.original" :key="item.id">
      <aside class="card" v-if="item.identity_key === 'id_card_img'">
        <p><span class="title">个人认证</span><span class="realname">（已完成实名认证）</span></p>
        <van-uploader
          preview-size="110px"
          :after-read="afterRead"
          v-model="cardFileList"
          :max-count="2"
          :deletable="false"
        >
        </van-uploader>
      </aside>
    </div>
  </div>
</template>
<script>
const TOTAL_FORM_ID = 7
export default {
  props: {
    fields: Object,
    FORM_ID: Number,
  },
  data() {
    return {
      cardFileList: [],
      totalFields: {},
    }
  },
  mounted() {
    this.requestForm()
  },
  methods: {
    // 获取总记录单
    async requestForm() {
      const { data } = await this.Api.getRequestForm(TOTAL_FORM_ID)
      this.totalFields = data.fields
    },
    // 附件上传
    afterRead(file) {
      file.status = 'uploading'
      file.message = '上传中...'
      const params = {
        purpose: 'create_responses',
        user_id: 1,
      }
      this.getUploadToken(params, file)
    },
    async getUploadToken(params, file) {
      const gaoxinHeader = {
        Authorization:
          '05e21fb1092459fa2c1f36efcd9600f738fed8c57c92528f124f23629c94ccbb:eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lc3BhY2VfaWQiOjF9.4IekLH-N4vSEqKpCAKDfiExRTnKqATM0VkMWTxGMHK0',
      }
      const { data } = await this.Api.getUploadToken(
        '/api/v4/attachments/uptoken',
        gaoxinHeader,
        params,
      )
      const formData = new FormData()
      formData.append('file', file.file)
      formData.append('token', data.uptoken)
      formData.append('x:key', new Date().getTime())
      this.postUpload(formData, file)
    },
    async postUpload(formData, file) {
      const { data } = await this.Api.postUpload(formData)
      file.status = 'done'
      console.log('%c 🍤 data: ', 'font-size:20px;background-color: #42b983;color:#fff;', data)
    },
  },
}
</script>

<style scoped>
.title{
  font-size: 1rem;
}
</style>
