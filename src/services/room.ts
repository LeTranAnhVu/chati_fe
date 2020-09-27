import Resource from './resource'
import { RoomModel } from '../types'

class roomService extends Resource<RoomModel> {
  constructor() {
    super('rooms')
  }
  fetchOrCreateByUserId = async (userId: string): Promise<{ id: string }> => {
    return this._http
      .get(`/${this.resource}/users/${userId}`)
      .then((res) => res.data)
  }
}

export default new roomService()
