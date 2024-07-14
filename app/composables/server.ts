import type { User } from '@/types'

export const useFetchUserServerFalse = async (userId: MaybeRef<string>) => {
  const user_id = toValue(userId)
  const {
    data,
    status,
    // execute,
  } = await useFetch(`/api/user/${user_id}`, {
    server: false,
    // immediate: false,
  })

  return {
    user: data,
    status,
    // fetchUser: execute,
  }
}
