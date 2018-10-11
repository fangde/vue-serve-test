
/* eslint-disable no-alert, no-console */
import GPU from 'gpu.js';


const gpu=new GPU();


console.log('hello');

function test(name){
    return name+'baidu';
}

function test2(name){
    return name+"renmin";
}



export default test ;
export {test2,gpu}