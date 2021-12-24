if(!Array.prototype.flat){
    Array.prototype.flat = function(depth) {
        if(depth === undefined){
            depth = 1;
        }

        let flatten = function(arr, depth) {
            if(depth < 1) {
                return arr;
            }

            return arr.reduce(function(acc, val) {
                return [...acc, (Array.isArray(val) ? flatten(val, depth) : val)];
            })
        }
        return flatten;
    }
}