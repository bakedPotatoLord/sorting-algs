import { arr, draw, endSort, setActive, setWorking } from "..";

export async function insertionSort(){
  console.log("insertion starting")
  setWorking(true)
  for(let i=1;i<arr.length;i++){

    let temp = arr[i];
    let j=i-1;

    while(j>=0 && arr[j] > temp){
      arr[j+1] = arr[j];
      j--;
      await new Promise((res)=>setTimeout(res,10))
      setActive(j)
      draw(arr)
    }
    arr[j+1] = temp;
    draw(arr)
  }
  endSort()
}