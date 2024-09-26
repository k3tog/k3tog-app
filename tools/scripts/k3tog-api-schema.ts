/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** Body_upload_photo_attachments_v1_users__username__photos__post */
export interface BodyUploadPhotoAttachmentsV1UsersUsernamePhotosPost {
  /** Photos */
  photos: File[];
}

/** Body_upload_user_pattern_attachment_v1_users__username__patterns_upload_post */
export interface BodyUploadUserPatternAttachmentV1UsersUsernamePatternsUploadPost {
  /**
   * Pattern File
   * Pattern PDF attachment
   * @format binary
   */
  pattern_file: File;
}

/** HTTPValidationError */
export interface HTTPValidationError {
  /** Detail */
  detail?: ValidationError[];
}

/** LanguageV1 */
export interface LanguageV1 {
  /** Id */
  id: number;
  /** Name */
  name: string;
}

/** PatternDocumentV1 */
export interface PatternDocumentV1 {
  /** Id */
  id: number;
  /** Document Id */
  document_id: string;
  /** Document Key */
  document_key: string;
  /** Filename Display */
  filename_display: string;
  /** Created Ts */
  created_ts: number;
}

/** PhotoInfoV1 */
export interface PhotoInfoV1 {
  /** Id */
  id: number;
  /** Photo Id */
  photo_id: string;
  /** Photo Key */
  photo_key: string;
  /** Is Thumbnail */
  is_thumbnail: boolean;
  /** Created Ts */
  created_ts: number;
  /** Type */
  type: string;
}

/** ProjectCreateRequestInfoV1 */
export interface ProjectCreateRequestInfoV1 {
  /** Title */
  title: string;
  /** @default "Not Started" */
  status?: ProjectStatus | null;
  /** Co Date */
  co_date?: string | null;
  /** Fo Date */
  fo_date?: string | null;
  /** Size */
  size?: string | null;
  /** Pattern */
  pattern?: UserPatternCreateRequestInfoV1 | number | null;
  /**
   * Yarns
   * @default []
   */
  yarns?: (UserYarnCreateRequestInfoV1 | number)[] | null;
  /**
   * Needles
   * @default []
   */
  needles?: (UserNeedleCreateRequestInfoV1 | number)[] | null;
  /**
   * Gauges
   * @default []
   */
  gauges?: (UserGaugeCreateRequestInfoV1 | number)[] | null;
  /** Note */
  note?: string | null;
  /**
   * Photo Ids
   * @default []
   */
  photo_ids?: string[] | null;
}

/** ProjectStatus */
export enum ProjectStatus {
  NotStarted = 'Not Started',
  WorkInProgress = 'Work in Progress',
  Finished = 'Finished',
}

/** ProjectV1 */
export interface ProjectV1 {
  /** Id */
  id: number;
  /** Title */
  title: string;
  /** @default "Not Started" */
  status?: ProjectStatus | null;
  /** Co Date */
  co_date?: string | null;
  /** Fo Date */
  fo_date?: string | null;
  pattern?: UserPatternV1 | null;
  /** Size */
  size?: string | null;
  /**
   * Yarns
   * @default []
   */
  yarns?: UserYarnV1[] | null;
  /**
   * Needles
   * @default []
   */
  needles?: UserNeedleV1[] | null;
  /** Note */
  note?: string | null;
}

/** UserCreateRequestInfoV1 */
export interface UserCreateRequestInfoV1 {
  /** Username */
  username: string;
  /** Email */
  email: string;
  /** State */
  state: string | null;
  /** Country */
  country: string | null;
  /** Birthday Year */
  birthday_year: number | null;
  /** Birthday Month */
  birthday_month: number | null;
  /** Birthday Day */
  birthday_day: number | null;
  /** Knitting Since */
  knitting_since: number | null;
  /** Bio */
  bio: string | null;
  /** Avatar Url */
  avatar_url: string | null;
  /**
   * Preferred Language
   * @default "English"
   */
  preferred_language?: string | null;
}

/** UserGaugeCreateRequestInfoV1 */
export interface UserGaugeCreateRequestInfoV1 {
  /** Yarn Description */
  yarn_description: string | null;
  /** Yarn Id */
  yarn_id?: number | null;
  /** Needle Size */
  needle_size: string | null;
  /** Stitches */
  stitches: number | null;
  /** Rows */
  rows: number | null;
  /** Note */
  note: string | null;
  /** Photo Id */
  photo_id?: string | null;
}

