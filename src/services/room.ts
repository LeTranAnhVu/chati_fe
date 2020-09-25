import { backendApi } from './index'

const resource = 'rooms'
export default {
  fetchOne: async (id: string) => {
    return backendApi.get(`/${resource}/${id}`).then((res) => res.data)
  },
}
