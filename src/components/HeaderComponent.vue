<script lang="ts" setup>
import { Modal } from "bootstrap";
import { onMounted } from "vue";
interface Props {
  openModal: () => void;
}

const props = defineProps<Props>();
</script>

<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <span class="navbar-brand mb-0 h1">Albumアプリ</span>
      <button
        type="button"
        class="btn btn-success"
        data-bs-toggle="modal"
        data-bs-target="#createAlbumModal"
        @click="props.openModal"
      >
        新規作成
      </button>
    </div>
  </nav>
</template>
