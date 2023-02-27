import {  reverse, semiSort, shuffle } from './configs'
import { bubbleSort, insertionSort, initMergeSort, selectionSort, bozoSort } from "./sorts"


export let working = false
export let active = -1
let sorted = true
let c = document.querySelector('canvas')
let ctx = c.getContext('2d')
export const cw = c.width = 400
export const ch = c.height = 300
export let arr=Array(40).fill(undefined).map((_el,i)=>(i+1))

export const setWorking =(isWorking:boolean)=>{working = isWorking}
export const setActive =(isActive:number)=>{active=isActive}
export const setArr=(m_arr:number[])=>{arr = m_arr};


document.getElementById("shuffle")
.onclick = ()=>{if(!working) shuffle()}
document.getElementById("reverse")
.onclick = ()=>{if(!working) reverse()}
document.getElementById("semiSort")
.onclick = ()=>{if(!working) semiSort()}


document.getElementById("bozoSort")
.onclick= ()=>{if(!working){bozoSort()}}
document.getElementById("bubbleSort")
.onclick= ()=>{if(!working){bubbleSort()}}
document.getElementById("selectionSort")
.onclick=()=>{if(!working){selectionSort()}}
document.getElementById("insertionSort")
.onclick=()=>{if(!working){insertionSort()}}
document.getElementById("mergeSort")
.onclick=async ()=>{if(!working){initMergeSort()}}


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
    ctx.fillRect(0+1,ch-1,8,-arr[i]*(250/39))
    ctx.translate(10,0)
  }
  ctx.restore()
}


window.onload =()=>{ draw(arr)}