type PostUserGaugeV1BodyType = {
  yarn_description?: string;
  yarn_id?: number;
  needle_size?: string;
  stitches?: number;
  rows?: number;
  note?: string;
  photo_ids?: string[];
};

type UserGaugeV1ResponseData = {
  id: number;
  yarn_description?: string;
  yarn?: YarnV1ResponseData;
  needle_size?: string;
  stitches?: number;
  rows?: number;
  note?: string;
  photos?: PhotoV1ResponseData[];
  created_at: number;
  updated_at: number;
};
