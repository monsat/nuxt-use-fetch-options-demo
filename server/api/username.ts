import { users } from '../src/users'

import type {
  User,
  ApiResponse,
} from '@/types/index'

export default defineEventHandler(async (event): Promise<ApiResponse<string>> => {
  const query = getQuery(event)

  const user = users.find((user) => user.id === query.user_id)

  if (user == null) {
    return {
      meta: {
        code: 400,
        message: 'user not found',
      },
      data: null,
    } satisfies ApiResponse<string>
  }

  return {
    meta: {
      code: 200,
    },
    data: user.name,
  } satisfies ApiResponse<string>
})
