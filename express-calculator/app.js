const express = require('express');
const { findMean, findMedian, findMode } = require('./helpers');

const app = express();

const operations = {
    mean: findMean,
    median: findMedian,
    mode: findMode
};

['mean', 'median', 'mode'].forEach(operation => {
    app.get(`/${operation}`, (req, res) => {
        const nums = (req.query.nums || '').split(',').map(Number);
        if (!req.query.nums) {
            return res.status(400).json({ error: "nums are required." });
        }

        const invalidNum = nums.find(num => isNaN(num));
        if (invalidNum !== undefined) {
            return res.status(400).json({ error: `${invalidNum} is not a number.` });
        }

        const result = operations[operation](nums);

        let value = result;
        if (Array.isArray(result)) {
            value = result.length === 1 ? result[0] : result;
        }

        res.json({
            response: {
                operation: operation,
                value: value
            }
        });
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;