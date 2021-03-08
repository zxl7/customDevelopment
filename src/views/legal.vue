<template>
  <div class="legal">
    <Fields class="fields" :fields="fields" :FORM_ID="FORM_ID" />
  </div>
</template>
<script>
import Fields from '@/components/fields'

export default {
  components: {
    Fields,
  },
  data() {
    return {
      fields: {},
      FORM_ID: 5,
      USER: this.common.getLocalStorage('USER'),
    }
  },
  mounted() {
    this.requestForm()
  },
  methods: {
    async requestForm() {
      const { data } = await this.Api.getRequestForm(this.FORM_ID)
      this.fields = this.common.setInfo(data.fields)
    },
  },
}
</script>
<style lang="scss">
.legal {
  width: 100%;
  height: 100%;
  background: #e5e5e5;
  padding-top: 1px;
  overflow: scroll;
}
</style>
