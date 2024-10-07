type PostUserV1BodyType = {
  username: string;
  email: string;
  state?: string;
  country?: string;
  birthday_year?: number;
  birthday_month?: number;
  birthday_day?: number;
  knitting_since?: number;
  bio?: string;
  avatar_url?: string;
  preferred_language?: string;
};

type UserV1ResponseData = {
  id: number;
  external_id?: string;
  username: string;
  email: string;
  location?: string;
  birthday?: string;
  knitting_since?: string;
  bio?: string;
  avatar_url?: string;
  preferred_language?: string;
  created_at: number;
  updated_at: number;
  deactivated_at?: number;
};
