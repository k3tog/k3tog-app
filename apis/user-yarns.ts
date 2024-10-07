import { apiClient } from './instance/axios';

/**
 * @name Post User Yarn V1
 * @description Create a new yarn for the user
 * @method POST
 * @url /v1/users/{username}/yarns/
 * @param username string
 * @param body PostUserYarnV1BodyType
 * @returns PostUserYarnV1ResponseData
 */
export const createUserYarnV1Api = async ({ username, body }: { username: string; body: PostUserYarnV1BodyType }) => {
  const result: ApiResponse<UserYarnV1ResponseData> = {};
  try {
    const { data } = await apiClient.post(`/v1/users/${username}/yarns/`, body);
    result.data = data;
  } catch (error) {
    result.error = error as ErrorResponse;
  }
  return result;
};

/**
 * @name Get User Yarns V1
 * @description Get all yarns for the user
 * @method GET
 * @url /v1/users/{username}/yarns/
 * @param username string
 * @returns GetUserYarnsV1ResponseData
 */
export const getUserYarnsV1Api = async ({ username }: { username: string }) => {
  const result: ApiResponse<UserYarnV1ResponseData[]> = {};
  try {
    const { data } = await apiClient.get(`/v1/users/${username}/yarns/`);
    result.data = data;
  } catch (error) {
    result.error = error as ErrorResponse;
  }
  return result;
};

/**
 * @name Get User Yarn V1
 * @description Get a single yarn for the user
 * @method GET
 * @url /v1/users/{username}/yarns/{yarn_id}/
 * @param username string
 * @param yarnId number
 * @returns GetUserYarnV1ResponseData
 */
export const getUserYarnV1Api = async ({ username, yarnId }: { username: string; yarnId: number }) => {
  const result: ApiResponse<UserYarnV1ResponseData> = {};
  try {
    const { data } = await apiClient.get(`/v1/users/${username}/yarns/${yarnId}/`);
    result.data = data;
  } catch (error) {
    result.error = error as ErrorResponse;
  }
  return result;
};

/**
 * @name Delete User Yarn V1
 * @description Delete a single yarn for the user
 * @method DELETE
 * @url /v1/users/{username}/yarns/{yarn_id}/
 * @param username string
 * @param yarnId number
 * @returns DeleteUserYarnV1ResponseData
 */
export const deleteUserYarnV1Api = async ({ username, yarnId }: { username: string; yarnId: number }) => {
  const result: ApiResponse<UserYarnV1ResponseData> = {};
  try {
    const { data } = await apiClient.delete(`/v1/users/${username}/yarns/${yarnId}/`);
    result.data = data;
  } catch (error) {
    result.error = error as ErrorResponse;
  }
};
