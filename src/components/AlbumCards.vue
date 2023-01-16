<script lang="ts" setup>
import AlbumCard from "@/components/AlbumCard.vue";
import type { Album } from "@/types";
interface Props {
  albumArray: Album[];
}

const props = defineProps<Props>();
</script>
<template>
  <div class="container">
    <div class="row">
      <div
        class="col-xs-12 col-md-4 col-lg-3"
        v-for="album in albumArray"
        :key="album.id"
      >
        <AlbumCard :album="album" />
        <!-- <AlbumCard
      :id="item.id"
      :title="item.title"
      :createdAt="item.createdAt"
      :memo="item.memo"
      :imagePath="item.imagePath"
    /> -->
      </div>
    </div>
  </div>
</template>
