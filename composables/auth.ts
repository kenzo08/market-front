import {useLogged, useToken} from '~/composables/states';

export function useLogout() {
  const isLogged = useLogged()
  const token = useToken()
  const refreshToken = useCookie('refreshToken')
  const fuserToken = useCookie('fuserToken')
  const fuserFavoriteProducts = useCookie('fuserFavoriteProducts')

  token.value = null
  refreshToken.value = null
  fuserToken.value = null
  isLogged.value = false
  fuserFavoriteProducts.value = null
}
