export interface user {
  id: number
  username: string
  password: string
}

export interface UsersState {
  readonly data: user[]
  readonly loading: boolean
  readonly error: boolean
}