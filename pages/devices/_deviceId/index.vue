<template>
  <v-container>
    <!-- {{ $route.params.deviceId }}の詳細 -->
    <v-row>
      <v-col cols="12" lg="7">
        <v-card-title v-if="resName">
          {{ resName[0].name }}({{ resName[0].id }})
        </v-card-title>
      </v-col>
      <v-col cols="5" lg="2">
        <DatePick
          labelString="始まり"
          :period="true"
          @setDate="SetDate"
        ></DatePick>
      </v-col>
      <v-col cols="5" lg="2">
        <DatePick
          labelString="終わり"
          :period="false"
          @setDate="SetDate"
        ></DatePick>
      </v-col>
      <v-col cols="2" lg="1">
        <v-btn @click="Filter()"> 絞り込み </v-btn>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" style="text-align: center" v-if="temperature">
        <v-card-text class="item-text" style="color: tomato">
          温度
        </v-card-text>
        <Chart :data="temperature" :chartOptions="temperatureOptions" />
      </v-col>
      <v-col cols="12" style="text-align: center" v-if="humidity">
        <v-card-text class="item-text" style="color: deepskyblue">
          湿度
        </v-card-text>
        <Chart :data="humidity" :chartOptions="humidityOptions" />
      </v-col>
      <v-col cols="12" style="text-align: center" v-if="brightness_level">
        <v-card-text class="item-text" style="color: orange">
          明るさ
        </v-card-text>
        <Chart
          :data="brightness_level"
          :chartOptions="brightness_levelOptions"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import Chart from "~/components/devices/Chart.vue";
import DatePick from "@/components/devices/DatePick.vue";
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
    DatePick,
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
        pointSize: 5,
      },
      humidityOptions: {
        chart: { title: "humidity" },
        colors: ["#7570b3"],
        backgroundColor: "#f1f8e9",
        vAxis: {
          title: "湿度",
          viewWindow: {
            min: 0,
            max: 100,
          },
        },
        pointSize: 5,
      },
      brightness_levelOptions: {
        chart: { title: "brightness_level" },
        colors: ["#32cd32"],
        backgroundColor: "#f1f8e9",
        vAxis: {
          title: "明るさ",
          viewWindow: {
            min: 0,
            max: 5000,
          },
        },
        pointSize: 5,
      },
      resData: null,
      resName: null,
      temperature: null,
      humidity: null,
      brightness_level: null,
      start: true,
      end: false,
      startDate: null,
      endDate: null,
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
        const queryStart = this.$route.query.start;
        const queryEnd = this.$route.query.end;
        console.log(queryStart);
        console.log(queryEnd);
        let url;
        if (queryStart && queryEnd) {
          url = `/api/devices/${this.$route.params.deviceId}/measured-data/span/${queryStart}/${queryEnd}/?tz=Asia/Tokyo`;
        } else {
          url = `/api/devices/${this.$route.params.deviceId}/measured-data`;
        }
        const { data } = await this.$axios.get(url);
        this.$set(this, "resData", data.body);
        this.$set(this, "resName", data.name);
        console.log(data);
        this.temperature = [];
        this.humidity = [];
        this.brightness_level = [];
        this.temperature.push(["time", "temperature"]);
        this.humidity.push(["time", "humidity"]);
        this.brightness_level.push(["time", "brightness_level"]);
        this.resData.forEach((row) => {
          var date = new Date(row.created_at);
          this.temperature.push([date, Number(row.temperature)]);
          this.humidity.push([date, Number(row.humidity)]);
          this.brightness_level.push([date, Number(row.brightness_level)]);
        });
      } catch (err) {
        console.log("getData()", err);
        console.log(err?.response?.data);
      }
    },
    SetDate(date, period) {
      console.log(period);
      if (period) {
        this.startDate = date;
      } else {
        this.endDate = date;
      }
    },
    async Filter() {
      await this.$router.replace({
        path: `/devices/${this.$route.params.deviceId}/`,
        query: { start: this.startDate, end: this.endDate },
      });
      this.$nextTick(() => {
        this.getData();
      });
    },
  },
};
</script>
<style scoped>
.item-text {
  font-size: 25px;
}
</style>