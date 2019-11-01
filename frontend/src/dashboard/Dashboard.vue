<template>
    <div>
        <Mobile class="hidden-md-up"></Mobile>
        <Desktop class="hidden-lg-down"></Desktop>
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