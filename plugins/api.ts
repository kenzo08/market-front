import type { JwtPayload } from 'jwt-decode'
import { jwtDecode } from 'jwt-decode'
import {useToken} from '~/composables/states';
import {useRefreshToken, useSetTokens} from '~/composables/refresh-token';

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  const api = $fetch.create({
    baseURL: config.public.BASE_API_URL,
    headers: {
      Accept: 'application/json',
    },
    async onRequest({ options, request }) {
      const access = useToken()
      const isRefreshTokenRequest = String(request).includes('/api/auth/refresh')
      const fuserToken = useCookie('fuserToken')


      if (access.value && !isRefreshTokenRequest) {
        const tokenExp = jwtDecode<JwtPayload>(access.value).exp
        const currentTime = new Date().getTime()
        const tokenTime = new Date(tokenExp! * 1000).getTime()
        if (currentTime + 10 * 1000 >= tokenTime) {
          const data = await useRefreshToken()
          if (data)
            useSetTokens(data)
        }

        options.headers = {
          ...options.headers,
          ...{ Authorization: `Bearer ${access.value}` },
        }
      }

      if (fuserToken.value) {
        options.headers = {
          ...options.headers,
          ...{ 'Fuser-Token': fuserToken.value },
        }
      }

      if (location) {
        options.headers = {
          ...options.headers,
          ...{ 'User-Location-Id': String(location.id) },
        }
      }


    },
    async onResponseError({ response }) {
      throw response
    },
  })

  return {
    provide: {
      api,
    },
  }
})
