/* eslint-disable ts/strict-boolean-expressions */
import type { Component } from 'vue'

import type {
  ExternalToast,
  PromiseData,
  PromiseT,
  ToastT,
  ToastToDismiss,
  ToastTypes,
} from './types'

let toastsCounter = 0

class Observer {
  addToast = (data: ToastT) => {
    this.publish(data)
    this.toasts = [
      ...this.toasts,
      data,
    ]
  }

  create = (
    data: ExternalToast & {
      message?: Component | string
      promise?: PromiseT
      type?: ToastTypes
    },
  ) => {
    const { message, ...rest } = data
    const id
      = typeof data.id === 'number' || (data.id && data.id?.length > 0)
        ? data.id
        : toastsCounter++
    const alreadyExists = this.toasts.find((toast) => {
      return toast.id === id
    })
    const dismissible = data.dismissible === undefined ? true : data.dismissible

    if (alreadyExists) {
      this.toasts = this.toasts.map((toast) => {
        if (toast.id === id) {
          this.publish({ ...toast, ...data, id, title: message })
          return {
            ...toast,
            ...data,
            dismissible,
            id,
            title: message,
          }
        }

        return toast
      })
    }
    else {
      this.addToast({ title: message, ...rest, dismissible, id })
    }

    return id
  }

  // We can't provide the toast we just created as a prop as we didn't create it yet, so we can create a default toast object, I just don't know how to use function in argument when calling()?
  custom = (component: Component, data?: ExternalToast) => {
    const id = data?.id || toastsCounter++
    this.publish({ component, id, ...data })

    return id
  }

  dismiss = (id?: number | string) => {
    if (!id) {
      this.toasts.forEach((toast) => {
        this.subscribers.forEach(subscriber =>
          subscriber({ dismiss: true, id: toast.id }))
      })
    }

    this.subscribers.forEach(subscriber => subscriber({ dismiss: true, id }))
    return id
  }

  error = (message: Component | string, data?: ExternalToast) => {
    return this.create({ ...data, message, type: 'error' })
  }

  info = (message: Component | string, data?: ExternalToast) => {
    return this.create({ ...data, message, type: 'info' })
  }

  loading = (message: Component | string, data?: ExternalToast) => {
    return this.create({ ...data, message, type: 'loading' })
  }

  message = (message: Component | string, data?: ExternalToast) => {
    return this.create({ ...data, message, type: 'default' })
  }

  promise = <ToastData>(
    promise: PromiseT<ToastData>,
    data?: PromiseData<ToastData>,
  ) => {
    if (!data) {
      // Nothing to show
      return
    }

    let id: number | string | undefined
    if (data.loading !== undefined) {
      id = this.create({
        ...data,
        description:
          typeof data.description !== 'function' ? data.description : undefined,
        message: data.loading,
        promise,
        type: 'loading',
      })
    }

    const p = promise instanceof Promise ? promise : promise()

    let shouldDismiss = id !== undefined

    p.then((promiseData) => {
      if (
        promiseData
        // @ts-expect-error test
        && typeof promiseData.ok === 'boolean'
        // @ts-expect-error test
        && !promiseData.ok
      ) {
        shouldDismiss = false
        const message
          = typeof data.error === 'function'
            ? // @ts-expect-error test
            data.error(`HTTP error! status: ${response.status}`)
            : data.error
        const description
          = typeof data.description === 'function'
            ? // @ts-expect-error test
            data.description(`HTTP error! status: ${response.status}`)
            : data.description

        this.create({ description, id, message, type: 'error' })
      }
      else if (data.success !== undefined) {
        shouldDismiss = false
        const message
          = typeof data.success === 'function'
            ? data.success(promiseData)
            : data.success
        const description
          = typeof data.description === 'function'
            ? // @ts-expect-error test
            data.description(promiseData)
            : data.description

        this.create({ description, id, message, type: 'success' })
      }
    })
      .catch((error) => {
        if (data.error !== undefined) {
          shouldDismiss = false
          const message
            = typeof data.error === 'function' ? data.error(error) : data.error
          const description
            = typeof data.description === 'function'
              ? // @ts-expect-error
              data.description(error)
              : data.description

          this.create({ description, id, message, type: 'error' })
        }
      })
      .finally(() => {
        if (shouldDismiss) {
          // Toast is still in load state (and will be indefinitely — dismiss it)
          this.dismiss(id)
          id = undefined
        }

        data.finally?.()
      })

    return id
  }

  publish = (data: ToastT) => {
    this.subscribers.forEach(subscriber => subscriber(data))
  }

  // We use arrow functions to maintain the correct `this` reference
  subscribe = (subscriber: (toast: ToastT | ToastToDismiss) => void) => {
    this.subscribers.push(subscriber as any)

    return () => {
      const index = this.subscribers.indexOf(subscriber as any)
      this.subscribers.splice(index, 1)
    }
  }

  subscribers: Array<(toast: ExternalToast | ToastToDismiss) => void>

  success = (message: Component | string, data?: ExternalToast) => {
    return this.create({ ...data, message, type: 'success' })
  }

  toasts: Array<ToastT | ToastToDismiss>

  warning = (message: Component | string, data?: ExternalToast) => {
    return this.create({ ...data, message, type: 'warning' })
  }

  constructor() {
    this.subscribers = []
    this.toasts = []
  }
}

export const ToastState = new Observer()

// bind this to the toast function
function toastFunction(message: Component | string, data?: ExternalToast) {
  const id = data?.id || toastsCounter++

  ToastState.create({
    id,
    message,
    type: 'default',
    ...data,
  })

  return id
}

const basicToast = toastFunction

// We use `Object.assign` to maintain the correct types as we would lose them otherwise
export const toast = Object.assign(basicToast, {
  custom: ToastState.custom,
  dismiss: ToastState.dismiss,
  error: ToastState.error,
  info: ToastState.info,
  loading: ToastState.loading,
  message: ToastState.message,
  promise: ToastState.promise,
  success: ToastState.success,
  warning: ToastState.warning,
})
