<script lang="ts" setup>
import { Modal } from "bootstrap";
import { onMounted } from "vue";

// CreateAlbumModal.vue で定義したモーダル
let createAlbumModal!: Modal;

onMounted(() => {
  // モーダルとしてコンテンツをアクティブにする
  // https://getbootstrap.jp/docs/5.0/components/modal/#methods
  const modalElement = document.getElementById("createAlbumModal")!;
  createAlbumModal = new Modal(modalElement, {
    keyboard: false,
  });
});

// CreateAlbumModal.vue で定義したモーダルを開く
function openModal() {
  createAlbumModal.show();
}
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
        @click="openModal"
      >
        新規作成
      </button>
    </div>
  </nav>
</template>
