// base64変換された画像( data:image/png;base64,iVBORw0K... ) から image/pngの部分を切り出す
export function getContentType(base64Image: string): string {
  const splitResult = base64Image.split(/[:;]/);

  return splitResult[1];
}
