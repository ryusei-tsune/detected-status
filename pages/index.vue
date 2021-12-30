<template>
  <v-container class="px-0" fluid style="max-width: 1400px">
    <v-card-text style="font-size: 5vmin; text-align: center; font-weight: bold"
      >状態可視化アプリ</v-card-text
    >
    <v-card-text></v-card-text>
    <v-card class="mx-auto" max-width="400" tile>
      <div v-for="(item, index) in link" :key="index">
        <v-row>
          <v-col cols="8">
            <v-card-text>
              <nuxt-link :to="item">
                {{ deviceName[index].Name }}({{ deviceName[index].MAC }})
              </nuxt-link>
            </v-card-text>
          </v-col>
          <v-col cols="4">
            <v-dialog v-model="isOpen" width="500">
              <template v-slot:activator="{ on, attrs }">
                <v-card-text class="d-flex justify-end">
                  <v-btn x-small v-bind="attrs" v-on="on">
                    <v-icon small>mdi-pencil</v-icon>
                  </v-btn>
                </v-card-text>
              </template>
              <v-card width="600" height="100">
                <v-row class="ma-0" justify="end">
                  <v-btn icon tile @click="isOpen = false">
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                </v-row>
                <v-card-text>
                  <v-row>
                    <v-col cols="9">
                      <v-text-field
                        v-model="newName"
                        outlined
                        dense
                        hide-details="auto"
                        label="New name"
                      >
                      </v-text-field>
                    </v-col>
                    <v-col cols="3">
                      <div class="d-flex justify-end pr-4 pt-1">
                        <v-btn small @click="updateDeviceName(index)">
                          <v-icon small>mdi-autorenew</v-icon>
                        </v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-dialog>
          </v-col>
        </v-row>
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
      isOpen: false,
      newName: "",
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
    async updateDeviceName(i) {
      try {
        const data = { MAC: this.deviceName[i].MAC, Name: this.newName };
        const res = await this.$axios.post("/api/deviceName", data);
        this.deviceName[i].Name = this.newName;
        this.isOpen = false;
      } catch (err) {
        console.log("updateDeviceName()", err);
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