<script lang="ts" setup>
import AlbumCard from "@/components/AlbumCard.vue";
import type { Album } from "@/types";
interface Props {
  albumArray: Album[];
  openDeleteAlbumModal: (id: string, title: string) => void;
}

const props = defineProps<Props>();
</script>
<template>
  <div class="container">
    <div class="row">
      <div
        class="col-xs-12 col-md-4 col-lg-3"
        v-for="album in props.albumArray"
        :key="album.id"
      >
        <AlbumCard
          :album="album"
          :openDeleteAlbumModal="openDeleteAlbumModal"
        />
      </div>
    </div>
  </div>
</template>
