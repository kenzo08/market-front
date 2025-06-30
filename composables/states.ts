export const useToken = () => useState<string | null>('token', () => null)
export const useLogged = () => useState<boolean>('logged', () => false)
