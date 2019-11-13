<template>
  <!--
        !! HTML Here !!
        เขียนใน <div></div> ที่เตรียมไว้ให้เท่านั้น
  -->
  <div>
    <div id="box-top">
      <div id="header">
        <h1 id="head-title">ARL TODAY</h1>
        <div id="box-inside" class="boder rounded">
          <div class="p-3">
            <div class="form-group">
              <label for="exampleFormControlSelect1">สถานีต้นทาง</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>เลือกสถานี</option>
                <option>A1 สุวรรณภูมิ</option>
                <option>A2 ลาดกระบัง</option>
                <option>A3 บ้านทับช้าง</option>
                <option>A4 หัวหมาก</option>
                <option>A5 รามคำแหง</option>
                <option>A6 มักกะสัน</option>
                <option>A7 ราชปรารภ</option>
                <option>A8 พญาไท</option>
              </select>
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect1">สถานีปลายทาง</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>เลือกสถานี</option>
                <option>A1 สุวรรณภูมิ</option>
                <option>A2 ลาดกระบัง</option>
                <option>A3 บ้านทับช้าง</option>
                <option>A4 หัวหมาก</option>
                <option>A5 รามคำแหง</option>
                <option>A6 มักกะสัน</option>
                <option>A7 ราชปรารภ</option>
                <option>A8 พญาไท</option>
              </select>
            </div>
            <div class="pt-3">
              <button type="button" class="btn btn-primary btn-lg btn-block">ประมาณเวลา</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
    </div>
  </div>
</template>
<script>
export default {};
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