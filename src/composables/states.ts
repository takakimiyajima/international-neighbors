export type User = {
  id: number
  email: string
  firstName: string
  middleName?: string
  lastName: string
  gender?: string
  age: number
  nationality: string
  partnerId: number
  partnerNationality: string
  avatarURL: string
}

export const useUser = () => useState<User | null>('user', () => null)
