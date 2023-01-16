<script setup lang="ts">
import { ref, onMounted } from "vue";

import Layout from "@/components/PageLayout.vue";
import AlbumCards from "@/components/AlbumCards.vue";
import type {Album} from "@/types";

const albumArray: Album[] = [
  {
    id: "bbbb",
    title: "bbbb",
    createdAt: "createdAt",
    memo: "memo",
    imagePath: "imagePath",
  },
  {
    id: "aaaa",
    title: "aaaa",
    createdAt: "createdAt",
    memo: "memo",
    imagePath: "imagePath",
  },
];

</script>

<template>
  <Layout>
    <AlbumCards :albumArray="albumArray"/>
  </Layout>
</template>

<style scoped></style>
