<template>
  <v-container class="px-0" fluid style="max-width: 1400px">
    <nuxt-link to="/devices/aaaa">aaaa</nuxt-link>
    <nuxt-link to="/devices/bbbb">bbbb</nuxt-link>
    <nuxt-link to="/devices/cccc">cccc</nuxt-link>
    <!-- <v-card-text>
      <v-btn color="primary" @click="requestData()"> リクエスト </v-btn>
    </v-card-text> -->
    <v-row justify="center">
      <v-col cols="12" style="text-align: center" v-if="temperature">
        temperature
        <GChart
          :type="chartType"
          :data="temperature"
          :options="chartOptions"
          :createChart="
            (el, google, type) => {
              return new google.visualization[type](el);
            }
          "
        />
      </v-col>
      <v-col cols="12" style="text-align: center" v-if="humidity">
        humidity
        <GChart
          :type="chartType"
          :data="humidity"
          :options="chartOptions"
          :createChart="
            (el, google, type) => {
              return new google.visualization[type](el);
            }
          "
        />
      </v-col>
      <v-col cols="12" style="text-align: center" v-if="brightness_level">
        brightness_level
        <GChart
          :type="chartType"
          :data="brightness_level"
          :options="chartOptions"
          :createChart="
            (el, google, type) => {
              return new google.visualization[type](el);
            }
          "
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { GChart } from "vue-google-charts";
//import Chart from "@/components/test/Chart.vue";

export default {
  components: {
    GChart,
  },
  middleware: [],
  data() {
    return {
      chartType: "LineChart",
      chartOptions: {
        chart: {
          title: "room status",
        },
      },
      resData: null,
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
    //const {data} = await this.$axios.get("/api/get_DeviceName")
    // requestData().catch(this.onError);
    // requestData2().catch(this.onError);
    requestData()
  },
  beforeDestroy() {},
  methods: {
    // onError(err) {
    //   if (!this.isOpenErrorDialog) this.$set(this, "errorMessages", []);
    //   this.isOpenErrorDialog = true;
    //   this.errorMessages.push(err.message);
    // },
    async requestData() {
      const { data } = await this.$axios.get("/api/getdata");
      this.$set(this, "resData", data.body);
      console.log(this.resData);
      this.temperature = [];
      this.humidity = [];
      this.brightness_level = [];
      this.temperature.push(["time", "data"]);
      this.humidity.push(["time", "data"]);
      this.brightness_level.push(["time", "data"]);
      this.resData.forEach((row) => {
        this.temperature.push([row.created_at, Number(row.temperature)]);
        this.humidity.push([row.created_at, Number(row.humidity)]);
        this.brightness_level.push([
          row.created_at,
          Number(row.brightness_level),
        ]);
      });
      console.log(this.temperature);
    },
  },
};
</script>