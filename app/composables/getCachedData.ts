import type { User, ApiResponse } from '@/types'

const useFetchedAtState = () => useState('fetchedAt', () => 0)

export const useFetchCachedUserNames = async (ttl = 10_000) => {
  const fetchedAtState = useFetchedAtState()
  const {
    data,
    status,
  } = useFetch('/api/usernames', {
    // immediate: false,
    watch: false,
    default: (): User['name'][] => [],
    transform: (input): User['name'][] => {
      console.log('transform')
      return input?.data ?? []
    },
    onResponse() {
      console.log('onResponse')
      fetchedAtState.value = Date.now()
    },
    // transform　と getCachedData を使用すると型を合わせるのが少し大変
    getCachedData: (key, nuxtApp) => {
      const data: User['name'][] = nuxtApp.payload.data[key] ?? nuxtApp.static.data[key]
      if (!data) {
        return null as unknown as User['name'][]
      }
      const fetchedAt = new Date(fetchedAtState.value)
      fetchedAt.setTime(fetchedAt.getTime() + ttl)
      const expirationDate = fetchedAt.getTime()
      const isExpired = expirationDate < Date.now()
      if (isExpired) {
        return null as unknown as User['name'][]
      }
      return data
    },
  })

  return {
    userNames: data,
    status,
    // fetchUserNames: (force = false) => execute({ _initial: force ?? undefined }),
  }
}

export const useCachedUserNames = (ttl = 10_000) => {
  const fetchedAtState = useFetchedAtState()
  const fetchKey = ref<string>()

  const {
    data,
    status,
    execute,
  } = useFetch('/api/usernames', {
    immediate: false,
    watch: false,
    default: (): User['name'][] => [],
    transform: (input): User['name'][] => {
      console.log('transform')
      return input?.data ?? []
    },
    onResponse() {
      console.log('onResponse')
      fetchedAtState.value = Date.now()
    },
    getCachedData: (key, nuxtApp) => {
      fetchKey.value ??= key
      const data: User['name'][] = nuxtApp.payload.data[key] ?? nuxtApp.static.data[key]
      if (!data) {
        console.log('data is not exists')
        return null as unknown as User['name'][]
      }
      const fetchedAt = new Date(fetchedAtState.value)
      fetchedAt.setTime(fetchedAt.getTime() + ttl)
      const expirationDate = fetchedAt.getTime()
      const isExpired = expirationDate < Date.now()
      if (isExpired) {
        console.log('expired')
        return null as unknown as User['name'][]
      }
      return data
    },
  })

  const fetchUserNames = async (cached = true) => {
    if (cached && fetchKey.value) {
      const { data: cachedData } = useNuxtData<User['name'][]>(fetchKey.value)
      if (cachedData.value != null && cachedData.value.length > 0) {
        data.value = cachedData.value
        return
      }
    }
    execute()
  }

  return {
    userNames: data,
    status,
    fetchUserNames,
    // fetchUserNames: (force = false) => execute({ _initial: force ?? undefined }),
    // fetchUserNames: (force = false) => execute({ _initial: force ?? undefined }),
  }
}
