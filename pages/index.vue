<template>
  <v-container class="px-0" fluid style="max-width: 1400px">
    <v-card-text  style="font-size:5vmin; text-align: center; font-weight: bold;">状態可視化アプリ</v-card-text>
    <v-card-text></v-card-text>
    <v-card class="mx-auto" max-width="400" tile>
      <div v-for="(item, index) in link" :key="index">
        <v-card-text>
          <nuxt-link :to="item">
            {{ deviceName[index].Name }}({{ deviceName[index].MAC }})
          </nuxt-link>
        </v-card-text>
      </div>
    </v-card>
  </v-container>
</template>

<script>
export default {
  components: {},
  middleware: [],
  data() {
    return {
      resData: null,
      deviceName: [],
      link: [],
    };
  },
  watch: {},
  computed: {},
  created() {},
  beforeMount() {},
  mounted() {
    this.getDeviceName();
    //const {data} = await this.$axios.get("/api/get_DeviceName")
    // requestData().catch(this.onError);
    // requestData2().catch(this.onError);
  },
  beforeDestroy() {},
  methods: {
    async getDeviceName() {
      try {
        const { data } = await this.$axios.get("/api/devices");
        this.$set(this, "resData", data.body);
        this.resData.forEach((row) => {
          this.deviceName.push({ MAC: row.id, Name: row.name });
          const url = "/devices/" + row.id;
          this.link.push(url);
        });
      } catch (err) {
        console.log("getDeviceName()", err);
      }
    },

    // onError(err) {
    //   if (!this.isOpenErrorDialog) this.$set(this, "errorMessages", []);
    //   this.isOpenErrorDialog = true;
    //   this.errorMessages.push(err.message);
    // },
  },
};
</script>