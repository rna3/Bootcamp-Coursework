// helpers.js
function findMean(nums) {
    if (nums.length === 0) return 0;
    return nums.reduce((a, b) => a + b, 0) / nums.length;
}

function findMedian(nums) {
    if (nums.length === 0) return 0;
    nums.sort((a, b) => a - b);
    const half = Math.floor(nums.length / 2);
    if (nums.length % 2) return nums[half];
    return (nums[half - 1] + nums[half]) / 2.0;
}

function findMode(nums) {
    if (nums.length === 0) return 0;
    let counts = {};
    nums.forEach(num => {
        counts[num] = (counts[num] || 0) + 1;
    });
    let maxCount = Math.max(...Object.values(counts));
    return Object.keys(counts).filter(num => counts[num] === maxCount).map(Number);
}

module.exports = {
    findMean,
    findMedian,
    findMode
};