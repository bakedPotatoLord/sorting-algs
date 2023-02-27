import { arr, draw, setActive } from ".";


export async function wait(ms:number){
  await new Promise((res)=>setTimeout(res,ms))
}

export function swap(arr:any[],i1:number|string,i2:number|string){
  let temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp;
}


export function isSorted(arr:number[]){
  for(let i = 1;i<arr.length;i++){
    if(arr[i-1] > arr[i]) return false
  }
  return true
}
