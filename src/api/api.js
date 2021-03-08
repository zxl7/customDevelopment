import http from './http'
const gaoxinHseader = {
  Authorization:
    // 'd25adaf98146c4f32c127e6c094f6f672db695970692fc473a9e8e861b304f1a:eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lc3BhY2VfaWQiOjF9.plo6dlWfBGCS9kH8765wWR9aQo_-SyFQw5kRBBio9Y0',
    '05e21fb1092459fa2c1f36efcd9600f738fed8c57c92528f124f23629c94ccbb:eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lc3BhY2VfaWQiOjF9.4IekLH-N4vSEqKpCAKDfiExRTnKqATM0VkMWTxGMHK0',
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
