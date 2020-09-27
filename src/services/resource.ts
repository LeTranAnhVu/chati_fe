import { backendApi } from './index'

export default class Resource<T> {
  protected _http = backendApi

  constructor(protected resource: string) {}
  create = async (payload: any): Promise<T> => {
    return this._http.post(`/${this.resource}`, payload).then((res) => res.data)
  }

  fetchAll = async (): Promise<T[]> => {
    return this._http.get(`/${this.resource}`).then((res) => res.data)
  }

  fetchOne = async (id: string): Promise<T> => {
    return this._http.get(`/${this.resource}/${id}`).then((res) => res.data)
  }
}
