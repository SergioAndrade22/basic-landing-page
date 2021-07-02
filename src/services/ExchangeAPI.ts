import axios from 'axios'

export default class ExchangeAPI {
  public async getCurrencies (): Promise<[]> {
    const res = await axios.get(`https://v6.exchangerate-api.com/v6/${process.env.VUE_APP_EXCHANGE_KEY}/latest/EUR`)
    return res.data
  }
}
