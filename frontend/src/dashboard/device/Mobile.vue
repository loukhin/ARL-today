<template>
    <div>
        <div id="app-header" class="container-fluid py-3">
            <div class="container text-center mt-4">
                <h5 class="font-weight-bold text-uppercase">ARL Today</h5>
                <div class="my-4" v-if="trainTo != null && nextStation != null">
                    <div class="display-4 font-weight-lighter">{{ schedules[0] }}</div>
                    <div class="font-weight-light">Train to {{ station.options[trainTo - 1].text }}</div>
                    <div class="font-weight-light">Next station : {{ station.options[nextStation - 1].text }}</div>
                </div>
                <div class="row">
                    <div class="col-12 mt-2 mb-n5">
                        <div id="app-box" class="bg-light rounded shadow px-4 py-3">
                            <multiselect
                                placeholder="Current"
                                v-model="station.from"
                                :options="station.options"
                                label="text"
                                :searchable="false"
                                :show-labels="false"
                                :allowEmpty="false"
                            >
                            </multiselect>
                            <multiselect
                                class="my-2"
                                placeholder="Destination"
                                v-model="station.to"
                                :options="station.options"
                                label="text"
                                :searchable="false"
                                :show-labels="false"
                                :allowEmpty="false"
                            >
                            </multiselect>
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
            <div class="container-fluid py-2" v-for="(schedule, index) in schedules" :key="schedule.index" :class="{ 'bg-white': stripeBackground(index) }">
                <div class="container py-1">
                    <div class="row">
                        <div class="col-4">
                            <span class="h2 font-weight-lighter">{{ schedule }}</span>
                        </div>
                        <div class="col-8 text-right my-auto">
                            <span class="font-weight-bold text-middle">{{ timeMargin(schedule) }}</span> Remaining
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    data() {
        return {
            trainTo: null,
            nextStation: null,
            station: {
                from: '',
                to: '',
                options: [
                    { value: 1, text: 'Suvarnabhumi' },
                    { value: 2, text: 'Ladkrabang' },
                    { value: 3, text: 'Ban Thap Chang' },
                    { value: 4, text: 'Hua Mak' },
                    { value: 5, text: 'Ramkhamhaeng' },
                    { value: 6, text: 'Makkasan' },
                    { value: 7, text: 'Ratchaprarop' },
                    { value: 8, text: 'Phaya Thai' }
                ]
            },
            schedules: []
        }
    },
    methods: {
        doEstimate() {
            let fromIndex = this.station.from.value
            let toIndex = this.station.to.value
            if (toIndex > fromIndex) {
                this.trainTo = 8
                this.nextStation = fromIndex + 1
            } else if (toIndex < fromIndex) {
                this.trainTo = 1
                this.nextStation = fromIndex - 1
            }
            let reqAPI = 'https://arl.loukhin.com/api/get/' + fromIndex + '/' + toIndex
            axios.get(reqAPI).then( res => {
                console.log(res.data)
                this.schedules = res.data.time
            })
        },
        stripeBackground(tableIndex) {
            if (tableIndex % 2 === 0) {
                return true
            } else {
                return false
            }
        },
        timeMargin(schedule) {
            let date = new Date()
            let scheduleTime = date
            scheduleTime.setHours(schedule.charAt(0) + schedule.charAt(1))
            scheduleTime.setMinutes(schedule.charAt(3) + schedule.charAt(4))
            return scheduleTime - date
        }
    }
}
</script>
<style scoped>
#app-header {
    color: #eee;
    background-image: linear-gradient(slateblue, cornflowerblue);
    transition: max-height 0.5s ease-out
}
#app-box {
    color: #333;

}
#dashboard-title {
    color: #a0a0a0;
}
.btn-purple {
    background-color: hsla(219, 79%, 66%, 0.5);
    color: #333;
}
</style>