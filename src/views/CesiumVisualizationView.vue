<template>
  <div class="cesium-visualization">
    <div id="cesiumContainer" class="fullSize"></div>
    <div id="toolbar"></div>
  </div>
</template>

<script>
import { Cartesian3, Ion, Viewer } from 'cesium';
import "cesium/Build/Cesium/Widgets/widgets.css";
import points from "@/assets/points.json"

export default {
  name: 'CesiumVisualizationView',
  mounted() {
    this.addMarkerBillboards()
  },
  methods: {
    addMarkerBillboards() {
      Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4YzkxNGFiZi1kNjBiLTQwNGQtOGYxYy05OWQwOTdhYjI0ZmEiLCJpZCI6MTcyMzQxLCJpYXQiOjE2OTc1NDQ4NDV9.uw8el1skRdBkUrPYmksKoJpvZ66bn6X0drD-1OU7Znw';

      const viewer = new Viewer("cesiumContainer");

      for (let i = 0; i < points.length; i++) {
        viewer.entities.add({
          position: Cartesian3.fromDegrees(points[i].longitude, points[i].latitude),
          label: {
            text: `${points[i].label}`,
            font: "12px Helvetica",
            horizontalOrigin: 1,
            verticalOrigin: 20
          },
          billboard: {
            image: "https://static.tildacdn.com/tild3931-6333-4563-b537-376334356561/adres_.png",
            width: 25,
            height: 25,
          },
        })
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.fullSize {
  height: 100vh;
}
</style>
