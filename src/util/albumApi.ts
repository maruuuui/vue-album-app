import axios from "axios";
import type { Album } from "@/types";

// デプロイ時にはawsのurlに差し替える
const url =
  typeof import.meta.env.VITE_BACKEND_HOST == "string"
    ? import.meta.env.VITE_BACKEND_HOST
    : "http://localhost:8000";
const requestHeader = {
  "Content-Type": "application/json",
};

type GetAlbumArrayResponse = {
  id: string;
  title: string;
  created_at: string;
  memo: string;
  image_path: string;
};

export async function getAlbumArray() {
  try {
    const res = await axios.get<GetAlbumArrayResponse[]>(url);
    if (res.status !== 200) {
      throw Error("Albumの取得に失敗しました");
    }

    const items = res.data;
    const albumDataArray: Album[] = [];
    for (const item of items) {
      albumDataArray.push({
        id: item.id,
        title: item.title,
        createdAt: item.created_at,
        memo: item.memo,
        imagePath: item.image_path,
      });
    }

    return albumDataArray;
  } catch (err) {
    console.log(err);
    throw Error("Albumの取得に失敗しました");
  }
}

export async function createAlbum(
  title: string,
  memo: string,
  base64Image: string,
  contentType: string,
  fileName: string
) {
  console.log(
    `createAlbum title:${title},memo:${memo},fileName:${fileName},base64Image:${base64Image}`
  );
  try {
    const res = await axios.post(
      url,
      {
        title,
        memo,
        image: base64Image,
        type: contentType,
        file_name: fileName,
      },
      { headers: requestHeader }
    );
    if (res.status !== 200) {
      throw Error("Albumの作成に失敗しました");
    }

    return res;
  } catch (err) {
    console.log(err);
    throw Error("Albumの作成に失敗しました");
  }
}

export async function deleteAlbum(id: string) {
  console.log(`deleteAlbum id:${id}`);
  try {
    const res = await axios.delete(`${url}/${id}`, { headers: requestHeader });
    if (res.status !== 200) {
      throw Error("Albumの削除に失敗しました");
    }

    return res;
  } catch (err) {
    console.log(err);
    throw Error("Albumの削除に失敗しました");
  }
}
