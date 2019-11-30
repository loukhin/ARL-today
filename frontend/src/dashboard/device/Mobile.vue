<template>
  <div>
    <div id="app-header" class="container-fluid py-3">
      <div class="container text-center mt-4">
        <span class="font-weight-lighter display-4 text-white">ARL Today</span>
        <div class="my-4" v-if="trainTo != null && nextStation != null">
          <div class="display-4 font-weight-lighter">{{ schedules[0] }}</div>
          <div class="font-weight-light">Train to {{ station.options[trainTo - 1].text }}</div>
          <div class="font-weight-light">Next station : {{ station.options[nextStation - 1].text }}</div>
          <div
            id="text-price"
            class="font-weight-lighter align-self-center mb-2"
          >Price: {{ price }} THB</div>
        </div>
        <div class="row">
          <div class="col-12 mt-2 mb-n5">
            <div id="app-box" class="bg-light rounded shadow px-4 py-3">
              <multiselect
                placeholder="Current"
                v-model="station.from"
                :options="originData"
                label="text"
                :searchable="false"
                :show-labels="false"
                :allowEmpty="false"
              ></multiselect>
              <multiselect
                class="my-2"
                placeholder="Destination"
                v-model="station.to"
                :options="destinationData"
                label="text"
                :searchable="false"
                :show-labels="false"
                :allowEmpty="false"
              ></multiselect>
              <multiselect
                class="my-2"
                placeholder="Time"
                v-model="selectedTime"
                :options="time"
                :searchable="false"
                :show-labels="false"
                :allowEmpty="false"
              ></multiselect>
              <div class="btn btn-purple w-100" v-on:click="doEstimate()">Estimate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="trainTo !== null && nextStation !== null">
      <div class="container-fluid pt-5 mb-2">
        <div class="container">
          <div id="dashboard-title" class="text-uppercase font-weight-bold">Incoming Train</div>
        </div>
      </div>
      <div
        class="container-fluid py-2"
        v-for="(schedule, index) in schedules"
        :key="index"
        :class="{ 'bg-white': stripeBackground(index) }"
      >
        <div class="container py-1">
          <div class="row">
            <div class="col-4">
              <span class="h2 font-weight-lighter">{{ schedule }}</span>
            </div>
            <div class="col-8 text-right my-auto">
              <span class="font-weight-bold text-middle">{{ timeRemaining(schedule) }}</span> Remaining
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      trainTo: null,
      nextStation: null,
      station: {
        from: "",
        to: "",
        options: [
          { value: 1, text: "Suvarnabhumi" },
          { value: 2, text: "Ladkrabang" },
          { value: 3, text: "Ban Thap Chang" },
          { value: 4, text: "Hua Mak" },
          { value: 5, text: "Ramkhamhaeng" },
          { value: 6, text: "Makkasan" },
          { value: 7, text: "Ratchaprarop" },
          { value: 8, text: "Phaya Thai" }
        ]
      },
      selectedTime: "Current Time",
      time: [
        'Current Time', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00',
        '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00',
        '21:00', '22:00', '23:00', '00:00'
      ],
      schedules: [],
      price: null
    };
  },
  computed: {
    originData() {
      return this.station.options.filter(val => {
        if (val.value !== this.station.to.value) return val;
      });
    },
    destinationData() {
      return this.station.options.filter(val => {
        if (val.value !== this.station.from.value) return val;
      });
    },
  },
  methods: {
    doEstimate() {
      let fromIndex = this.station.from.value;
      let toIndex = this.station.to.value;
      if (fromIndex === toIndex) return;
      if (toIndex > fromIndex) {
        this.trainTo = 8;
        this.nextStation = fromIndex + 1;
      } else if (toIndex < fromIndex) {
        this.trainTo = 1;
        this.nextStation = fromIndex - 1;
      }
      let reqAPI =
        "https://app.loukhin.com/arl-today/api/get/" + fromIndex + "/" + toIndex;
      axios.get(reqAPI).then(res => {
        this.schedules = res.data.time;
      });
    },
    timeRemaining(time) {
      let hours = time.split(":")[0];
      let minutes = time.split(":")[1];
      let remaining = new Date(
        new Date().setHours(hours, minutes, 0) - new Date().setSeconds(0)
      ).getMinutes();
      remaining += remaining > 1 ? " mins" : " min";
      return remaining;
    },
    stripeBackground(tableIndex) {
      if (tableIndex % 2 === 0) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>
<style scoped>
#app-header {
  color: #eee;
  background-image: linear-gradient(slateblue, cornflowerblue);
  transition: max-height 0.5s ease-out;
}
#app-box {
  color: #333;
}
#dashboard-title {
  color: #a0a0a0;
}
.btn-purple {
  background-color: hsla(219, 79%, 66%, 0.5);
  box-shadow: rgba(0, 0, 0, 0.2) 1px 1px 5px 1px;
  color: #333;
}
.btn-purple:hover {
  background-color: hsla(219, 56%, 56%, 0.575);
  box-shadow: rgba(0, 0, 0, 0.2) 1px 1px 5px 0px;
  cursor: pointer;
}
</style>