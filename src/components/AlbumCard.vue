<script lang="ts" setup>
const props = defineProps({
  id: String,
  title: String,
  createdAt: String,
  memo: String,
  imagePath: String,
});

console.log(props.id);
</script>
<template>
  card id:{{ props.id }} title:{{ props.title }} createdAt:{{
    props.createdAt
  }}
  memo:{{ props.memo }} imagePath:{{ props.imagePath }}
  <slot></slot>
</template>
