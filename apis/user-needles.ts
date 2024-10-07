import { apiClient } from './instance/axios';

/**
 * @name Create User Needle V1
 * @description Create a new needle for the user
 * @method POST
 * @url /v1/users/{username}/needles/
 * @param username string
 * @param body PostUserNeedleV1BodyType
 * @returns UserNeedleV1ResponseData
 */
export const createUserNeedleV1Api = async ({
  username,
  body,
}: {
  username: string;
  body: PostUserNeedleV1BodyType;
}) => {
  const result: ApiResponse<UserNeedleV1ResponseData> = {};
  try {
    const { data } = await apiClient.post(`/v1/users/${username}/needles/`, body);
    result.data = data;
  } catch (error) {
    result.error = error as ErrorResponse;
  }
  return result;
};

/**
 * @name Get User Needles V1
 * @description Get all needles for the user
 * @method GET
 * @url /v1/users/{username}/needles/
 * @param username string
 * @returns GetUserNeedlesV1ResponseData
 */
export const getUserNeedlesV1Api = async ({ username }: { username: string }) => {
  const result: ApiResponse<UserNeedleV1ResponseData[]> = {};
  try {
    const { data } = await apiClient.get(`/v1/users/${username}/needles/`);
    result.data = data;
  } catch (error) {
    result.error = error as ErrorResponse;
  }
  return result;
};

/**
 * @name Get User Needle V1
 * @description Get a single needle for the user
 * @method GET
 * @url /v1/users/{username}/needles/{needle_id}/
 * @param username string
 * @param needleId number
 * @returns UserNeedleV1ResponseData
 */
export const getUserNeedleV1Api = async ({ username, needleId }: { username: string; needleId: number }) => {
  const result: ApiResponse<UserNeedleV1ResponseData> = {};
  try {
    const { data } = await apiClient.get(`/v1/users/${username}/needles/${needleId}/`);
    result.data = data;
  } catch (error) {
    result.error = error as ErrorResponse;
  }
  return result;
};

/**
 * @name Delete User Needle V1
 * @description Delete a single needle for the user
 * @method DELETE
 * @url /v1/users/{username}/needles/{needle_id}/
 * @param username string
 * @param needleId number
 * @returns UserNeedleV1ResponseData
 */
export const deleteUserNeedleV1Api = async ({ username, needleId }: { username: string; needleId: number }) => {
  const result: ApiResponse<UserNeedleV1ResponseData> = {};
  try {
    const { data } = await apiClient.delete(`/v1/users/${username}/needles/${needleId}/`);
    result.data = data;
  } catch (error) {
    result.error = error as ErrorResponse;
  }
  return result;
};
