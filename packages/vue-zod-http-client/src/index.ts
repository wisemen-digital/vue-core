import type { Axios, AxiosInstance, AxiosRequestConfig } from 'axios'
import { z } from 'zod'

interface CustomizedError {
  url: string
  method: 'get' | 'post' | 'put' | 'delete' | 'patch'
  error: z.ZodError
}

interface CreateHttpZodClientOptions {
  axios: Axios | AxiosInstance
  onZodError: (error: CustomizedError) => void
}

interface CreateHttpZodClientReturnType {
  get: <T extends z.ZodType>(options: GetOptions<T>) => Promise<z.infer<T>>
  post: <T extends z.ZodType>(options: PostOptions<T>) => Promise<z.infer<T>>
  patch: <T extends z.ZodType>(options: PatchOptions<T>) => Promise<z.infer<T>>
  put: <T extends z.ZodType>(options: PutOptions<T>) => Promise<z.infer<T>>
  delete: <T extends z.ZodType>(options: DeleteOptions<T>) => Promise<z.infer<T>>
}

interface GetOptions<T extends z.ZodType> {
  url: string
  responseSchema: T
  config?: AxiosRequestConfig<any>
}

interface PostOptions<T extends z.ZodType> {
  url: string
  body: any
  responseSchema: T
  config?: AxiosRequestConfig<any>
}

interface PatchOptions<T extends z.ZodType> {
  url: string
  body: any
  responseSchema: T
  config?: AxiosRequestConfig<any>
}

interface PutOptions<T extends z.ZodType> {
  url: string
  body: any
  responseSchema: T
  config?: AxiosRequestConfig<any>
}

interface DeleteOptions<T extends z.ZodType> {
  url: string
  body?: any
  responseSchema?: T
  config?: AxiosRequestConfig<any>
}

export function createHttpZodClient(
  { axios, onZodError }: CreateHttpZodClientOptions,
): CreateHttpZodClientReturnType {
  const get = async <T extends z.ZodType>(options: GetOptions<T>): Promise<z.infer<T>> => {
    const { config, url, responseSchema } = options

    const { data } = await axios.get(url, config)

    try {
      return responseSchema.parse(data)
    }
    catch (error) {
      if (error instanceof z.ZodError) {
        onZodError({
          method: 'get',
          url,
          error,
        })

        return data
      }

      throw error
    }
  }

  const patch = async <T extends z.ZodType>(options: PatchOptions<T>) => {
    const {
      url,
      body,
      config,
      responseSchema,
    } = options

    const { data } = await axios.patch(url, body, config)

    try {
      return responseSchema.parse(data)
    }
    catch (error) {
      if (error instanceof z.ZodError) {
        onZodError({
          method: 'patch',
          url,
          error,
        })

        return data
      }

      throw error
    }
  }

  const post = async <T extends z.ZodType>(options: PostOptions<T>) => {
    const {
      url,
      body,
      config,
      responseSchema,
    } = options

    const { data } = await axios.post(url, body, config)

    try {
      return responseSchema.parse(data)
    }
    catch (error) {
      if (error instanceof z.ZodError) {
        onZodError({
          method: 'post',
          url,
          error,
        })

        return data
      }

      throw error
    }
  }

  const put = async <T extends z.ZodType>(options: PutOptions<T>) => {
    const {
      url,
      body,
      config,
      responseSchema,
    } = options

    const { data } = await axios.put(url, body, config)

    try {
      return responseSchema.parse(data)
    }
    catch (error) {
      if (error instanceof z.ZodError) {
        onZodError({
          method: 'put',
          url,
          error,
        })

        return data
      }

      throw error
    }
  }

  const del = async <T extends z.ZodType>(options: DeleteOptions<T>) => {
    const {
      url,
      config,
      body,
      responseSchema,
    } = options

    const { data } = await axios.delete(url, {
      ...(config ?? {}),
      data: body,
    })

    if (!responseSchema)
      return

    try {
      return responseSchema.parse(data)
    }
    catch (error) {
      if (error instanceof z.ZodError) {
        onZodError({
          method: 'delete',
          url,
          error,
        })

        return data
      }

      throw error
    }
  }

  return {
    get,
    post,
    put,
    delete: del,
    patch,
  }
}
