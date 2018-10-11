<template>
    <div>
        Hello
        <h2>
            {{ what }}
        </h2>
        <h2>
            {{ baidu }}
        </h2>
        <canvas id='image'>

        </canvas>
         <button ref='mytestbar' @click='showImage'>ImageShow</button>
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
          
       };
    },
    methods:{
        showImage(){

            console.log('clicked')

        }
    }
    
}
</script>

<style scoped>
#image {
    width: 800px;
    height:600px;

}
</style>

