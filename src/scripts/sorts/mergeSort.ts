import { arr, draw, endSort, setActive, setArr } from ".."


export async function initMergeSort(){
  setArr( await mergeSort(arr) )
  endSort()
}

export async function mergeSort(marr:number[]){
  const mid = marr.length /2
  
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
    arr.push(left[0] < right[0] ? left.shift() : right.shift())
    draw(arr)
    await new Promise(res=>setTimeout(res,40))
  }
  return [...arr,...left,...right]
}