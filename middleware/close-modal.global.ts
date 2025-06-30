import { useVfm } from 'vue-final-modal'

export default defineNuxtRouteMiddleware(() => {
  if (import.meta.server)
    return

  const vfm = useVfm()
  vfm.closeAll()
})
