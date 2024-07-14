import { users } from '../src/users'

import type {
  User,
  ApiResponse,
} from '@/types/index'

export default defineEventHandler(async (event): Promise<ApiResponse<string[]>> => {
  const now = Date.now()
  console.log('fetched usernames on server', now)
  return {
    meta: {
      code: 200,
    },
    data: users.map(({ name }) => `${name}:${now}`),
  } satisfies ApiResponse<string[]>
})
