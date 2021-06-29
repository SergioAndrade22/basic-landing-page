<template>
    <div id="map-container">
        <l-map
            style="height: 80%; width: 100%"
            :zoom="zoom"
            :center="center"
            @update:zoom="zoomUpdated"
            @update:center="centerUpdated"
            @update:bounds="boundsUpdated"
        >
            <l-tile-layer :url="url"></l-tile-layer>
            <l-marker :lat-lng="markerLatLng">
                <l-tooltip :options="{ permanent: true }">{{popupText}}</l-tooltip>
            </l-marker>
        </l-map>
        <p class="footnote">
            <i class="fas fa-map-marker-alt"></i>
            {{location}}
        </p>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { LMap, LTileLayer, LMarker, LTooltip } from 'vue2-leaflet'
import { Icon } from 'leaflet'

// The following 2 methods solve the missing marker icon
delete Icon.Default.prototype._getIconUrl
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

Vue.component('l-map', LMap)
Vue.component('l-tile-layer', LTileLayer)
Vue.component('l-marker', LMarker)
Vue.component('l-tooltip', LTooltip)

@Component
export default class Map extends Vue {
    private url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    private zoom = 17
    private center = [37.563379, -77.465775]
    private markerLatLng = [37.563379, -77.465775]
    private bounds: [] = []
    private location = '2401 W Leigh St, Richmond, VA 23220, USA'
    private popupText = 'We are here!'

    zoomUpdated (zoom: number): void {
      this.zoom = zoom
    }

    centerUpdated (center: number[]): void {
      this.center = center
    }

    boundsUpdated (bounds: []): void {
      this.bounds = bounds
    }
}
</script>

<style lang="sass" scoped>
#map-container
    height: 30rem

.footnote
    text-align: right
    font-size: 75%
    font-weight: 300
    line-height: 2
    align-self: center
    color: grey
</style>
