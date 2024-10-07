import { apiClient } from './instance/axios';

/**
 * @name Upload Photo V1
 * @description Upload a photo for the user
 * @method POST
 * @url /v1/photos/
 * @param body PostPhotoV1BodyType
 * @returns PhotoV1ResponseData
 */
export const uploadPhotoV1Api = async ({ username, body }: { username: string; body: PostPhotoV1BodyType }) => {
  const result: ApiResponse<PhotoV1ResponseData> = {};
  try {
    const { data } = await apiClient.post(`/v1/users/${username}/photos/`, body);
    result.data = data;
  } catch (error) {
    result.error = error as ErrorResponse;
  }
  return result;
};
