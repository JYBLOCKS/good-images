export interface Picture {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

export interface ImageState {
  id: number;
  url: string;
  selected: boolean;
}
