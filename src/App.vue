<script setup lang="ts">
import { ref, onMounted, type Ref } from "vue";
import { Modal } from "bootstrap";

import Layout from "@/components/PageLayout.vue";
import AlbumCards from "@/components/AlbumCards.vue";
import type { Album } from "@/types";
import { getAlbumArray } from "@/util/albumApi";

const albumArray: Ref<Album[]> = ref([]);

async function fetch() {
  startLoading();
  albumArray.value = await getAlbumArray();
  stopLoading();
}

// CreateAlbumModal.vue で定義したモーダル
let createAlbumModal!: Modal;
// CreateAlbumModal.vue で定義したモーダルを開く関数
function openCreateAlbumModal() {
  createAlbumModal.show();
}
// CreateAlbumModal.vue で定義したモーダルを閉じる関数
function closeCreateAlbumModal() {
  createAlbumModal.hide();
}

// DeleteAlbumModalに表示する情報
const deleteTargetId: Ref<string> = ref("");
const deleteTargetTitle: Ref<string> = ref("");
// DeleteAlbumModal.vue で定義したモーダル(画像削除確認モーダル)
let deleteAlbumModal!: Modal;

// DeleteAlbumModal.vue で定義したモーダルを開く関数
function openDeleteAlbumModal(id: string, title: string) {
  deleteTargetId.value = id;
  deleteTargetTitle.value = title;
  deleteAlbumModal.show();
}
// DeleteAlbumModal.vue で定義したモーダルを閉じる関数
function closeDeleteAlbumModal() {
  deleteAlbumModal.hide();
}

// LoadingModal.vue で定義したモーダルを開く関数
let loadingModal!: Modal;

// LoadingModal.vue で定義したモーダルを閉じる関数
function startLoading() {
  loadingModal.show();
}
function stopLoading() {
  loadingModal.hide();
}

onMounted(async () => {
  // モーダルとしてコンテンツをアクティブにする
  // https://getbootstrap.jp/docs/5.0/components/modal/#methods
  const createAlbumModalElement = document.getElementById("createAlbumModal")!;
  createAlbumModal = new Modal(createAlbumModalElement, {
    keyboard: false,
  });
  const deleteAlbumModalElement = document.getElementById("deleteAlbumModal")!;
  deleteAlbumModal = new Modal(deleteAlbumModalElement, {
    keyboard: false,
  });
  const loadingModalElement = document.getElementById("loadingModal")!;
  loadingModal = new Modal(loadingModalElement, {
    keyboard: false,
  });

  // albumArrayを更新
  await fetch();
});
</script>

<template>
  <Layout
    :id="ref(deleteTargetId)"
    :title="ref(deleteTargetTitle)"
    :startLoading="startLoading"
    :stopLoading="stopLoading"
    :openCreateAlbumModal="openCreateAlbumModal"
    :closeCreateAlbumModal="closeCreateAlbumModal"
    :closeDeleteAlbumModal="closeDeleteAlbumModal"
  >
    <AlbumCards
      :albumArray="albumArray"
      :openDeleteAlbumModal="openDeleteAlbumModal"
      :startLoading="startLoading"
      :stopLoading="stopLoading"
    />
  </Layout>
</template>

<style scoped></style>
