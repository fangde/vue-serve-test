<template>
    <div>
        Hello
        <h2>
            {{ what }}
        </h2>
        <h2>
            {{ baidu }}
        </h2>
        <canvas ref='image'>

        
        </canvas>

        <img ref='source_img' src="pic_trulli.jpg" alt="Trulli" width="500" height="333">

         <button ref='testbtn' @click='showImage'>ImageShow</button>
    </div>

   
</template>
<script>
/* eslint-disable no-alert, no-console */

import test from './service/test'
import {test2} from './service/test'
export default {

    data(){

        
       return { 
           what:  test('what'),
           baidu: test2('hello'),
           images: ["http://pic1.win4000.com/pic/c/0a/14c4480667.jpg",
            'http://img05.tooopen.com/images/20150330/tooopen_sy_83867387932.jpg'

           ]
          
       };
    },
    methods:{
        showImage(){
            
    
            console.log('clicked')
            console.log(this.$refs.testbtn)
            this.$refs.testbtn.innerText="waht"
            console.log(this.$refs.image)
            this.$refs.source_img.src="pic_trulli.jpg"

        }
    }
    
}
</script>

<style scoped>
canvas {
    width: 800px;
    height:600px;

}
</style>

