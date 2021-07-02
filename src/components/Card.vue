<template>
  <b-card :img-src="this.item.picture ? this.item.picture : require('../assets/no-picture.png')" img-alt="Item picture" img-bottom :title="this.item.name" :sub-title="this.item.cuisine">
    <b-card-text>{{currency ? currency[0]+": "+(this.item.cost * currency[1]).toFixed(2) : 0 }}</b-card-text>
  </b-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { BCard, BCardTitle, BCardSubTitle, BCardText } from 'bootstrap-vue'
import Item from '@/models/Item'

Vue.component('b-card', BCard)
Vue.component('b-card-title', BCardTitle)
Vue.component('b-card-sub-title', BCardSubTitle)
Vue.component('b-card-text', BCardText)

@Component
export default class Card extends Vue {
  @Prop(Object) item!: Item
  @Prop(Array) currency!: [string, number]
}
</script>

<style lang="sass" scoped>
div
  max-width: 400px
  margin: 5px

img
  max-height: 15rem
  max-width: 15rem
  padding: .5rem

.card
  -webkit-box-shadow: 6px 8px 18px 0px rgba(0, 0, 0, 0.5)
  -moz-box-shadow: 6px 8px 18px 0px rgba(0, 0, 0, 0.5)
  box-shadow: 6px 8px 18px 0px rgba(0, 0, 0, 0.5)
  height: fit-content
</style>
