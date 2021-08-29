<template>
  <div class="main-container">
    <div>
      <h1>{{item.name}}: €{{item.cost}}</h1>
      <h3>{{item.cuisine}}</h3>
    </div>

    <div class="details">
      <img :src="item.picture ? item.picture : require('../assets/no-picture.png')" alt="Item picture">
      <div class="checkboxes">
        <label>
          Is vege?
          <input type="checkbox" v-model="item.is_vege" disabled>
        </label>
        <label>
          Is vegan?
          <input type="checkbox" v-model="item.is_vegan" disabled>
        </label>
        <label>
          Is coeliac?
          <input type="checkbox" v-model="item.is_coeliac" disabled>
        </label>
        <label>
          Has alcohol?
          <input type="checkbox" v-model="item.has_alcohol" disabled>
        </label>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import FamilySizeAPI from '@/services/FamilySizeAPI'
import { Component, Vue } from 'vue-property-decorator'
import Item from '@/models/Item'

@Component
export default class ItemInfo extends Vue {
  item: Item = new Item()
  familySizeService: FamilySizeAPI

  constructor () {
    super()
    this.familySizeService = new FamilySizeAPI()
  }

  created (): void {
    this.familySizeService.getMenuItem(Number(this.$route.params.id)).then((res) => {
      this.item = res.item
    })
  }
}
</script>

<style lang="sass" scoped>
img
  max-width: 30vw
  margin: 0 auto

label
  font-size: 1.3rem

h1
  max-width: 100vw

  @media (max-width: 600px)
    font-size: 1.8rem

.main-container
  display: flex
  flex-direction: column
  width: max-content
  margin: 1rem auto
  padding: 2rem
  -webkit-box-shadow: 3px 2px 6px 5px rgba(0,0,0,0.45)
  box-shadow: 3px 2px 6px 5px rgba(0,0,0,0.45)

  @media only screen and (max-width: 600px)
    margin: 1rem auto
    padding: 0.4rem

.details
  display: flex
  justify-content: center

  @media only screen and (max-width: 600px)
    flex-direction: column

.checkboxes
  display: flex
  flex-direction: column
  margin-left: 1.4rem
  justify-content: space-evenly
</style>
