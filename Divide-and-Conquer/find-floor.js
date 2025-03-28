function findFloor(arr, x) {
    let low = 0;
    let high = arr.length - 1;
    let floor = -1; // Initialize floor as -1 (not found)

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] === x) {
            // If we find the exact match, return the value
            return arr[mid];
        } else if (arr[mid] < x) {
            // If arr[mid] is less than x, it could be a candidate for floor
            floor = arr[mid];
            low = mid + 1; // Move right to find a larger candidate
        } else {
            // If arr[mid] is greater than x, move left
            high = mid - 1;
        }
    }

    return floor; // Return the largest element less than or equal to x
}

module.exports = findFloor