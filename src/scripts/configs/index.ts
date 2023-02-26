import { arr, draw, endSort, setActive, setArr } from ".."
import { swap } from "../helpers"


export function shuffle(){
  console.log('shuffling')
  for(let i in arr){
    swap(arr,Math.floor(Math.random()*20),i)
  }
  endSort()
}

export function reverse(){
  setArr(Array(40).fill(undefined).map((_el,i)=>(i+1)).reverse())
  endSort()
}

export function semiSort(){
  setArr(Array(40).fill(undefined).map((_el,i)=>(i+1)))
  
  for(let i = 0; i<arr.length;i+=Math.floor(Math.random()*3)){
    swap(arr,Math.floor(Math.random()*20),i)
  }
  endSort()
}