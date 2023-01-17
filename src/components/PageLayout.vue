<script lang="ts" setup>
import Header from "@/components/HeaderComponent.vue";
import CreateAlbumModal from "@/components/CreateAlbumModal.vue";
</script>

<template>
  <Header></Header>
  <slot></slot>
  <CreateAlbumModal />
</template>
