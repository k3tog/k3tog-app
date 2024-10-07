type PostUserPatternV1BodyType = {
  name: string;
  author?: string;
  description?: string;
  pattern_document?: string;
};

type PatternDocumentType = {
  id: number;
  document_id: string;
  document_key: string;
  filename_display: string;
  created_ts: number;
};

type PostUserPatternV1ResponseData = {
  id: number;
  name: string;
  author: string;
  description: string;
  pattern_document: PatternDocumentType[];
  created_at: number;
  updated_at: number;
};
