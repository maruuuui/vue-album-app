<script setup lang="ts">
import { ref, onMounted, type Ref } from "vue";

import Layout from "@/components/PageLayout.vue";
import AlbumCards from "@/components/AlbumCards.vue";
import type { Album } from "@/types";
import { getAlbumArray } from "@/util/albumApi";

const albumArray: Ref<Album[]> = ref([]);

async function fetch() {
  albumArray.value = await getAlbumArray();
}

onMounted(async () => {
  await fetch();
});
</script>

<template>
  <Layout>
    <AlbumCards :albumArray="albumArray" />
  </Layout>
</template>

<style scoped></style>
