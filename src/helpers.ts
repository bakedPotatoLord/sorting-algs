

export async function wait(ms:number){
  await new Promise((res)=>setTimeout(res,ms))
}

export function swap(arr:any[],i1:number|string,i2:number|string){
  let temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp;
}