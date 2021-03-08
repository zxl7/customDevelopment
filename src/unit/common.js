/* eslint-disable no-array-constructor */
export default {
  // 代办人信息，生成二维数组
  setInfo(arr) {
    let newArr = {
      original: [],
      infoList: [],
    }
    newArr.infoList = []
    arr.forEach((field) => {
      field.value = ''
      field.entries = []
      field.error = false
      switch (field.identity_key) {
        case 'agent_name':
          newArr.infoList.push(field)
          break
        case 'agent_phone':
          newArr.infoList.push(field)
          break
        case 'agent_id_card_number':
          newArr.infoList.push(field)
          break
        default:
          newArr.original.push(field)
          break
      }
    })
    return newArr
  },

  // 获取缓存
  getLocalStorage(name) {
    return JSON.parse(localStorage.getItem(name))
  },
}
