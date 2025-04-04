import axios from 'axios'
import {
  afterEach,
  describe,
  expect,
  it,
  vi,
} from 'vitest'
import { z } from 'zod'

import { createHttpZodClient } from './index'

// Mock axios instance
const mockAxios = axios.create()
const mockOnZodError = vi.fn()

// Initialize client
const client = createHttpZodClient({
  axios: mockAxios,
  onZodError: mockOnZodError,
})

// Common test schema
const testSchema = z.object({
  id: z.number(),
  name: z.string(),
})

// Utility function to create mocked responses
function mockAxiosMethod(method: 'delete' | 'get' | 'patch' | 'post' | 'put', data: any): void {
  vi.spyOn(mockAxios, method).mockResolvedValueOnce({ data })
}

describe('createHttpZodClient', () => {
  afterEach(() => {
    vi.resetAllMocks()
  })

  describe('get method', () => {
    it('should return parsed data if response matches schema', async () => {
      const responseData = {
        id: 1,
        name: 'test',
      }

      mockAxiosMethod('get', responseData)

      const result = await client.get({
        responseSchema: testSchema,
        url: '/test-get',
      })

      expect(result).toEqual(responseData)
      expect(mockOnZodError).not.toHaveBeenCalled()
    })

    it('should call onZodError and return unparsed data if validation fails', async () => {
      const responseData = {
        id: 'wrong-type',
        name: 123,
      }

      mockAxiosMethod('get', responseData)

      const result = await client.get({
        responseSchema: testSchema,
        url: '/test-get-error',
      })

      expect(mockOnZodError).toHaveBeenCalledWith({
        error: expect.any(z.ZodError),
        method: 'get',
        url: '/test-get-error',
      })
      expect(result).toEqual(responseData)
    })
  })

  describe('post method', () => {
    it('should send body and return parsed data if response matches schema', async () => {
      const requestBody = { some: 'data' }
      const responseData = {
        id: 1,
        name: 'test',
      }

      mockAxiosMethod('post', responseData)

      const result = await client.post({
        body: requestBody,
        responseSchema: testSchema,
        url: '/test-post',
      })

      expect(result).toEqual(responseData)
      expect(mockAxios.post).toHaveBeenCalledWith('/test-post', requestBody, undefined)
      expect(mockOnZodError).not.toHaveBeenCalled()
    })

    it('should call onZodError if response validation fails', async () => {
      const responseData = {
        id: 'invalid',
        name: true,
      }

      mockAxiosMethod('post', responseData)

      const result = await client.post({
        body: { data: 'test' },
        responseSchema: testSchema,
        url: '/test-post-error',
      })

      expect(mockOnZodError).toHaveBeenCalledWith({
        error: expect.any(z.ZodError),
        method: 'post',
        url: '/test-post-error',
      })
      expect(result).toEqual(responseData)
    })
  })

  describe('patch method', () => {
    it('should return parsed data on successful response', async () => {
      const responseData = {
        id: 1,
        name: 'updated',
      }

      mockAxiosMethod('patch', responseData)

      const result = await client.patch({
        body: { name: 'updated' },
        responseSchema: testSchema,
        url: '/test-patch',
      })

      expect(result).toEqual(responseData)
      expect(mockOnZodError).not.toHaveBeenCalled()
    })

    it('should call onZodError if response does not match schema', async () => {
      const responseData = {
        id: 'invalid',
        name: 123,
      }

      mockAxiosMethod('patch', responseData)

      const result = await client.patch({
        body: { name: 'wrong' },
        responseSchema: testSchema,
        url: '/test-patch-error',
      })

      expect(mockOnZodError).toHaveBeenCalledWith({
        error: expect.any(z.ZodError),
        method: 'patch',
        url: '/test-patch-error',
      })
      expect(result).toEqual(responseData)
    })
  })

  describe('put method', () => {
    it('should return parsed data on successful response', async () => {
      const responseData = {
        id: 1,
        name: 'put-name',
      }

      mockAxiosMethod('put', responseData)

      const result = await client.put({
        body: { name: 'put-name' },
        responseSchema: testSchema,
        url: '/test-put',
      })

      expect(result).toEqual(responseData)
      expect(mockOnZodError).not.toHaveBeenCalled()
    })

    it('should call onZodError if response schema validation fails', async () => {
      const responseData = {
        id: 'invalid',
        name: true,
      }

      mockAxiosMethod('put', responseData)

      const result = await client.put({
        body: { name: 'wrong' },
        responseSchema: testSchema,
        url: '/test-put-error',
      })

      expect(mockOnZodError).toHaveBeenCalledWith({
        error: expect.any(z.ZodError),
        method: 'put',
        url: '/test-put-error',
      })
      expect(result).toEqual(responseData)
    })
  })

  describe('delete method', () => {
    it('should call onZodError if response does not match schema', async () => {
      const responseData = {
        id: 'invalid',
        name: true,
      }

      mockAxiosMethod('delete', responseData)

      const result = await client.delete({
        responseSchema: testSchema,
        url: '/test-delete-error',
      })

      expect(mockOnZodError).toHaveBeenCalledWith({
        error: expect.any(z.ZodError),
        method: 'delete',
        url: '/test-delete-error',
      })
      expect(result).toEqual(responseData)
    })

    it('should return undefined if responseSchema is not provided', async () => {
      mockAxiosMethod('delete', {})

      const result = await client.delete({ url: '/test-delete' })

      expect(result).toBeUndefined()
      expect(mockOnZodError).not.toHaveBeenCalled()
    })
  })
})
