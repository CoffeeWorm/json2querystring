<template>
  <div class="m-json-formdata-transfer">
    <el-input
      class="json-input"
      type="textarea"
      :rows="6"
      placeholder="请输入json内容"
      v-model="jsonStr"
    />
    <div class="mid">
      <el-select v-model="options" palceholder="arrayFormat">
        <el-option value="indices">indices</el-option>
        <el-option value="brackets">brackets</el-option>
        <el-option value="repeat">repeat</el-option>
        <el-option value="comma">comma</el-option>
      </el-select>
      <el-button @click="trans2formData">&gt;&gt;转为formData</el-button>
      <el-button @click="trans2json">&lt;&lt;转为json</el-button>
    </div>
    <el-input
      class="formdata-input"
      type="textarea"
      :rows="6"
      placeholder="请输入formData"
      v-model="formDataStr"
    />
  </div>
</template>

<script>
import qs from 'qs';

export default {
  data: function () {
    return {
      jsonStr: '',
      formDataStr: '',
      options: 'brackets'
    };
  },
  methods: {
    trans2formData() {
      this.formDataStr = qs.stringify(JSON.parse(this.jsonStr), {
        arrayFormat: this.options
      });
    },
    trans2json() {
      this.jsonStr = JSON.stringify(qs.parse(this.formDataStr));
    }
  }
};
</script>

<style lang="less">
.m-json-formdata-transfer {
  display: flex;
  .json-input,
  .formdata-input {
    flex: 1;
  }
  .mid {
    flex: 0 0 50px;
    margin: 0 10px;
    .el-button {
      margin-top: 5px;
    }
  }
}
</style>
