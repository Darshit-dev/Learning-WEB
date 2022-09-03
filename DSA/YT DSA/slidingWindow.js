//size = 7
function slidingWindow(arr, wSize) {
    let max = 0;
    let sum = 0;

    let createW = 0
    while (createW < wSize) {
        sum = sum + arr[createW]
        createW++
    }
    max = sum

    let wEnd = wSize;
    //in this approach we are traversing array once
    while (StartW < arr.length) {
        sum = sum + arr[wEnd] - arr[wEnd - wSize]
        console.log(sum + arr[wEnd]-arr[wEnd-wSize]);
        if (sum > max) {
            max = sum
        }
        wEnd++
    }
    return max
}



console.log(slidingWindow([1, 4, 2, 10, 2, 3, 1, 0, 20], 3))


