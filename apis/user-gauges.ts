import { apiClient } from './instance/axios';

/**
 * @name Post User Gauge V1
 * @description Create a new gauge for the user
 * @method POST
 * @url /v1/users/{username}/gauges/
 * @param username string
 * @param body PostUserGaugeV1BodyType
 * @returns PostUserGaugeV1ResponseData
 */
export const createUserGaugeV1Api = async ({ username, body }: { username: string; body: PostUserGaugeV1BodyType }) => {
  const result: ApiResponse<UserGaugeV1ResponseData> = {};
  try {
    const { data } = await apiClient.post(`/v1/users/${username}/gauges/`, body);
    result.data = data;
  } catch (error) {
    result.error = error as ErrorResponse;
  }
  return result;
};

/**
 * @name Get User Gauges V1
 * @description Get all gauges for the user
 * @method GET
 * @url /v1/users/{username}/gauges/
 * @param username string
 * @returns GetUserGaugesV1ResponseData
 */
export const getUserGaugesV1Api = async ({ username }: { username: string }) => {
  const result: ApiResponse<UserGaugeV1ResponseData[]> = {};
  try {
    const { data } = await apiClient.get(`/v1/users/${username}/gauges/`);
    result.data = data;
  } catch (error) {
    result.error = error as ErrorResponse;
  }
  return result;
};

/**
 * @name Get User Gauge V1
 * @description Get a single gauge for the user
 * @method GET
 * @url /v1/users/{username}/gauges/{gauge_id}/
 * @param username string
 * @param gauge_id number
 * @returns GetUserGaugeV1ResponseData
 */
export const getUserGaugeV1Api = async ({ username, gauge_id }: { username: string; gauge_id: number }) => {
  const result: ApiResponse<UserGaugeV1ResponseData> = {};
  try {
    const { data } = await apiClient.get(`/v1/users/${username}/gauges/${gauge_id}/`);
    result.data = data;
  } catch (error) {
    result.error = error as ErrorResponse;
  }
  return result;
};

/**
 * @name Delete User Gauge V1
 * @description Delete a gauge for the user
 * @method DELETE
 * @url /v1/users/{username}/gauges/{gauge_id}/
 * @param username string
 * @param gauge_id number
 * @returns DeleteUserGaugeV1ResponseData
 */
export const deleteUserGaugeV1Api = async ({ username, gauge_id }: { username: string; gauge_id: number }) => {
  const result: ApiResponse<UserGaugeV1ResponseData> = {};
  try {
    const { data } = await apiClient.delete(`/v1/users/${username}/gauges/${gauge_id}/`);
    result.data = data;
  } catch (error) {
    result.error = error as ErrorResponse;
  }
  return result;
};
