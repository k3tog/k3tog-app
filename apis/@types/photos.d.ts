type PhotoV1ResponseData = {
  id: number;
  photo_id: string;
  photo_key: string;
  signed_photo_url?: string;
  is_thumbnail: boolean;
  created_ts: number;
  type: string;
};

type PostPhotoV1BodyType = {
  category: string;
};
