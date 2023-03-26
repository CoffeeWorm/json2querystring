<template>
  <div class="app-container">
    <draggable
      class="transfer-container"
      :disabled="false"
      ghost-class="transfer-container__ghost"
      item-key="id"
      handle=".transfer-container__handle-btn"
      :list="list"
      @start="dragging = true"
      @end="dragging = false"
    >
      <template #item="{ element: { name, id, value } }">
        <div class="transfer-item">
          <div class="transfer-container__title">#{{ name || id }}</div>
          <QsTransfer
            :value="value"
            @input="edit(id, { id, name, value: $event })"
          >
            <template #operator>
              <ElButton class="transfer-container__add-btn" @click="add(id)">
                <ElIcon><Plus /></ElIcon> Add Behind
              </ElButton>
              <div></div>
              <ElButton
                v-if="list.length > 1"
                class="transfer-container__handle-btn"
                @click="add(id)"
              >
                <ElIcon><Sort /></ElIcon>
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
      </template>
    </draggable>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Plus, Close, Sort } from '@element-plus/icons-vue';
import draggable from 'vuedraggable';
import { ElPopconfirm, ElButton, ElIcon } from 'element-plus';
import QsTransfer from '@/components/qs-transfer/index.vue';
import useList from '@/store/list';

const dragging = ref(false);

const { list, edit, add, remove } = useList();
</script>
<style lang="less" src="./App.less"></style>
