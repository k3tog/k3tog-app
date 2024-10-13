import { apiClient } from './instance/axios';

/**
 * @name Get User Projects V1
 * @description Get all projects for the user
 * @method GET
 * @url /v1/users/{username}/projects/
 * @param username string
 * @returns UserProjectV1ResponseData[]
 */
export const getUserProjectsV1Api = async ({ username }: { username: string }) => {
  const result: ApiResponse<UserProjectV1ResponseData[]> = {};
  try {
    const { data } = await apiClient.get(`/v1/users/${username}/projects/`);
    result.data = data;
  } catch (error) {
    result.error = error as ErrorResponse;
  }
  return result;
};

/**
 * @name Get User Project V1
 * @description Get a single project for the user
 * @method GET
 * @url /v1/users/{username}/projects/{project_id}/
 * @param username string
 * @param projectId number
 * @returns UserProjectV1ResponseData
 */
export const getUserProjectV1Api = async ({ username, projectId }: { username: string; projectId: number }) => {
  const result: ApiResponse<UserProjectV1ResponseData> = {};
  try {
    const { data } = await apiClient.get(`/v1/users/${username}/projects/${projectId}/`);
    result.data = data;
  } catch (error) {
    result.error = error as ErrorResponse;
  }
  return result;
};
