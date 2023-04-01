import { arr, draw, endSort, setArr } from "..";
import { shuffle } from "../configs";
import { isSorted } from "../helpers";


export async function bozoSort(){

  if(!window.confirm('bozo sort uses exponential time. Since each iteration takes ~20ms, and 40! = 815915283247897734345611269596115894272000000000 , this cannot be expected to solve the equation for ~5.175*(10^38) years, or  ~3.8*(10^28) universe ages')){
    return
  }

  let localArray = arr

  console.log('bozo sort starting')

  while(!isSorted(localArray)){

    shuffle()
    await new Promise((res)=>setInterval(res,1))
    draw(localArray)

  }
  setArr(localArray) 

  endSort()
}

