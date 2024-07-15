import type { User } from '@/types'

export const useRefreshUsers = async () => {
  const {
    data,
    status,
    refresh,
  } = useFetch('/api/users', {
    // immediate: false,
  })

  const users = computed(() => data.value?.data ?? [])

  return {
    users,
    status,
    refreshUsers: refresh,
  }
}
