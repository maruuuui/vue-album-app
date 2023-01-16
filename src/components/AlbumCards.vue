<script lang="ts" setup>
import AlbumCard from "@/components/AlbumCard.vue";

const items: {
  id: string;
  title: string;
  createdAt: string;
  memo: string;
  imagePath: string;
}[] = [
  {
    id: "hoge",
    title: "huga",
    createdAt: "createdAt",
    memo: "memo",
    imagePath: "imagePath",
  },
];
</script>
<template>
  <div v-for="item in items" :key="item.id">
    <AlbumCard
      :id="item.id"
      :title="item.title"
      :createdAt="item.createdAt"
      :memo="item.memo"
      :imagePath="item.imagePath"
    />
  </div>
</template>
