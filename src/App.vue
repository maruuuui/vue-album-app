<script setup lang="ts">
import { ref, onMounted } from "vue";

import Layout from "@/components/PageLayout.vue";
import AlbumCards from "@/components/AlbumCards.vue";

// リアクティブな状態
const count = ref(0);

// 状態を変更し、更新をトリガーする関数。
function increment() {
  count.value++;
}

// ライフサイクルフック
onMounted(() => {
  console.log(`The initial count is ${count.value}.`);
});
</script>

<template>
  <Layout>
    <button @click="increment">Count is: {{ count }}</button>
    <AlbumCards> </AlbumCards>
  </Layout>
</template>

<style scoped></style>
