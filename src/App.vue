<script setup lang="ts">
import { ref, onMounted, type Ref } from "vue";
import { Modal } from "bootstrap";

import Layout from "@/components/PageLayout.vue";
import AlbumCards from "@/components/AlbumCards.vue";
import type { Album } from "@/types";
import { getAlbumArray } from "@/util/albumApi";

const albumArray: Ref<Album[]> = ref([]);

async function fetch() {
  albumArray.value = await getAlbumArray();
}

// DeleteAlbumModalに表示する情報
const deleteTargetId: Ref<string> = ref("");
const deleteTargetTitle: Ref<string> = ref("");
// DeleteAlbumModal.vue で定義したモーダル
let deleteAlbumModal!: Modal;

// DeleteAlbumModal.vue で定義したモーダルを開く
function openDeleteAlbumModal(id: string, title: string) {
  deleteTargetId.value = id;
  deleteTargetTitle.value = title;
  deleteAlbumModal.show();
}

onMounted(async () => {
  await fetch();

  // モーダルとしてコンテンツをアクティブにする
  // https://getbootstrap.jp/docs/5.0/components/modal/#methods
  const modalElement = document.getElementById("deleteAlbumModal")!;
  deleteAlbumModal = new Modal(modalElement, {
    keyboard: false,
  });
});
</script>

<template>
  <Layout :id="ref(deleteTargetId)" :title="ref(deleteTargetTitle)">
    <AlbumCards
      :albumArray="albumArray"
      :openDeleteAlbumModal="openDeleteAlbumModal"
    />
  </Layout>
</template>

<style scoped></style>
