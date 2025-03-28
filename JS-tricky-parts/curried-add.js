function curriedAdd(total) {
    if (!total) return 0;
    return function newFunction(num){
        if (!num) return total;
        total = num + total;
        return newFunction;
        };
}



module.exports = { curriedAdd };
