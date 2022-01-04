<template>
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
              <v-btn small @click="EditName()">
                <v-icon small>mdi-autorenew</v-icon>
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  components: {},
  middleware: [],
  props: {
    index: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
      newName: "",
    };
  },
  watch: {},
  computed: {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeDestroy() {},
  methods: {
    EditName() {
      this.$emit("EditName", this.newName, this.index);
      this.isOpen = false;
    },
  },
};
</script>
<style scoped>
</style>