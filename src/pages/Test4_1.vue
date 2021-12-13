<template>
  <v-chart class="chart" :option="option" />
</template>

<script>
    import { use } from "echarts/core";
    import { CanvasRenderer } from "echarts/renderers";
    import { PieChart } from "echarts/charts";
    import {
      TitleComponent,
      TooltipComponent,
      LegendComponent
    } from "echarts/components";
    import VChart, { THEME_KEY } from "vue-echarts";

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent
]);

export default {
  name: "Test4_1",
  components: {
    VChart
  },
  provide: {
    [THEME_KEY]: "dark"
  },
  data() {
    return {
      option: {
        title: {
          text: "Traffic Sources",
          left: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: [
            "Direct",
            "Email",
            "Ad Networks",
            "Video Ads",
            "Search Engines"
          ]
        },
        series: [
          {
            name: "Traffic Sources",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 2211, name: "Direct" },
              { value:333, name: "Email" },
              { value: 333, name: "Ad Networks" },
              { value: 1511, name: "Video Ads" },
              { value: 1222, name: "Search Engines" }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 1,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 1)"
              }
            }
          }
        ]
      }
    };
  }
};
</script>

<style scoped lang="scss">
.chart {
  height: 400px;
}
</style>