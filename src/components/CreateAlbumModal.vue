<script lang="ts" setup>
import { createAlbum } from "@/util/albumApi";
import { getContentType } from "@/util/image";

interface Props {
  startLoading: () => void;
  stopLoading: () => void;
  closeModal: () => void;
  fetchAlbumArray: () => Promise<void>;
}

const props = defineProps<Props>();

let title = "";
let memo = "";
let imageFileName = "";
let base64Image = "";
let imageContentType = "";

// type=fileのinput要素
function onfileInputChange() {
  const uploadImageElement: HTMLFormElement = document.getElementById(
    "uploadImage"
  ) as HTMLFormElement;

  const file = uploadImageElement.files[0];
  const reader = new FileReader();
  reader.onload = (event) => {
    base64Image = event.target!.result as string;
    imageContentType = getContentType(base64Image);
    imageFileName = file.name;
  };
  reader.readAsDataURL(file);
}

//
async function post() {
  if (validate()) {
    props.startLoading();
    try {
      await createAlbum(
        title,
        memo,
        base64Image,
        imageContentType,
        imageFileName
      );
      props.stopLoading();
      props.closeModal();
      await props.fetchAlbumArray();
    } catch (error) {
      console.log(error);
      props.stopLoading();
    }
  }
}

// タイトルや画像ファイルが正しく設定されていなかったらfalse、それ以外はtrueを返す
function validate() {
  if (title === "") {
    return false;
  }
  if (base64Image === "" || imageContentType === "" || imageFileName === "") {
    return false;
  }
  return true;
}
</script>

<template>
  <div
    class="modal fade"
    id="createAlbumModal"
    tabindex="-1"
    aria-labelledby="createAlbumModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="createAlbumModalLabel">Modal title</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="titleFormControlInput" class="form-label"
              >タイトル</label
            >
            <input
              type="text"
              class="form-control"
              id="titleFormControlInput"
              v-model="title"
            />
          </div>
          <div class="mb-3">
            <label for="memoFormControlTextarea" class="form-label">備考</label>
            <textarea
              class="form-control"
              id="memoFormControlTextarea"
              rows="3"
              v-model="memo"
            ></textarea>
          </div>

          <div class="mb-3">
            <label for="uploadImage" class="form-label">アップロード画像</label>
            <input
              type="file"
              class="form-control"
              id="uploadImage"
              accept="image/*"
              @change="onfileInputChange"
            />
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" @click="post">
            新規作成
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
