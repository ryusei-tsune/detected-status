<template>
  <v-menu
    v-model="isOpen"
    :close-on-content-click="false"
    :nudge-right="40"
    offset-y
    min-width="auto"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="displayDate"
        prepend-icon="mdi-calendar-month"
        dense
        hide-details="auto"
        :label=labelString
        v-bind="attrs"
        v-on="on"
        style="font-size: 15px"
      ></v-text-field>
    </template>
    <v-date-picker v-model="date" @input="datePick(date)"></v-date-picker>
  </v-menu>
</template>
<script>
export default {
  components: {},
  middleware: [],
  props: {
    labelString: {
      type: String,
      required: true,
    },
    period: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
      displayDate: "",
      //   date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      //     .toISOString()
      //     .substr(0, 10),
      date: null,
    };
  },
  watch: {},
  computed: {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeDestroy() {},
  methods: {
    datePick(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      if (this.period) {
        this.isOpen = false;
        this.displayDate = `${year}/${month}/${day}`;
        this.$emit("setDate", this.date, true);
      } else {
        this.isOpen = false;
        this.displayDate = `${year}/${month}/${day}`;
        this.$emit("setDate", this.date, false);
      }
      console.log(this.date)
    },
  },
};
</script>
<style scoped>
</style>