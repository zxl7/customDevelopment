import http from './http'
const gaoxinHseader = {
  Authorization:
    'b01110629541b3eb51697db5a05dd2388aed11a58c81a75e9c08347bc30a09e6:eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lc3BhY2VfaWQiOjF9.wj9V0ZVOOzSPuRYztizJL_5w0u8aJKb05Z73tEV_HuY',
}
export default {
  // 附件上传Token
  getUploadToken(url, header, params) {
    return http.get(url, header, params)
  },
  // 附件上传
  postUpload(file) {
    return http.post(`https://up.qbox.me`, gaoxinHseader, file)
  },
  getRequestForm(ID) {
    return http.get(`/api/v4/forms/${ID}`, gaoxinHseader)
  },
}
