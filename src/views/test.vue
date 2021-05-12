<template>
  <div class="legal">
    <Fields
      :fields="fields"
      :entries="entries"
    />
  </div>
</template>
<script>
import { Fields } from '@byzanteam/slp-fields'

export default {
  components: {
    Fields,
  },
  data() {
    return {
      fields: [],
      FORM_ID: 729,
      entries: [],
      fileParams: {},
    }
  },
  mounted() {
    this.requestForm()
  },
  methods: {
    async requestForm() {
      const { data } = await this.Api.getRequestForm(this.FORM_ID)
      this.fields = data.fields
      console.log(
        '%c 🍬 this.fields: ',
        'font-size:20px;background-color: #33A5FF;color:#fff;',
        this.fields,
      )
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
