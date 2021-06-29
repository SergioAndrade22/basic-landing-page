import axios from 'axios'

export default class FamilySizeAPI {
  public async getMenu (): Promise<any> {
    const res = await axios.get(`${process.env.VUE_APP_FAMILYSIZE}/menu`)
    return res.data
  }

  public async getMenuItem (id: number): Promise<[]> {
    const res = await axios.get(`${process.env.VUE_APP_FAMILYSIZE}/menu/${id}`)
    return res.data
  }

  public async getMenuItemPicture (id: number): Promise<[]> {
    const res = await axios.get(`${process.env.VUE_APP_FAMILYSIZE}/menu/${id}/picture`)
    return res.data
  }
}
