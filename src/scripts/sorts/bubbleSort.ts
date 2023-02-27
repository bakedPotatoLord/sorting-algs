import { working, arr, active, draw, endSort, setWorking, setActive } from ".."
import { swap } from "../helpers"


export async function bubbleSort (){  
  let bubbleSortI = 1
  setWorking(true)

  while(bubbleSortI<arr.length){
    if(arr[bubbleSortI-1] > arr[bubbleSortI]){
      swap(arr,bubbleSortI-1,bubbleSortI)
      bubbleSortI=1
    }else{
      bubbleSortI++
    }
    setActive( bubbleSortI)
    draw(arr)
    await new Promise((res)=>setTimeout(res,0))
  }
  endSort()
}