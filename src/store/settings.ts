import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { StringifyOptions } from './list';

export default defineStore(
  'settings',
  () => {
    const quickOperation = ref(false);
    const defaultFormatType = ref<StringifyOptions>('brackets');
    return { quickOperation, defaultFormatType };
  },
  { persist: true }
);
