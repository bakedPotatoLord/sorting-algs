import { arr, draw, endSort, setActive, setArr } from ".."


export async function initMergeSort(){
  setArr( await mergeSort(arr) )
  endSort()
}

export async function mergeSort(marr:number[]){
  const mid = marr.length /2
  setActive( arr.indexOf(marr[0]) )
  draw(arr)
  await new Promise((res,rej)=>setTimeout(res,50))
  
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