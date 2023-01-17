<script lang="ts" setup>
import Header from "@/components/HeaderComponent.vue";
import CreateAlbumModal from "@/components/CreateAlbumModal.vue";
import DeleteAlbumModal from "@/components/DeleteAlbumModal.vue";
import LoadingModal from "@/components/LoadingModal.vue";
import type { Ref } from "vue";


interface Props {
  id: Ref<string>;
  title: Ref<string>;
  startLoading: () => void;
  stopLoading: () => void;
  openCreateAlbumModal: () => void;
  closeCreateAlbumModal: () => void;
  closeDeleteAlbumModal: () => void;
}

const props = defineProps<Props>();
</script>

<template>
  <Header :openModal="props.openCreateAlbumModal"></Header>
  <slot></slot>
  <CreateAlbumModal
    :startLoading="props.startLoading"
    :stopLoading="props.stopLoading"
    :close-modal="props.closeCreateAlbumModal"
  />
  <DeleteAlbumModal
    :id="props.id"
    :title="props.title"
    :startLoading="props.startLoading"
    :stopLoading="props.stopLoading"
    :close-modal="props.closeDeleteAlbumModal"
  />
  <LoadingModal />
</template>