/** UserGaugeV1 */
export interface UserGaugeV1 {
  /** Id */
  id: number;
  /** Yarn Description */
  yarn_description: string | null;
  yarn?: UserYarnV1 | null;
  /** Needle Size */
  needle_size: string | null;
  /** Stitches */
  stitches: number | null;
  /** Rows */
  rows: number | null;
  /** Note */
  note: string | null;
  /** Created Ts */
  created_ts: number;
  /** Updated Ts */
  updated_ts: number;
  photo: PhotoInfoV1 | null;
}

/** UserNeedleCreateRequestInfoV1 */
export interface UserNeedleCreateRequestInfoV1 {
  /** Name */
  name: string;
  /** Size */
  size?: string | null;
  /** Note */
  note?: string | null;
  /**
   * Photo Ids
   * @default []
   */
  photo_ids?: string[] | null;
}

/** UserNeedleV1 */
export interface UserNeedleV1 {
  /** Id */
  id: number;
  /** Name */
  name: string;
  /** Size */
  size: string | null;
  /** Note */
  note: string | null;
  /** Created Ts */
  created_ts: number;
  /** Updated Ts */
  updated_ts: number;
  /**
   * Photos
   * @default []
   */
  photos?: PhotoInfoV1[] | null;
}

/** UserPatternCreateRequestInfoV1 */
export interface UserPatternCreateRequestInfoV1 {
  /** Name */
  name: string;
  /** Author */
  author?: string | null;
  /** Description */
  description?: string | null;
  /** Pattern Document Id */
  pattern_document_id?: string | null;
}

/** UserPatternV1 */
export interface UserPatternV1 {
  /** Id */
  id: number;
  /** Name */
  name: string;
  /** Author */
  author: string | null;
  /** Description */
  description: string | null;
  /** Created Ts */
  created_ts: number;
  /** Updated Ts */
  updated_ts: number;
  /** Pattern Documents */
  pattern_documents: PatternDocumentV1[] | null;
}

/** UserV1 */
export interface UserV1 {
  /** Id */
  id: number;
  /** External Id */
  external_id?: string | null;
  /** Username */
  username: string;
  /** Email */
  email: string;
  /** Location */
  location?: string | null;
  /** Birthday */
  birthday?: string | null;
  /** Knitting Since */
  knitting_since?: string | null;
  /** Bio */
  bio?: string | null;
  /** Avatar Url */
  avatar_url?: string | null;
  /** Preferred Language */
  preferred_language: string | null;
  /** Created Ts */
  created_ts: number;
  /** Updated Ts */
  updated_ts: number;
  /** Deactivated Ts */
  deactivated_ts?: number | null;
}

/** UserYarnCreateRequestInfoV1 */
export interface UserYarnCreateRequestInfoV1 {
  /** Yarn Name */
  yarn_name: string;
  /** Brand Name */
  brand_name?: string | null;
  /** Color */
  color?: string | null;
  /** Needle Range From */
  needle_range_from?: number | null;
  /** Needle Range To */
  needle_range_to?: number | null;
  /** Hook Range From */
  hook_range_from?: number | null;
  /** Hook Range To */
  hook_range_to?: number | null;
  /** Weight */
  weight?: number | null;
  /** Note */
  note?: string | null;
  /**
   * Photo Ids
   * @default []
   */
  photo_ids?: string[] | null;
}

/** UserYarnV1 */
export interface UserYarnV1 {
  /** Id */
  id: number;
  /** Yarn Name */
  yarn_name: string;
  /** Brand Name */
  brand_name: string | null;
  /** Color */
  color: string | null;
  /** Needle Range */
  needle_range: any[] | null;
  /** Hook Range */
  hook_range: any[] | null;
  /** Weight */
  weight: number | null;
  /** Note */
  note: string | null;
  /** Created Ts */
  created_ts: number;
  /** Updated Ts */
  updated_ts: number;
  /** Photos */
  photos: PhotoInfoV1[] | null;
}

