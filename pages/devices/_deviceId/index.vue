<template>
  <v-container>
    <!-- {{ $route.params.deviceId }}の詳細 -->
    <v-card-title v-if="resName">
      {{ resName[0].name }}({{ resName[0].id }})
    </v-card-title>
    <v-row justify="center">
      <v-col cols="12" style="text-align: center" v-if="temperature">
        temperature
        <Chart :data="temperature" :chartOptions="temperatureOptions" />
      </v-col>
      <v-col cols="12" style="text-align: center" v-if="humidity">
        humidity
        <Chart :data="humidity" :chartOptions="humidityOptions" />
      </v-col>
      <v-col cols="12" style="text-align: center" v-if="brightness_level">
        brightness_level
        <Chart
          :data="brightness_level"
          :chartOptions="brightness_levelOptions"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import Chart from "@/components/Chart.vue";
//import Chart from "../../../components/Chart.vue";
export default {
  head() {
    return {
      title: "",
    };
  },
  layout: "default",
  components: {
    Chart,
  },
  middleware: [],
  data() {
    return {
      temperatureOptions: {
        chart: { title: "temperature" },
        colors: ["#d95f02"],
        backgroundColor: "#f1f8e9",
        vAxis: {
          title: "気温",
          // viewWindow: {
          //   min: -10,
          //   max: 40,
          // },
          ticks: [-15, 0, 15, 30, 45],
        },
      },
      humidityOptions: {
        chart: { title: "humidity" },
        colors: ["#7570b3"],
        vAxis: {
          title: "湿度",
          viewWindow: {
            min: 0,
            max: 100,
          },
        },
      },
      brightness_levelOptions: {
        chart: { title: "brightness_level" },
        colors: ["#FFD700"],
        vAxis: {
          title: "明るさ",
          viewWindow: {
            min: 0,
            max: 5000,
          },
        },
      },
      resData: null,
      resName: null,
      temperature: null,
      humidity: null,
      brightness_level: null,
    };
  },
  watch: {},
  computed: {},
  created() {},
  beforeMount() {},
  mounted() {
    this.getData();
  },
  beforeDestroy() {},
  methods: {
    async getData() {
      try {
        const { data } = await this.$axios.get(
          "/api/devices/" + this.$route.params.deviceId + "/measured-data"
        );
        this.$set(this, "resData", data.body);
        this.$set(this, "resName", data.name);
        console.log(this.resName);
        this.temperature = [];
        this.humidity = [];
        this.brightness_level = [];
        this.temperature.push(["time", "temperature"]);
        this.humidity.push(["time", "humidity"]);
        this.brightness_level.push(["time", "brightness_level"]);
        this.resData.forEach((row) => {
          var YMD = row.created_at.split("T")[0];
          var HM = row.created_at.split("T")[1].split(".")[0];
          var timeInfo = YMD + "\n" + HM;
          console.log(timeInfo);
          this.temperature.push([timeInfo, Number(row.temperature)]);
          this.humidity.push([timeInfo, Number(row.humidity)]);
          this.brightness_level.push([timeInfo, Number(row.brightness_level)]);
        });
      } catch (err) {
        console.log("getData()", err);
      }
    },
  },
};
</script>
<style scoped>
</style>