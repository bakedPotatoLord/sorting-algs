import { working, arr, active, draw, endSort, setWorking, setActive } from ".."
import { isSorted, swap } from "../helpers"


export async function bubbleSort (){  
  let bubbleSortI = 1
  setWorking(true)

  while(true){
    if(arr[bubbleSortI-1] > arr[bubbleSortI]){
      swap(arr,bubbleSortI-1,bubbleSortI)

    }

    if(bubbleSortI >= arr.length - 1){
      if(isSorted(arr)){
        break
      }else{
        bubbleSortI = 1
      }
    }else{
      bubbleSortI++
    }

    setActive( bubbleSortI)
    draw(arr)
    await new Promise((res)=>setTimeout(res,10))
  }
  endSort()
}