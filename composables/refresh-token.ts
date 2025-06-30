import {useApiPost} from '~/composables/api';
import {useLogged, useToken} from '~/composables/states';

export async function useRefreshToken() {
  const refreshToken = useCookie('refreshToken')

  return useApiPost<unknown>('/api/auth/refresh', {
    headers: {
      Authorization: `Bearer ${refreshToken.value}`,
    },
  })
}

export function useSetTokens(data: {accessToken: string, refreshToken: string, refreshTokenExpire: number}) {
  const token = useToken()
  const isLogged = useLogged()

  const expires = new Date(data.refreshTokenExpire * 1000)
  const refreshToken = useCookie('refreshToken', { expires })

  token.value = data.accessToken
  refreshToken.value = data.refreshToken
  isLogged.value = true
}
