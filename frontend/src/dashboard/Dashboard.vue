<template>
    <div>
        <div class="d-block d-md-none">
            <Mobile></Mobile>
        </div>
        <div class="d-none d-md-block">
            <Desktop></Desktop>
        </div>
    </div>
</template>
<script>
import Mobile from './device/Mobile.vue'
import Desktop from './device/Desktop.vue'

export default {
    components: {
        Mobile,
        Desktop
    }
}
</script>
<style scoped>

</style>