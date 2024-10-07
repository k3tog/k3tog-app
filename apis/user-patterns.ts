import { apiClient } from './instance/axios';

/**
 * @name Post User Pattern V1
 * @description Create a new pattern for the user
 * @method POST
 * @url /v1/users/{username}/patterns/
 * @param username string
 * @param body PostUserPatternV1BodyType
 * @returns PostUserPatternV1ResponseData
 */
export const createUserPatternV1Api = async ({
  username,
  body,
}: {
  username: string;
  body: PostUserPatternV1BodyType;
}) => {
  const result: ApiResponse<UserPatternV1ResponseData> = {};
  try {
    const { data } = await apiClient.post(`/v1/users/${username}/patterns/`, body);
    result.data = data;
  } catch (error) {
    result.error = error as ErrorResponse;
  }
  return result;
};

/**
 * @name Get User Patterns V1
 * @description Get all patterns for the user
 * @method GET
 * @url /v1/users/{username}/patterns/
 * @param username string
 * @returns GetUserPatternsV1ResponseData
 */
export const getUserPatternsV1Api = async ({ username }: { username: string }) => {
  const result: ApiResponse<UserPatternV1ResponseData[]> = {};
  try {
    const { data } = await apiClient.get(`/v1/users/${username}/patterns/`);
    result.data = data;
  } catch (error) {
    result.error = error as ErrorResponse;
  }
  return result;
};

/**
 * @name Get User Pattern V1
 * @description Get a single pattern for the user
 * @method GET
 * @url /v1/users/{username}/patterns/{pattern_id}/
 * @param username string
 * @param patternId number
 * @returns UserPatternV1ResponseData
 */
export const getUserPatternV1Api = async ({ username, patternId }: { username: string; patternId: number }) => {
  const result: ApiResponse<UserPatternV1ResponseData> = {};
  try {
    const { data } = await apiClient.get(`/v1/users/${username}/patterns/${patternId}/`);
    result.data = data;
  } catch (error) {
    result.error = error as ErrorResponse;
  }
  return result;
};

/**
 * @name Delete User Pattern V1
 * @description Delete a single pattern for the user
 * @method DELETE
 * @url /v1/users/{username}/patterns/{pattern_id}/
 * @param username string
 * @param patternId number
 * @returns UserPatternV1ResponseData
 */
export const deleteUserPatternV1Api = async ({ username, patternId }: { username: string; patternId: number }) => {
  const result: ApiResponse<UserPatternV1ResponseData> = {};
  try {
    const { data } = await apiClient.delete(`/v1/users/${username}/patterns/${patternId}/`);
    result.data = data;
  } catch (error) {
    result.error = error as ErrorResponse;
  }
};

/**
 * @name Upload User Pattern Document V1
 * @description Upload a document for a pattern for the user
 * @method POST
 * @url /v1/users/{username}/patterns/upload
 * @param username string
 * @param file File
 * @returns PatternDocumentV1Type
 */
export const uploadUserPatternDocumentV1Api = async ({ username, file }: { username: string; file: File }) => {
  const result: ApiResponse<PatternDocumentV1Type> = {};
  try {
    const { data } = await apiClient.post(`/v1/users/${username}/patterns/upload`, file);
    result.data = data;
  } catch (error) {
    result.error = error as ErrorResponse;
  }
  return result;
};
