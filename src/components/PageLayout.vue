<script lang="ts" setup>
import Header from "@/components/HeaderComponent.vue";
import CreateAlbumModal from "@/components/CreateAlbumModal.vue";
import DeleteAlbumModal from "@/components/DeleteAlbumModal.vue";
import type { Ref } from "vue";

interface Props {
  id: Ref<string>;
  title: Ref<string>;
}

const props = defineProps<Props>();
</script>

<template>
  <Header></Header>
  <slot></slot>
  <CreateAlbumModal />
  <DeleteAlbumModal :id="props.id" :title="props.title" />
</template>
