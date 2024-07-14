import { users } from '../../src/users'

import type {
  User,
  ApiResponse,
} from '@/types/index'

export default defineEventHandler(async (event): Promise<ApiResponse<User>> => {
  const user_id = getRouterParam(event, 'user_id')

  const user = users.find((user) => user.id === user_id)

  if (user == null) {
    return {
      meta: {
        code: 400,
        message: 'user not found',
      },
      data: null,
    } satisfies ApiResponse<User>
  }

  return {
    meta: {
      code: 200,
    },
    data: user,
  } satisfies ApiResponse<User>
})
