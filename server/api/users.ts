import { users } from '../src/users'
import { usersFilter } from '@/composables/users'

import type {
  User,
  ApiResponse,
} from '@/types/index'

export default defineEventHandler(async (event): Promise<ApiResponse<User[]>> => {
  console.log('fetched users on server')
  return {
    meta: {
      code: 200,
    },
    data: users.map(usersFilter),
  } satisfies ApiResponse<User[]>
})
