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
  const result: ApiResponse<PostUserPatternV1ResponseData> = {};
  try {
    const { data } = await apiClient.post(`/v1/users/${username}/patterns/`, body);
    result.data = data;
  } catch (error) {
    result.error = error as ErrorResponse;
  }
  return result;
};
