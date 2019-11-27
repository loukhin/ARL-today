<template>
  <div>
    <div id="box-top">
      <div id="header">
        <h1 id="head-title">ARL TODAY</h1>
        <div id="box-inside" class="boder rounded">
          <div class="p-3">
            <div id="app-box" class="col-12 p-3 card shadow d-flex align-self-end">
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
            </div>
            <div class="pt-3">
              <button
                type="button"
                v-on:click="doEstimate()"
                class="btn btn-primary btn-lg btn-block"
              >ประมาณเวลา</button>
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
        :key="schedule.index"
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
      schedules: []
    };
  },
  methods: {
    doEstimate() {
      let fromIndex = this.station.from.value;
      let toIndex = this.station.to.value;
      if (toIndex > fromIndex) {
        this.trainTo = 8;
        this.nextStation = fromIndex + 1;
      } else if (toIndex < fromIndex) {
        this.trainTo = 1;
        this.nextStation = fromIndex - 1;
      }
      let reqAPI =
        "https://arl.loukhin.com/api/get/" + fromIndex + "/" + toIndex;
      axios.get(reqAPI).then(res => {
        console.log(res.data);
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
#header {
  width: 100%;
  height: 50px;
}
#head-title {
  text-align: center;
}

#box-top {
  width: 100%;
  height: 40vh;
  color: white;
  background-image: linear-gradient(slateblue, cornflowerblue);
  position: relative;
}

#box-inside {
  width: 40%;
  max-height: 40vh;
  color: black;
  background-color: rgb(255, 255, 255);
  margin: auto;
}

#box-bottom {
  width: 100%;
  height: 60vh;
  background-image: linear-gradient(rgb(228, 223, 223), rgb(196, 194, 194));
  position: relative;
  z-index: -1;
}

#text {
  color: rgb(163, 160, 160);
  font-size: 25px;
}

/*
        !! CSS Here !!
        พยายามใช้ Bootstrap / Bootstrap Vue
        ถ้าต้องการเพิ่ม style ระวังเรื่องชื่อ class ด้วย
        แนะนำให้ใช้ id
        ตัวอย่างเช่น ...

        // # คือ id
        #app-header {
            background-color: #333;
        }
        // . คือ class
        .app-header {
            background-color: #333;
        }
     */
</style>