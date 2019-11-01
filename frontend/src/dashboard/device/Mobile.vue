<template>
    <div>
        <div id="app-header" class="container-fluid py-3">
            <div class="container text-center mt-4">
                <h5 class="font-weight-bold text-uppercase">ARL Today</h5>
                <div class="my-4">
                    <div class="display-4 font-weight-lighter">10:00</div>
                    <div class="font-weight-light">Next station : Ladkrabang</div>
                </div>
                <div class="row">
                    <div class="col-12 mt-2 mb-n5">
                        <div id="app-box" class="bg-light rounded shadow px-4 py-3">
                            <multiselect
                                placeholder="สถานีเริ่มต้น"
                                v-model="station.from"
                                :options="station.options"
                                label="text"
                                :searchable="false"
                                :show-labels="false"
                                :allowEmpty="false"
                            >
                            </multiselect>
                            <multiselect
                                class="mt-2"
                                placeholder="สถานีปลายทาง"
                                v-model="station.to"
                                :options="station.options"
                                label="text"
                                :searchable="false"
                                :show-labels="false"
                                :allowEmpty="false"
                            >
                            </multiselect>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid pt-5">
            <div class="container">
                <div id="dashboard-title" class="text-uppercase font-weight-bold">Incoming Train</div>
            </div>
        </div>
        <div class="container-fluid bg-white py-2 mt-1">
            <div class="container">
                <div class="row">
                    <div class="col-4">
                        <span class="h2 font-weight-lighter">10:08</span>
                    </div>
                    <div class="col-8 text-right my-auto">
                        <span class="font-weight-bold text-middle">City Line</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            station: {
                from: '',
                to: '',
                options: [
                    { value: '01svp', text: 'สุวรรณภูมิ' },
                    { value: '02lkb', text: 'ลาดกระบัง' },
                    { value: '03btc', text: 'บ้านทับช้าง' },
                    { value: '04hmk', text: 'หัวหมาก' },
                    { value: '05rkh', text: 'รามคำแหง' },
                    { value: '06mks', text: 'มักกะสัน' },
                    { value: '07rpr', text: 'ราชปรารภ' },
                    { value: '08pyt', text: 'พญาไท' },
                ]
            },
            schedules: [
                { time: '10:00', type: 'City Line' },
                { time: '10:08', type: 'City Line' },
                { time: '10:16', type: 'City Line' },
                { time: '10:24', type: 'City Line' },
            ]
        }
    }
}
</script>
<style scoped>
#app-header {
    color: #eee;
    background-image: linear-gradient(slateblue, cornflowerblue)
}
#app-box {
    color: #333;
    
}
#dashboard-title {
    color: #a0a0a0;
}
</style>