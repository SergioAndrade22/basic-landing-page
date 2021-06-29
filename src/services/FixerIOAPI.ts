import axios from 'axios'

export default class FixerIOAPI {
  public async getCurrencies (): Promise<[]> {
    const res = await axios.get(`http://data.fixer.io/api/latest?access_key=${process.env.fixerAPIKey}&symbols=EUR,USD,AUD,GBP,CAD,PLN`)
    return res.data
  }
}
