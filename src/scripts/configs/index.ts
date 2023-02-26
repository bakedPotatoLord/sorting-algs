import { arr, draw, setActive } from ".."
import { swap } from "../helpers"


export function shuffle(){
  console.log('shuffling')
  setActive(-1)
  for(let i in arr){
    swap(arr,Math.floor(Math.random()*20),i)
  }
  draw(arr)
}