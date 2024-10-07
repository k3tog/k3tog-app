import { apiClient } from './instance/axios';

export const getLanguagesApi = async () => {
  const result: ApiResponse<LanguageResponseData[]> = {};
  try {
    const { data } = await apiClient.get('/languages/');
    result.data = data;
  } catch (error) {
    result.error = error as ErrorResponse;
  }
};
