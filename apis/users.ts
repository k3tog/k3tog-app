import { apiClient } from './instance/axios';

/**
 * @name Post User V1
 * @description Create a new user
 * @method POST
 * @url /v1/users/
 * @param body PostUserV1BodyType
 * @returns PostUserV1ResponseData
 */
export const createUserV1Api = async ({ username, body }: { username: string; body: PostUserV1BodyType }) => {
  const result: ApiResponse<UserV1ResponseData> = {};
  try {
    const { data } = await apiClient.post(`/v1/users/${username}/`, body);
    result.data = data;
  } catch (error) {
    result.error = error as ErrorResponse;
  }
};

/**
 * @name Get Users V1
 * @description Get all users
 * @method GET
 * @url /v1/users/
 * @returns GetUsersV1ResponseData
 */
export const getUsersV1Api = async () => {
  const result: ApiResponse<UserV1ResponseData[]> = {};
  try {
    const { data } = await apiClient.get(`/v1/users/`);
    result.data = data;
  } catch (error) {
    result.error = error as ErrorResponse;
  }
};

/**
 * @name Get User V1
 * @description Get a single user
 * @method GET
 * @url /v1/users/{username}/
 * @param username string
 * @returns GetUserV1ResponseData
 */
export const getUserV1Api = async ({ username }: { username: string }) => {
  const result: ApiResponse<UserV1ResponseData> = {};
  try {
    const { data } = await apiClient.get(`/v1/users/${username}/`);
    result.data = data;
  } catch (error) {
    result.error = error as ErrorResponse;
  }
};

/**
 * @name Put User V1
 * @description Update a single user
 * @method PUT
 * @url /v1/users/{username}/
 * @param username string
 * @param body PutUserV1BodyType
 * @returns PutUserV1ResponseData
 */
export const putUserV1Api = async ({ username, body }: { username: string; body: PostUserV1BodyType }) => {
  const result: ApiResponse<UserV1ResponseData> = {};
  try {
    const { data } = await apiClient.put(`/v1/users/${username}/`, body);
    result.data = data;
  } catch (error) {
    result.error = error as ErrorResponse;
  }
};
