// Sorting array without using any inbuilt methods
let arr1 = [6, 1, 5, 2, 4, 3];
function sortarray(arr) {
  let temp;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        console.log(arr[i],arr[j])
      if (arr[i] > arr[j]) {
        // Asending order //desending order
        arr[i] < arr[j];
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
sortarray(arr1);
