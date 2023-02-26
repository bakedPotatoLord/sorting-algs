import { wait } from './helpers'
import './style.css'



async function selectionSort(){
  working = true
  for(let i = 0;i<arr.length;i++){
    let max = i
    for(let j =i ;j<arr.length;j++){
      max = arr[max]<arr[j] ? max : j
      await new Promise((res)=>setTimeout(res,10))
      active = j
      draw()
    }
    swap(arr,max,i)
  }
  endSort()
}


async function insertionSort(){
  console.log("insertion starting")
  working = true
  for(let i=1;i<arr.length;i++){

    let temp = arr[i];
    let j=i-1;

    while(j>=0 && arr[j] > temp){
      arr[j+1] = arr[j];
      j--;
      await new Promise((res)=>setTimeout(res,10))
      active = j
      draw()
    }
    arr[j+1] = temp;
    draw()
  }
  endSort()
}


export function swap(arr:any[],i1:number|string,i2:number|string){
  let temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp;
}

let working = false
let active = -1
let sorted = true
let c = document.querySelector('canvas')
let ctx = c.getContext('2d')
const cw = c.width = 400
const ch = c.height = 300
let arr=Array(40).fill(undefined).map((_el,i)=>(250/39)*(i+1))


document.getElementById("randomize")
.onclick = ()=>{if(!working) shuffle()}
document.getElementById("bubbleSort")
.onclick= ()=>{if(!working){bubbleSort()}}
document.getElementById("selectionSort")
.onclick=()=>{if(!working){selectionSort()}}
document.getElementById("insertionSort")
.onclick=()=>{if(!working){insertionSort()}}

function shuffle(){
  console.log('randomizing')
  for(let i in arr){
    swap(arr,Math.floor(Math.random()*20),i)
  }
  draw()
}


export async function bubbleSort (){  
  let bubbleSortI = 1
  working = true

  while(bubbleSortI<arr.length){
    if(arr[bubbleSortI-1] > arr[bubbleSortI]){
      swap(arr,bubbleSortI-1,bubbleSortI)
      bubbleSortI=1
    }else{
      bubbleSortI++
    }
    active = bubbleSortI
    draw()
    if(Math.random() > 0.85){
      await new Promise((res,rej)=>setTimeout(res,0))
    }
  }
  endSort()
}

function endSort(){
  active = -1
  working = false
  draw()
}

export function draw(){
  ctx.clearRect(0,0,cw,ch)
  ctx.save()
  
  for(let i in arr){
    ctx.fillStyle = sorted ? 'green': '#000000';
    ctx.fillStyle = (active >=0 && parseInt(i) ==  active) ? 'red' : ctx.fillStyle;
    ctx.fillRect(0,ch-2,8,-arr[i])
    ctx.translate(10,0)
  }
  ctx.restore()
}


window.onload = draw