function solution(price) {
    if(price >= 500000) {
        return Math.floor(price*0.8);
    } else if (price >= 300000) {
        return Math.floor(price*0.9);
    } else if (price >= 100000) {
        return Math.floor(price*0.95);
    } else {
        return price;
    }
    
}

// 파이썬
// def solution(price):
//     if price >= 500000:
//         price *= 0.8
//     elif price >= 300000:
//         price *= 0.9
//     elif price >= 100000:
//         price *= 0.95
//     return int(price)