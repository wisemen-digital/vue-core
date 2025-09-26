import type {
  Axios,
  AxiosInstance,
  AxiosRequestConfig,
} from 'axios'
import { z } from 'zod'

interface CustomizedError {
  error: z.ZodError
  method: 'delete' | 'get' | 'patch' | 'post' | 'put'
  url: string
}

export interface CreateHttpZodClientOptions {
  axios: Axios | AxiosInstance
  onZodError: (error: CustomizedError) => void
}

export interface CreateHttpZodClientReturnType {
  delete: <T extends z.ZodType>(options: DeleteOptions<T>) => Promise<z.infer<T>>
  get: <T extends z.ZodType>(options: GetOptions<T>) => Promise<z.infer<T>>
  patch: <T extends z.ZodType>(options: PatchOptions<T>) => Promise<z.infer<T>>
  post: <T extends z.ZodType>(options: PostOptions<T>) => Promise<z.infer<T>>
  put: <T extends z.ZodType>(options: PutOptions<T>) => Promise<z.infer<T>>
}

interface GetOptions<T extends z.ZodType> {
  config?: AxiosRequestConfig<any>
  responseSchema: T
  url: string
}

interface PostOptions<T extends z.ZodType> {
  body: any
  config?: AxiosRequestConfig<any>
  responseSchema: T
  url: string
}

interface PatchOptions<T extends z.ZodType> {
  body: any
  config?: AxiosRequestConfig<any>
  responseSchema: T
  url: string
}

interface PutOptions<T extends z.ZodType> {
  body: any
  config?: AxiosRequestConfig<any>
  responseSchema: T
  url: string
}

interface DeleteOptions<T extends z.ZodType> {
  body?: any
  config?: AxiosRequestConfig<any>
  responseSchema?: T
  url: string
}

export function createHttpZodClient(
  {
    axios, onZodError,
  }: CreateHttpZodClientOptions,
): CreateHttpZodClientReturnType {
  async function get<T extends z.ZodType>(options: GetOptions<T>): Promise<z.infer<T>> {
    const {
      config,
      responseSchema,
      url,
    } = options

    const {
      data,
    } = await axios.get(url, config)

    try {
      return responseSchema.parse(data)
    }
    catch (error) {
      if (error instanceof z.ZodError) {
        onZodError({
          error,
          method: 'get',
          url,
        })

        return data
      }

      throw error
    }
  }

  async function patch<T extends z.ZodType>(options: PatchOptions<T>): Promise<z.infer<T>> {
    const {
      body,
      config,
      responseSchema,
      url,
    } = options

    const {
      data,
    } = await axios.patch(url, body, config)

    try {
      return responseSchema.parse(data)
    }
    catch (error) {
      if (error instanceof z.ZodError) {
        onZodError({
          error,
          method: 'patch',
          url,
        })

        return data
      }

      throw error
    }
  }

  async function post<T extends z.ZodType>(options: PostOptions<T>): Promise<z.infer<T>> {
    const {
      body,
      config,
      responseSchema,
      url,
    } = options

    const {
      data,
    } = await axios.post(url, body, config)

    try {
      return responseSchema.parse(data)
    }
    catch (error) {
      if (error instanceof z.ZodError) {
        onZodError({
          error,
          method: 'post',
          url,
        })

        return data
      }

      throw error
    }
  }

  async function put<T extends z.ZodType>(options: PutOptions<T>): Promise<z.infer<T>> {
    const {
      body,
      config,
      responseSchema,
      url,
    } = options

    const {
      data,
    } = await axios.put(url, body, config)

    try {
      return responseSchema.parse(data)
    }
    catch (error) {
      if (error instanceof z.ZodError) {
        onZodError({
          error,
          method: 'put',
          url,
        })

        return data
      }

      throw error
    }
  }

  async function del<T extends z.ZodType>(options: DeleteOptions<T>): Promise<z.infer<T> | undefined> {
    const {
      body,
      config,
      responseSchema,
      url,
    } = options

    const {
      data,
    } = await axios.delete(url, {
      ...config,
      data: body,
    })

    if (responseSchema === undefined) {
      return
    }

    try {
      return responseSchema.parse(data)
    }
    catch (error) {
      if (error instanceof z.ZodError) {
        onZodError({
          error,
          method: 'delete',
          url,
        })

        return data
      }

      throw error
    }
  }

  return {
    delete: del as CreateHttpZodClientReturnType['delete'],
    get,
    patch,
    post,
    put,
  }
}
