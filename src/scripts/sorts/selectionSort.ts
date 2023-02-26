import { arr, draw, endSort, setActive, setWorking } from ".."
import { swap } from "../helpers"


export async function selectionSort(){
  setWorking(true)
  for(let i = 0;i<arr.length;i++){
    let max = i
    for(let j =i ;j<arr.length;j++){
      max = arr[max]<arr[j] ? max : j
      await new Promise((res)=>setTimeout(res,10))
      setActive(j)
      draw(arr)
    }
    swap(arr,max,i)
  }
  endSort()
}