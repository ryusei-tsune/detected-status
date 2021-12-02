<template>
  <v-container class="px-0" fluid style="max-width: 1400px">
    <v-row justify="center">
      <v-col cols="12" sm="12" md="6">
        <Chart/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Chart from "@/components/test/Chart.vue";

export default {
  components: {
    Chart,
  },
  middleware: [],
  data() {
    return {}
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