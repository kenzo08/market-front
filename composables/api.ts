interface Options {
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
  baseURL?: string
  headers?: Headers
  body?: any
  params?: any
  query?: any
  watch?: any
  lazy?: boolean
  server?: boolean
  immediate?: boolean
}

interface Headers {
  [key: string]: string
}

export function useApiGet<T>(url: string, options: Options = {}) {
  return useNuxtApp().$api<T>(url, {
    method: 'GET',
    ...options,
  })
}

export function useApiDelete<T>(url: string, options: Options = {}) {
  return useNuxtApp().$api<T>(url, {
    method: 'DELETE',
    ...options,
  })
}

export function useApiPost<T>(url: string, options: Options = {}) {
  return useNuxtApp().$api<T>(url, {
    method: 'POST',
    ...options,
  })
}
