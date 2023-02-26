import { arr, draw, setActive } from ".";


export async function wait(ms:number){
  await new Promise((res)=>setTimeout(res,ms))
}

export function swap(arr:any[],i1:number|string,i2:number|string){
  let temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp;
}

export function shuffle(){
  console.log('shuffling')
  setActive(-1)
  for(let i in arr){
    swap(arr,Math.floor(Math.random()*20),i)
  }
  draw(arr)
}