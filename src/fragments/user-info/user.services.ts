import { User } from '../../globals'
import { URL } from '../../globals'

const cachedUsers: Record<number, User> = {}

export const receiveRandomUser = (): Promise<User> => (
  new Promise(async (resolve, reject) => {
    const id = Math.floor(Math.random() * 9) + 1

    if (cachedUsers[id] !== undefined) {
      resolve(cachedUsers[id])
      return
    }

    try {
      const response = await fetch(`${URL}users/${id}`)
      const _user = (await response.json()) as User
      cachedUsers[id] = _user
      resolve(_user)
    } catch (e) {
      reject(e)
    }
  })
)