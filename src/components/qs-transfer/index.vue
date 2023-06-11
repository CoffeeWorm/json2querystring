<template>
  <div class="m-transfer">
    <div class="m-transfer__container">
      <ElInput
        class="m-transfer__textarea"
        type="textarea"
        placeholder="Input query string."
        :model-value="queryString"
        :rows="DEFAULT_ROWS"
        @input="handleQsInput"
      />
      <ElButtonGroup>
        <ElButton type="primary" size="small" @click="handleClearQueryString">
          Clear
        </ElButton>
      </ElButtonGroup>
    </div>
    <div class="m-transfer__container m-transfer__container--mid">
      <ElSelect
        class="m-transfer__format-options"
        placeholder="arrayFormat"
        :model-value="type"
        @change="handleTypeChange"
      >
        <ElOption v-for="value in options" :key="value" :value="value">
          {{ value }}
        </ElOption>
      </ElSelect>
      <ElButton
        class="m-transfer__format-button"
        type="primary"
        @click="handler(trans2qs)"
      >
        &lt;&lt; To URLEncode
      </ElButton>
      <div></div>
      <ElButton
        class="m-transfer__format-button"
        type="primary"
        @click="handler(qs2json)"
      >
        &gt;&gt; To JSON
      </ElButton>
      <div></div>
      <ElPopconfirm
        width="300"
        title="Are you sure to reset?"
        @confirm="handleReset"
      >
        <template #reference>
          <ElButton class="m-transfer__format-button" type="warning">
            Reset
          </ElButton>
        </template>
      </ElPopconfirm>
      <div></div>
      <slot name="operator"></slot>
    </div>
    <div class="m-transfer__container">
      <ElInput
        class="m-transfer__textarea"
        type="textarea"
        :rows="DEFAULT_ROWS"
        placeholder="Input JSON string."
        :model-value="JSONStr"
        @input="handleJSONInput($event)"
      />
      <ElButtonGroup>
        <ElButton type="primary" size="small" @click="handler(format)">
          Format
        </ElButton>
        <ElButton type="primary" size="small" @click="handleClearJSONStr">
          Clear
        </ElButton>
      </ElButtonGroup>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import prettier from 'prettier';
import babelParser from 'prettier/parser-babel';
import {
  ElPopconfirm,
  ElButton,
  ElButtonGroup,
  ElSelect,
  ElOption,
  ElInput,
  ElMessage
} from 'element-plus';
import qsUtil from 'query-string';
import type { FormatOptions } from './interface';

const options: FormatOptions[] = ['none', 'index', 'bracket', 'comma'];
const props = defineProps<{
  value?: { json: string; qs: string; type: FormatOptions };
}>();
const emit = defineEmits(['input']);

const DEFAULT_ARRAY_FORMAT = 'none';
const DEFAULT_ROWS = 15;
const _JSONStr = ref('');
const _queryString = ref('');
const _type = ref<FormatOptions>(DEFAULT_ARRAY_FORMAT);

const JSONStr = computed(() => props.value?.json || _JSONStr.value);
const queryString = computed(() => props.value?.qs || _queryString.value);
const type = computed(() => {
  const value = props.value?.type || _type.value;
  return options.includes(value) ? value : DEFAULT_ARRAY_FORMAT;
});

const handleClearJSONStr = () => {
  _JSONStr.value = '';
  emit('input', { json: '', qs: queryString.value, type: type.value });
};
const handleClearQueryString = () => {
  _queryString.value = '';
  emit('input', { json: JSONStr.value, qs: '', type: type.value });
};
const handleReset = () => {
  _queryString.value = '';
  _JSONStr.value = '';
  emit('input', { json: '', qs: '', type: options[1] });
};
const format = () => {
  _JSONStr.value = prettier.format(_JSONStr.value, {
    parser: 'json',
    plugins: [babelParser]
  });
  emit('input', {
    json: _JSONStr.value,
    qs: queryString.value,
    type: type.value
  });
};
const trans2qs = () => {
  format();
  _queryString.value = qsUtil.stringify(JSON.parse(JSONStr.value), {
    arrayFormat: type.value,
    encode: false
  });
  emit('input', {
    json: JSONStr.value,
    qs: _queryString.value,
    type: type.value
  });
};
const qs2json = () => {
  let queryStr = queryString.value;
  let regRes = /^(https?:\/\/|\/\/)(.*)\?(.*)$/.exec(queryStr);
  regRes && (queryStr = regRes[3]);
  const options = { arrayFormat: type.value, decode: true };
  _JSONStr.value = JSON.stringify(qsUtil.parse(queryStr, options));
  format();
  emit('input', { json: _JSONStr.value, qs: queryStr, type: type.value });
};
const handleQsInput = (value: string) => {
  _queryString.value = value;
  emit('input', {
    json: JSONStr.value,
    qs: _queryString.value,
    type: type.value
  });
};
const handleJSONInput = (value: string) => {
  _JSONStr.value = value;
  emit('input', {
    json: _JSONStr.value,
    qs: queryString.value,
    type: type.value
  });
};
const handleTypeChange = (value: FormatOptions) => {
  _type.value = value;
  emit('input', {
    json: JSONStr.value,
    qs: queryString.value,
    type: _type.value
  });
};
const handler = (fn: () => void) => {
  try {
    fn();
  } catch (e: any) {
    ElMessage.error({ message: e?.message || 'There is something wrong!' });
  }
};
</script>

<style lang="less" src="./index.less"></style>
