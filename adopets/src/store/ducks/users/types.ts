export enum UsersTypes {
  LOAD_REQUEST = '@repositories/LOAD_REQUEST',
  LOAD_SUCCCES = '@repositories/LOAD_SUCCCES',
  LOAD_FAILURE = '@repositories/LOAD_FAILURE'
}

export interface users {
  id: number
  username: string
  password: string
}

export interface UsersState {
  readonly data: users[]
  readonly loading: boolean
  readonly error: boolean
}