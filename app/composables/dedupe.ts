import type { User } from '@/types'

export const useDedupeUserNames = (dedupe: 'cancel' | 'defer' = 'cancel') => {
  const {
    data,
    status,
    execute,
  } = useFetch('/api/usernames', {
    dedupe,
    // immediate: false,
    watch: false,
    default: (): User['name'][] => [],
    transform: (input): User['name'][] => {
      console.log('transform', input?.data?.[2])
      return input?.data ?? []
    },
    onResponse() {
      console.log('onResponse')
    },
  })

  return {
    userNames: data,
    status,
    fetchUserNames: execute,
  }
}
