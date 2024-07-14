import type { User } from '@/types'

export const useUserNameById = (user_id: ComputedRef<string>) => {
  const query = {
    user_id,
  }
  const {
    data,
    status,
    // execute,
  } = useFetch('/api/username', {
    query,
    // immediate: false,
    onResponse: () => {
      // ここで user_id.value にアクセスすると初回 fetch 時に tarnsform を通らない
      // console.log('fetched')
    },
    transform: (input): User['name'] | null => {
      return input?.data ?? null
    },
  })

  return {
    username: data,
    status,
    // fetchUserName: execute,
  }
}
