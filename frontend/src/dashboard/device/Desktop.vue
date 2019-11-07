<template>
    <!--
        !! HTML Here !!
        เขียนใน <div></div> ที่เตรียมไว้ให้เท่านั้น
     -->

    <div id="box"> 
        <div id="header">
            <h1 id="head-titel">ARL - today </h1>
            <div id="box-inside">



            </div>

        </div>
    </div>








    
</template>
<script>
export default {

}
</script>
<style scoped>
    #header{
        width: 100%;
        height: 50px;
    }
    #head-titel {
        text-align: center;
    }

    #box {
        width: 100% ;
        height: 40vh ;
        /* padding: 50px; */
        background-color: coral;
        position: fixed;

    }

    #box-inside {
        width: 40% ;
        height: 50vh;
        background-color: rgb(255, 255, 255);
        margin: auto;
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