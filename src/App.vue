<template>
  <Json2formdata />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Json2formdata from '@/components/json-to-formdata.vue';

export default defineComponent({
  components: { Json2formdata }
});
</script>
