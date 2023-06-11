import { ref } from 'vue';
import { defineStore } from 'pinia';
import { ElMessageBox, ElMessage } from 'element-plus';
import atc from '@wei-tools/atc';
import type { FormatOptions } from '@/components/qs-transfer/interface';

export interface StoreItem {
  id: number;
  name: string;
  value?: { json: string; qs: string; type: FormatOptions };
}

export default defineStore(
  'list',
  () => {
    const list = ref<StoreItem[]>([{ id: +new Date(), name: '' }]);

    const add = async (cId: number) => {
      const [e, res = { value: '' }] = await atc(
        ElMessageBox.prompt('Please input the name of new transfer.', 'Tip', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          inputPlaceholder: 'Use timestamp as default.'
        })
      );

      if (e) return;

      const curIndex = list.value.findIndex(({ id }) => id === cId);
      const newItem = { id: +new Date(), name: res.value };
      list.value.splice(curIndex + 1, 0, newItem);
    };

    const remove = (tId: number) => {
      if (list.value.length === 1)
        return ElMessage.warning({ message: 'At least one exists.' });
      const index = list.value.findIndex(({ id }) => id === tId);
      list.value.splice(index, 1);
    };
    const edit = (tId: number, value: StoreItem) => {
      const index = list.value.findIndex(({ id }) => id === tId);
      list.value.splice(index, 1, value);
    };
    return { list, edit, add, remove };
  },
  { persist: true }
);
