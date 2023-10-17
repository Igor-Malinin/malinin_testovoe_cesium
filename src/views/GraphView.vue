<template>
  <div class="graph">
    <h1 class="graph__title">План-график с данными из файла</h1>

    <div id="visualization" class="vis-timeline"></div>
  </div>
</template>

<script>
import vis from "@/lib/vis-timeline-graph2d.min"
import shoot from "@/assets/shoot.json"

export default {
  name: "GraphView",
  mounted() {
    this.visTimeline()
  },
  methods: {
    visTimeline() {
      let container = document.getElementById('visualization')

      let groups = new vis.DataSet([{
        id: shoot[0].satellite,
        content: shoot[0].satellite,
        style: "background-color: #ecf0f3; color: #285f9d"
      }])

      let items = new vis.DataSet()
      for (let i = 0; i < shoot.length; i++) {
        items.add({
          id: shoot[i].id,
          content: shoot[i].point,
          start: shoot[i].startTimePeriod,
          end: shoot[i].endTimePeriod,
          group: shoot[i].satellite,
          style: "border: 1px solid #596f88; background-color: #36708f; color: #f0f6ba"
        })
      }

      let options = {
        orientation: "top",
        stack: false,
      }

      let timeline = new vis.Timeline(container, items, groups, options)
    }
  }
}
</script>

<style lang="scss" scoped>
.graph__title {
  font-size: 18px;
  letter-spacing: 1px;
  text-align: center;
  margin: 20px 0;
}
.vis-timeline {
  font-family: "Roboto";
  margin: 0 30px;
  padding: 10px;
  border: 2px solid $active;
  border-radius: 4px;
  background-color: $white;
}
</style>