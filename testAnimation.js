img=new Image()


let images=[
'./public/0006.png',
'./public/0009.png',
'./public/0010.png'
]

canvas=document.getElementById('plot');


ctx=canvas.getContext('2d')

ctx.drawImage(img,0,0)



let counter=0;

let timer

const g=(timestep)=>{

    console.log(timestep)
    counter=counter+1
    len=images.length
    name=images[counter%len]
    console.log(counter,name)
    img.src=name

}

img.onload=()=>{
    console.log('image loaded')
   


    ctx.drawImage(img,0,0)

    timer=setTimeout(g,200)
    
}

//load next


img.src='./public/0006.png'



s=()=>{

    console.log('stop')
    clearTimeout(timer)   
}
btn=document.getElementById('stop')

btn.onclick=s

p=()=>{

    counter=0;
    img.src=images[0]

}


pbtn=document.getElementById('play')

pbtn.onclick=p;


