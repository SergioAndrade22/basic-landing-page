<template>
    <div>
        <h1>MENU</h1>

        <div>
            <label style="display: block;" for="currency-selector">
                Currency:

                <template v-if="currencies.length === 0">
                    <b-spinner variant="primary" label="Spinning"></b-spinner>
                </template>

                <template v-else>
                    <select name="currency-selector" id="currency-selector" v-model="selectedCurrency">
                        <option v-for="currency in currencies" :key="currency[0]" :value="currency" :selected="currency[0] === 'EUR'">{{currency[0]}}</option>
                    </select>
                </template>
            </label>

            <b-spinner v-if="menu.length === 0" label="Loading..."></b-spinner>

            <div v-else class="card-container">
                <Card v-for="item in menu" :key="item.id" :item="item" :currency="selectedCurrency"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import FamilySizeAPI from '../services/FamilySizeAPI'
import ExchangeAPI from '../services/ExchangeAPI'
import Card from '../components/Card.vue'
import Item from '@/models/Item'

@Component({
  components: {
    Card
  }
})
export default class Menu extends Vue {
    familySizeService: FamilySizeAPI
    exchangeService: ExchangeAPI
    currencies: [string, number][] = []
    selectedCurrency = ['EUR', 1]
    menu: Item[] = [];

    constructor () {
      super()
      this.familySizeService = new FamilySizeAPI()
      this.exchangeService = new ExchangeAPI()
    }

    created (): void {
      this.familySizeService.getMenu().then((res) => {
        this.menu.push(...res.menu)
      })
      this.exchangeService.getCurrencies().then((res: any) => {
        for (const rate of Object.entries(res.conversion_rates)) {
          this.currencies.push(rate as [string, number])
        }
      })
    }
}
</script>

<style lang="sass" scoped>
.card-container
  display: grid
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr))
</style>
