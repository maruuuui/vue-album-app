<script lang="ts" setup>
import Header from "@/components/HeaderComponent.vue";

interface Props {
  openCreateAlbumModal: () => void;
}

const props = defineProps<Props>();
</script>

<template>
  <Header :openModal="props.openCreateAlbumModal"></Header>
  <slot></slot>
</template>
