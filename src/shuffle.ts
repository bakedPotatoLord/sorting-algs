
import { arr,draw } from "."
import { swap } from "./helpers"


export function shuffle(){
  console.log('randomizing')
  for(let i in arr){
    swap(arr,Math.floor(Math.random()*20),i)
  }
  draw()
}