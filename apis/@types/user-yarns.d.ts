type PostUserYarnV1BodyType = {
  yarn_name: string;
  brand_name?: string;
  color?: string;
  needle_range_from?: number;
  needle_range_to?: number;
  hook_range_from?: number;
  hook_range_to?: number;
  weight?: string;
  note?: string;
  photo_ids?: string[];
};

type UserYarnV1ResponseData = {
  id: number;
  yarn_name: string;
  brand_name?: string;
  color?: string;
  needle_range?: [number, number];
  hook_range?: [number, number];
  weight?: string;
  note?: string;
  created_at: number;
  updated_at: number;
  photos?: PhotoV1ResponseData[];
};
