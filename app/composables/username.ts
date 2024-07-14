import type { User } from '@/types'

export const useUserNameById = (user_id: ComputedRef<string>) => {
  const query = {
    user_id,
  }
  const {
    data,
    status,
    execute,
  } = useFetch('/api/username', {
    query,
    immediate: false,
    onResponse: () => {
      console.log('fetched', user_id.value)
    },
    transform: (input): User['name'] | null => {
      return input?.data ?? null
    },
  })

  return {
    username: data,
    status,
    fetchUserName: execute,
  }
}
