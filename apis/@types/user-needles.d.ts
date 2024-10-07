type PostUserNeedleV1BodyType = {
  name: string;
  size?: string;
  note?: string;
  photo_ids?: string[];
};

type UserNeedleV1ResponseData = {
  id: number;
  name: string;
  size?: string;
  note?: string;
  created_at: number;
  updated_at: number;
  photos?: PhotoV1ResponseData[];
};
