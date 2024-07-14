import type { User } from '@/types'

export const useFetchUserServerFalse = (userId: MaybeRef<string>) => {
  const user_id = toValue(userId)
  const {
    data,
    status,
    // execute,
  } = useFetch(`/api/user/${user_id}`, {
    server: false,
    // immediate: false,
  })

  const isAdult = computed(() => data.value?.data ? data.value?.data?.age >= 18 : false)

  return {
    user: data,
    isAdult,
    status,
    // fetchUser: execute,
  }
}
