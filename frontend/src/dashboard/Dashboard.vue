<template>
  <div>
    <Mobile v-if="isMobileOnly"></Mobile>
    <Desktop v-else></Desktop>
  </div>
</template>
<script>
import Mobile from "./device/Mobile.vue";
import Desktop from "./device/Desktop.vue";
import { isMobileOnly } from "mobile-device-detect";

export default {
  data() {
    return {
      isMobileOnly
    };
  },
  components: {
    Mobile,
    Desktop
  }
};
</script>