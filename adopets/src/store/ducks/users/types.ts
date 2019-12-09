export enum UsersTypes {
  LOAD_REQUEST = '@users/LOAD_REQUEST',
  LOAD_SUCCCES = '@users/LOAD_SUCCCES',
  LOAD_FAILURE = '@users/LOAD_FAILURE'
}

export interface user {
  username: string
  password: string
}

export interface UsersState {
  readonly data: user[]
  readonly loading: boolean
  readonly error: boolean
}