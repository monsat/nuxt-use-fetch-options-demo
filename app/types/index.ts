export type User = {
  id: string
  name: string
  age: number
}

export type ApiResponse<T> = {
  meta: {
    code: 200 | 400
    message?: string
  }
  data: T | null
}

export type AppUser = User & {
  isAdult: boolean
}
