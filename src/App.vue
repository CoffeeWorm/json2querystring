<template>
  <div class="app-container">
    <div
      class="transfer-container"
      v-for="({ id, name, value }, idx) in list"
      :key="id"
    >
      <div class="transfer-container__title">
        #{{ idx + 1 }} ({{ name || id }})
      </div>
      <QsTransfer :value="value" @input="edit(id, { id, name, value: $event })">
        <template #operator>
          <ElButton class="transfer-container__add-btn" @click="add(id)">
            <ElIcon><Plus /></ElIcon> Add Behind
          </ElButton>
          <ElPopconfirm
            v-if="list.length - 1"
            width="300"
            :title="`Are you sure to delete ${name || id}?`"
            @confirm="remove(id)"
          >
            <template #reference>
              <div class="transfer-container__close-btn" type="warning">
                <ElIcon><Close /></ElIcon>
              </div>
            </template>
          </ElPopconfirm>
        </template>
      </QsTransfer>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Plus, Close } from '@element-plus/icons-vue';
import { ElPopconfirm, ElButton, ElIcon } from 'element-plus';
import QsTransfer from '@/components/qs-transfer/index.vue';
import useList from '@/store/list';

const { list, edit, add, remove } = useList();
</script>
<style lang="less" src="./App.less"></style>
