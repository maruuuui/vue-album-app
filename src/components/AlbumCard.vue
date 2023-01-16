<script lang="ts" setup>
import type {Album} from "@/types";
interface Props {
  album: Album
}

const props = defineProps<Props>()

console.log(props.album.id);
</script>
<template>
  <div class="card">
  <img :src=props.album.imagePath class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">id:{{ props.album.id }} title:{{ props.album.title }}</h5>
    <h6 class="card-subtitle mb-2 text-muted">登録日時:{{props.album.createdAt}}</h6>
    <p class="card-text">{{ props.album.memo }}</p>
    <a href="#" class="btn btn-primary">削除する</a>
  </div>
</div>
</template>
