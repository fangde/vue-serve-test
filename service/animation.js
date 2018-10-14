
export default function loadimages(ctx){

    let img=new Image();
    let img.src='./0006.png';
    img.onload=()=>ctx.drawImage(img,0,0);

}