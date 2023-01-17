<script lang="ts" setup>
import { deleteAlbum } from "@/util/albumApi";
import type { Ref } from "vue";

interface Props {
  id: Ref<string>;
  title: Ref<string>;
}

const props = defineProps<Props>();

async function _deleteAlbum() {
  console.log(props.id, props.title);

  await deleteAlbum(props.id.value);
}
</script>

<template>
  <div
    class="modal fade"
    id="deleteAlbumModal"
    tabindex="-1"
    aria-labelledby="deleteAlbumModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="deleteAlbumModalLabel">確認</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">{{ props.title }}を削除しますか？</div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" @click="_deleteAlbum">
            削除する
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
