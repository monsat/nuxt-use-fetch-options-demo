import type { User } from '@/types'

export const useUserImmediateFalse = (userId: MaybeRef<string>) => {
  const user_id = toValue(userId)
  const {
    data,
    status,
    execute,
  } = useFetch(`/api/user/${user_id}`, {
    immediate: false,
  })

  return {
    user: data,
    status,
    fetchUser: execute,
  }
}
