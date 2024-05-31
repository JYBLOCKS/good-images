export interface Picture {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

export async function getAllPictures(): Promise<Picture[]> {
  const response = await fetch("https://picsum.photos/v2/list?limit=30");
  const data = response.json();
  return data;
}
