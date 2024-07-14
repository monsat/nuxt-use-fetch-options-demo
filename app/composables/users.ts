import type { User } from '@/types'

export const usersFilter = ({ id, name, age }: User): User => ({ id, name, age })

export const useUsers = () => {
  const {
    data,
    status,
    execute,
  } = useFetch('/api/users', {
    immediate: false,
    default: (): User[] => [],
    transform: (input): User[] => {
      console.log('transform')
      return input.data ?? []
      return input.data?.map(usersFilter) ?? []
      return input.data?.map(({ id, name, age }) => ({ id, name, age })) ?? []
    },
  })

  const adultUsers = computed(() => data.value.filter((user) => user.age >= 18) ?? [])

  return {
    users: data,
    adultUsers,
    status,
    fetchUsers: execute,
  }
}
