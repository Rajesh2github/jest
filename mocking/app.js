const {add, sub, mul, div}  = require("./mathUtils")
function calculate(a,b, op){
    switch(op){
        case "add":
            return add(a,b);
        case "sub":
            return sub(a,b);
        case "mul":
            return mul(a,b);
        case "div":
            return div(a,b)            
    }
}

module.exports = calculate;