import http from './http'

export default {
  // 附件上传Token
  getUploadToken(url, header, params) {
    return http.get(url, header, params)
  },
  // 附件上传
  postUpload(file) {
    return http.post(`https://up.qbox.me`, "", file)
  },
  getRequestForm(ID) {
    return http.get(`/api/v4/forms/${ID}`, "")
  },
}
