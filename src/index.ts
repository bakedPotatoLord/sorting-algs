import { swap, shuffle } from "./helpers"
import { bubbleSort } from "./sorts/bubbleSort"

async function selectionSort(){
  working = true
  for(let i = 0;i<arr.length;i++){
    let max = i
    for(let j =i ;j<arr.length;j++){
      max = arr[max]<arr[j] ? max : j
      await new Promise((res)=>setTimeout(res,10))
      active = j
      draw(arr)
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
      draw(arr)
    }
    arr[j+1] = temp;
    draw(arr)
  }
  endSort()
}


export let working = false
export let active = -1
let sorted = true
let c = document.querySelector('canvas')
let ctx = c.getContext('2d')
export const cw = c.width = 400
export const ch = c.height = 300
export let arr=Array(40).fill(undefined).map((_el,i)=>(250/39)*(i+1))

export const setWorking =(isWorking:boolean)=>{working = isWorking}
export const setActive =(isActive:number)=>{active=isActive}



document.getElementById("randomize")
.onclick = ()=>{if(!working) shuffle()}
document.getElementById("bubbleSort")
.onclick= ()=>{if(!working){bubbleSort()}}
document.getElementById("selectionSort")
.onclick=()=>{if(!working){selectionSort()}}
document.getElementById("insertionSort")
.onclick=()=>{if(!working){insertionSort()}}
document.getElementById("mergeSort")
.onclick=async ()=>{
  if(!working){
    arr = await mergeSort(arr)
    endSort()
  }
}



async function mergeSort(marr:number[]){
  const mid = marr.length /2
  active = arr.indexOf(marr[0])
  draw(arr)
  await new Promise((res,rej)=>setTimeout(res,10))
  
  return marr.length < 2 ?
  marr :
  await merge(
    await mergeSort(marr.slice(0,mid)),
    await mergeSort(marr.slice(mid))
  )
}

async function merge(left:number[],right:number[]){
  console.log("merge start")
  let arr = []
  while(left.length && right.length){
    arr.push(
      left[0] < right[0] ? left.shift() : right.shift()
    )
  }
  return [...arr,...left,...right]
}



export function endSort(){
  active = -1
  working = false
  draw(arr)
}

export function draw(arr:number[]){
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


window.onload =()=>{ draw(arr)}