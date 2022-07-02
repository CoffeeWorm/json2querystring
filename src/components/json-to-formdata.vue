<template>
  <div class="m-json-formdata-transfer">
    <div class="json-input">
      <Input
        type="textarea"
        :rows="6"
        placeholder="请输入json内容"
        v-model="jsonStr"
      />
      <Button type="primary" size="small" @click="handler(format)">
        format
      </Button>
    </div>
    <div class="mid">
      <Select v-model="value" palceholder="arrayFormat">
        <Option v-for="value in options" :key="value" :value="value">
          {{ value }}
        </Option>
      </Select>
      <Button class="button" type="primary" @click="handler(trans2formData)">
        &gt;&gt;转为formData
      </Button>
      <Button class="button" type="primary" @click="handler(trans2json)">
        &lt;&lt;转为json
      </Button>
    </div>
    <Input
      class="formdata-input"
      type="textarea"
      :rows="6"
      placeholder="请输入formData"
      v-model="formDataStr"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import prettier from 'prettier';
import babelParser from 'prettier/parser-babel';
import { Button, Select, Option, Input, Message } from 'element-ui';
import qs, { IStringifyOptions } from 'qs';

type StringifyOptions = Exclude<IStringifyOptions['arrayFormat'], undefined>;

export default defineComponent({
  components: { Button, Select, Option, Input },
  setup() {
    const jsonStr = ref('');
    const formDataStr = ref('');
    const value = ref<StringifyOptions>('brackets');
    const options: StringifyOptions[] = [
      'indices',
      'brackets',
      'repeat',
      'comma'
    ];

    const handler = (fn: () => void) => {
      try {
        fn();
      } catch (e) {
        Message.error('出错啦！');
      }
    };
    const format = () => {
      jsonStr.value = prettier.format(jsonStr.value, {
        parser: 'json',
        plugins: [babelParser]
      });
    };
    const trans2formData = () => {
      format();
      formDataStr.value = qs.stringify(JSON.parse(jsonStr.value), {
        arrayFormat: value.value,
        encode: false
      });
    };
    const trans2json = () => {
      jsonStr.value = JSON.stringify(qs.parse(formDataStr.value));
      format();
    };

    return {
      value,
      options,
      jsonStr,
      formDataStr,
      handler,
      format,
      trans2formData,
      trans2json
    };
  }
});
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
    .button {
      margin-top: 5px;
      margin-left: 0;
      width: 100%;
    }
  }
}
</style>
