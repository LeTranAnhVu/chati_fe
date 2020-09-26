import { backendApi } from './index'
import { ACCESS_TOKEN, CurrentUser } from '../types'
import localstorageUtils from '../utils/localstorageUtils'
// import
const authService = {
  authByGoogle: async (tokenId: string): Promise<any> => {
    try {
      const {
        data: { user, accessToken },
      } = await backendApi.post('/auth/google', { tokenId })
      // saved to localStorage
      localstorageUtils.saveItem(ACCESS_TOKEN, accessToken)
      return user
    } catch (e) {
      throw e
    }
  },
  getUserInfo: async (): Promise<CurrentUser | null> => {
    try {
      const { data } = await backendApi.get('/auth/user-info')
      return data as CurrentUser
    } catch (e) {
      return null
    }
  },
  logout: (): void => {},
}

export default authService
