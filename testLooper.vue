<template>
	<vue-perfectlooper v-bind="loop"></vue-perfectlooper>
</template>
<script>
import VuePerfectlooper from "vue-perfectlooper";

export default {
  components: { VuePerfectlooper },
  data: function() {
    return {
      loop: {
        id: "echo",
        poster: "./0010.png",
        src: ["./0010.png", "./0011.png", "./0013.png"]
      }
    };
  }
};
</script>