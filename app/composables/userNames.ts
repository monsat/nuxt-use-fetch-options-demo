import type { User } from '@/types'

export const useUserNames = () => {
  const {
    data,
    status,
    execute,
  } = useFetch('/api/users', {
    immediate: false,
    transform: (input): User['name'][] => {
      return input?.data?.map((user) => user.name) ?? []
    },
  })

  return {
    userNames: data,
    status,
    fetchUserNames: execute,
  }
}
