<template>
    <div>
        <div id="app-header" class="container-fluid py-3">
            <div class="container text-center mt-4">
                <h3 class="font-weight-bold">ARL Today</h3>
                <div class="row">
                    <div class="col-12 mt-2 mb-n5">
                        <div id="app-box" class="bg-light rounded shadow p-3">
                            <b-form-select v-model="start" :options="stations">
                                <template>
                                    <option :value="null" disabled>สถานีต้นทาง</option>
                                </template>
                            </b-form-select>
                            <b-form-select class="my-2" v-model="destination" :options="stations">
                                <template>
                                    <option :value="null" disabled>สถานีปลายทาง</option>
                                </template>
                            </b-form-select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid py-5">
            <div class="container">
                <div>ระยะเวลา</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            start: null,
            destination: null,
            stations: [
                { value: '01svp', text: 'สุวรรณภูมิ' },
                { value: '02lkb', text: 'ลาดกระบัง' },
                { value: '03btc', text: 'บ้านทับช้าง' },
                { value: '04hmk', text: 'หัวหมาก' },
                { value: '05rkh', text: 'รามคำแหง' },
                { value: '06mks', text: 'มักกะสัน' },
                { value: '07rpr', text: 'ราชปรารภ' },
                { value: '08pyt', text: 'พญาไท' },
            ]
        }
    }
}
</script>
<style scoped>
#app-header {
    color: #eee;
    background-image: linear-gradient(royalblue, cornflowerblue)
}
#app-box {
    color: #333;
}
</style>