<template>
  <GChart
    :type="chartType"
    :data="data"
    :options="chartOptions"
    :createChart="
      (el, google, type) => {
        return new google.visualization[type](el);
      }
    "
  />
</template>
<script>
import { GChart } from "vue-google-charts";
export default {
  components: {
    GChart
  },
  middleware: [],
  props: {
    data: {
      type: Array,
      required: false,
      default:[]
    },
    chartOptions: {
      type: Object,
      required: false,
      default: {}
    }
  },
  data() {
    return {
      chartType: "LineChart",
    };
  },
  watch: {},
  computed: {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeDestroy() {},
  methods: {},
};
</script>
<style scoped>
</style>