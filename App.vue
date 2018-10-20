<template>
    <div>
        Hello
        <h2>
            {{ what }}
        </h2>
        <h2>
            {{ baidu }}
        </h2>
       

        <img ref='source_img' src="im1.jpg" alt="Trulli" width="500" height="333">
        <canvas ref='image'>
        </canvas>

         <button ref='testbtn' @click='showImage'>ImageShow</button>
    </div>

   
</template>
<script>
/* eslint-disable no-alert, no-console */

import test from "./service/test";
import { test2 } from "./service/test";
export default {
  data() {
    return {
      what: test("what"),
      baidu: test2("hello"),
      images: ["im1.jpg", "im2.jpg", "im3.jpg"],
      sequence: []
    };
  },
  methods: {
    showImage() {
      console.log("clicked");
      console.log(this.$refs.testbtn);
      this.$refs.testbtn.innerText = "waht";
      console.log(this.$refs.image);
      this.$refs.source_img.src = "./im1.jpg";

     console.log(process.env.VUE_APP_HELLO);
    },
    loadImage() {
      function load(counter) {
        let p = new Image();
        p.src = this.images[counter];
        p.onload();
      }
    }
  }
};
</script>

<style scoped>
canvas {
  width: 800px;
  height: 600px;
}
</style>