/** ValidationError */
export interface ValidationError {
  /** Location */
  loc: (string | number)[];
  /** Message */
  msg: string;
  /** Error Type */
  type: string;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, 'body' | 'bodyUsed'>;

export interface FullRequestParams extends Omit<RequestInit, 'body'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, 'baseUrl' | 'cancelToken' | 'signal'>;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = '';
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: 'same-origin',
    headers: {},
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === 'number' ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join('&');
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => 'undefined' !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join('&');
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : '';
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === 'object' || typeof input === 'string') ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== 'string' ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === 'object' && property !== null
              ? JSON.stringify(property)
              : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ''}${path}${queryString ? `?${queryString}` : ''}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {}),
      },
      signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
      body: typeof body === 'undefined' || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response.clone() as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title K3tog API
 * @version 0.0.1
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  languages = {
    /**
     * @description Get a list of supporting languages
     *
     * @tags LANGUAGES
     * @name GetLanguagesLanguagesGet
     * @summary Get Languages
     * @request GET:/languages/
     */
    getLanguagesLanguagesGet: (params: RequestParams = {}) =>
      this.request<LanguageV1[], any>({
        path: `/languages/`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  };
  v1 = {
    /**
     * @description Get a list of users
     *
     * @tags USERS
     * @name GetUsersV1UsersGet
     * @summary Get Users
     * @request GET:/v1/users/
     */
    getUsersV1UsersGet: (params: RequestParams = {}) =>
      this.request<UserV1[], any>({
        path: `/v1/users/`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description Create a single user
     *
     * @tags USERS
     * @name CreateUserV1UsersPost
     * @summary Create User
     * @request POST:/v1/users/
     */
    createUserV1UsersPost: (data: UserCreateRequestInfoV1, params: RequestParams = {}) =>
      this.request<UserV1, HTTPValidationError>({
        path: `/v1/users/`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get a single user using username
     *
     * @tags USERS
     * @name GetUserV1UsersUsernameGet
     * @summary Get User
     * @request GET:/v1/users/{username}
     */
    getUserV1UsersUsernameGet: (username: string, params: RequestParams = {}) =>
      this.request<UserV1, HTTPValidationError>({
        path: `/v1/users/${username}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description Update a single user
     *
     * @tags USERS
     * @name UpdateUserV1UsersUserIdPut
     * @summary Update User
     * @request PUT:/v1/users/{user_id}
     */
    updateUserV1UsersUserIdPut: (userId: string, params: RequestParams = {}) =>
      this.request<UserV1, any>({
        path: `/v1/users/${userId}`,
        method: 'PUT',
        format: 'json',
        ...params,
      }),

    /**
     * @description Get a list of projects for the user
     *
     * @tags PROJECTS
     * @name GetProjectsV1UsersUsernameProjectsGet
     * @summary Get Projects
     * @request GET:/v1/users/{username}/projects/
     */
    getProjectsV1UsersUsernameProjectsGet: (username: string, params: RequestParams = {}) =>
      this.request<ProjectV1[], HTTPValidationError>({
        path: `/v1/users/${username}/projects/`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description Create a new project for the user
     *
     * @tags PROJECTS
     * @name CreateProjectV1UsersUsernameProjectsPost
     * @summary Create Project
     * @request POST:/v1/users/{username}/projects/
     */
    createProjectV1UsersUsernameProjectsPost: (
      username: string,
      data: ProjectCreateRequestInfoV1,
      params: RequestParams = {},
    ) =>
      this.request<ProjectV1, HTTPValidationError>({
        path: `/v1/users/${username}/projects/`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get a single project for the user
     *
     * @tags PROJECTS
     * @name GetProjectV1UsersUsernameProjectsProjectIdGet
     * @summary Get Project
     * @request GET:/v1/users/{username}/projects/{project_id}
     */
    getProjectV1UsersUsernameProjectsProjectIdGet: (username: string, projectId: number, params: RequestParams = {}) =>
      this.request<ProjectV1, HTTPValidationError>({
        path: `/v1/users/${username}/projects/${projectId}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description Get a list of patterns for the user
     *
     * @tags PATTERNS
     * @name GetUserPatternsV1UsersUsernamePatternsGet
     * @summary Get User Patterns
     * @request GET:/v1/users/{username}/patterns/
     */
    getUserPatternsV1UsersUsernamePatternsGet: (username: string, params: RequestParams = {}) =>
      this.request<UserPatternV1[], HTTPValidationError>({
        path: `/v1/users/${username}/patterns/`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description Create a new pattern for the user
     *
     * @tags PATTERNS
     * @name CreateUserPatternV1UsersUsernamePatternsPost
     * @summary Create User Pattern
     * @request POST:/v1/users/{username}/patterns/
     */
    createUserPatternV1UsersUsernamePatternsPost: (
      username: string,
      data: UserPatternCreateRequestInfoV1,
      params: RequestParams = {},
    ) =>
      this.request<UserPatternV1, HTTPValidationError>({
        path: `/v1/users/${username}/patterns/`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get a single pattern for the user
     *
     * @tags PATTERNS
     * @name GetUserPatternV1UsersUsernamePatternsPatternIdGet
     * @summary Get User Pattern
     * @request GET:/v1/users/{username}/patterns/{pattern_id}
     */
    getUserPatternV1UsersUsernamePatternsPatternIdGet: (
      username: string,
      patternId: number,
      params: RequestParams = {},
    ) =>
      this.request<UserPatternV1, HTTPValidationError>({
        path: `/v1/users/${username}/patterns/${patternId}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description Delete the specified pattern
     *
     * @tags PATTERNS
     * @name DeletePatternV1UsersUsernamePatternsPatternIdDelete
     * @summary Delete Pattern
     * @request DELETE:/v1/users/{username}/patterns/{pattern_id}
     */
    deletePatternV1UsersUsernamePatternsPatternIdDelete: (
      username: string,
      patternId: number,
      params: RequestParams = {},
    ) =>
      this.request<UserPatternV1, HTTPValidationError>({
        path: `/v1/users/${username}/patterns/${patternId}`,
        method: 'DELETE',
        format: 'json',
        ...params,
      }),

    /**
     * @description Upload pattern attachment to the file storage
     *
     * @tags PATTERNS
     * @name UploadUserPatternAttachmentV1UsersUsernamePatternsUploadPost
     * @summary Upload User Pattern Attachment
     * @request POST:/v1/users/{username}/patterns/upload
     */
    uploadUserPatternAttachmentV1UsersUsernamePatternsUploadPost: (
      username: string,
      data: BodyUploadUserPatternAttachmentV1UsersUsernamePatternsUploadPost,
      params: RequestParams = {},
    ) =>
      this.request<PatternDocumentV1, HTTPValidationError>({
        path: `/v1/users/${username}/patterns/upload`,
        method: 'POST',
        body: data,
        type: ContentType.FormData,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get a list of yarns for the user
     *
     * @tags YARNS
     * @name GetUserYarnsV1UsersUsernameYarnsGet
     * @summary Get User Yarns
     * @request GET:/v1/users/{username}/yarns/
     */
    getUserYarnsV1UsersUsernameYarnsGet: (username: string, params: RequestParams = {}) =>
      this.request<UserYarnV1[], HTTPValidationError>({
        path: `/v1/users/${username}/yarns/`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description Create a new yarn for the user
     *
     * @tags YARNS
     * @name CreateUserYarnV1UsersUsernameYarnsPost
     * @summary Create User Yarn
     * @request POST:/v1/users/{username}/yarns/
     */
    createUserYarnV1UsersUsernameYarnsPost: (
      username: string,
      data: UserYarnCreateRequestInfoV1,
      params: RequestParams = {},
    ) =>
      this.request<UserYarnV1, HTTPValidationError>({
        path: `/v1/users/${username}/yarns/`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get a single yarn for the user
     *
     * @tags YARNS
     * @name GetUserYarnV1UsersUsernameYarnsYarnIdGet
     * @summary Get User Yarn
     * @request GET:/v1/users/{username}/yarns/{yarn_id}
     */
    getUserYarnV1UsersUsernameYarnsYarnIdGet: (username: string, yarnId: number, params: RequestParams = {}) =>
      this.request<UserYarnV1, HTTPValidationError>({
        path: `/v1/users/${username}/yarns/${yarnId}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description Delete a yarn for the user
     *
     * @tags YARNS
     * @name DeleteUserYarnV1UsersUsernameYarnsYarnIdDelete
     * @summary Delete User Yarn
     * @request DELETE:/v1/users/{username}/yarns/{yarn_id}
     */
    deleteUserYarnV1UsersUsernameYarnsYarnIdDelete: (username: string, yarnId: number, params: RequestParams = {}) =>
      this.request<any, HTTPValidationError>({
        path: `/v1/users/${username}/yarns/${yarnId}`,
        method: 'DELETE',
        format: 'json',
        ...params,
      }),

    /**
     * @description Get a list of needles for the user
     *
     * @tags NEEDLES
     * @name GetUserNeedlesV1UsersUsernameNeedlesGet
     * @summary Get User Needles
     * @request GET:/v1/users/{username}/needles/
     */
    getUserNeedlesV1UsersUsernameNeedlesGet: (username: string, params: RequestParams = {}) =>
      this.request<UserNeedleV1[], HTTPValidationError>({
        path: `/v1/users/${username}/needles/`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description Create a new needle for the user
     *
     * @tags NEEDLES
     * @name CreateUserNeedleV1UsersUsernameNeedlesPost
     * @summary Create User Needle
     * @request POST:/v1/users/{username}/needles/
     */
    createUserNeedleV1UsersUsernameNeedlesPost: (
      username: string,
      data: UserNeedleCreateRequestInfoV1,
      params: RequestParams = {},
    ) =>
      this.request<UserNeedleV1, HTTPValidationError>({
        path: `/v1/users/${username}/needles/`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get a single needle for the user
     *
     * @tags NEEDLES
     * @name GetUserNeedleV1UsersUsernameNeedlesNeedleIdGet
     * @summary Get User Needle
     * @request GET:/v1/users/{username}/needles/{needle_id}
     */
    getUserNeedleV1UsersUsernameNeedlesNeedleIdGet: (username: string, needleId: number, params: RequestParams = {}) =>
      this.request<UserNeedleV1, HTTPValidationError>({
        path: `/v1/users/${username}/needles/${needleId}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description Delete a needle for the user
     *
     * @tags NEEDLES
     * @name DeleteUserNeedleV1UsersUsernameNeedlesNeedleIdDelete
     * @summary Delete User Needle
     * @request DELETE:/v1/users/{username}/needles/{needle_id}
     */
    deleteUserNeedleV1UsersUsernameNeedlesNeedleIdDelete: (
      username: string,
      needleId: number,
      params: RequestParams = {},
    ) =>
      this.request<any, HTTPValidationError>({
        path: `/v1/users/${username}/needles/${needleId}`,
        method: 'DELETE',
        format: 'json',
        ...params,
      }),

    /**
     * @description Upload multiple photos to the file storage
     *
     * @tags PHOTOS
     * @name UploadPhotoAttachmentsV1UsersUsernamePhotosPost
     * @summary Upload Photo Attachments
     * @request POST:/v1/users/{username}/photos/
     */
    uploadPhotoAttachmentsV1UsersUsernamePhotosPost: (
      username: string,
      data: BodyUploadPhotoAttachmentsV1UsersUsernamePhotosPost,
      query?: {
        /**
         * Category
         * @default "project"
         */
        category?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<PhotoInfoV1[], HTTPValidationError>({
        path: `/v1/users/${username}/photos/`,
        method: 'POST',
        query: query,
        body: data,
        type: ContentType.FormData,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get a list of gauges for the user
     *
     * @tags GAUGES
     * @name GetUserGaugesV1UsersUsernameGaugesGet
     * @summary Get User Gauges
     * @request GET:/v1/users/{username}/gauges/
     */
    getUserGaugesV1UsersUsernameGaugesGet: (username: string, params: RequestParams = {}) =>
      this.request<UserGaugeV1[], HTTPValidationError>({
        path: `/v1/users/${username}/gauges/`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description Create a new needle for the user
     *
     * @tags GAUGES
     * @name CreateUserGaugeV1UsersUsernameGaugesPost
     * @summary Create User Gauge
     * @request POST:/v1/users/{username}/gauges/
     */
    createUserGaugeV1UsersUsernameGaugesPost: (
      username: string,
      data: UserGaugeCreateRequestInfoV1,
      params: RequestParams = {},
    ) =>
      this.request<UserGaugeV1, HTTPValidationError>({
        path: `/v1/users/${username}/gauges/`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get a single gauge for the user
     *
     * @tags GAUGES
     * @name GetUserGaugeV1UsersUsernameGaugesGaugeIdGet
     * @summary Get User Gauge
     * @request GET:/v1/users/{username}/gauges/{gauge_id}
     */
    getUserGaugeV1UsersUsernameGaugesGaugeIdGet: (username: string, gaugeId: number, params: RequestParams = {}) =>
      this.request<UserGaugeV1, HTTPValidationError>({
        path: `/v1/users/${username}/gauges/${gaugeId}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description Delete a gauge for the user
     *
     * @tags GAUGES
     * @name DeleteUserGaugeV1UsersUsernameGaugesGaugeIdDelete
     * @summary Delete User Gauge
     * @request DELETE:/v1/users/{username}/gauges/{gauge_id}
     */
    deleteUserGaugeV1UsersUsernameGaugesGaugeIdDelete: (
      username: string,
      gaugeId: number,
      params: RequestParams = {},
    ) =>
      this.request<any, HTTPValidationError>({
        path: `/v1/users/${username}/gauges/${gaugeId}`,
        method: 'DELETE',
        format: 'json',
        ...params,
      }),
  };
}
