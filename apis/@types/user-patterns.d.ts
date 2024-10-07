type PostUserPatternV1BodyType = {
  name: string;
  author?: string;
  description?: string;
  pattern_document?: string;
};

type PatternDocumentV1Type = {
  id: number;
  document_id: string;
  document_key: string;
  filename_display: string;
  created_ts: number;
};

type UserPatternV1ResponseData = {
  id: number;
  name: string;
  author: string;
  description: string;
  pattern_document: PatternDocumentV1Type[];
  created_at: number;
  updated_at: number;
};
