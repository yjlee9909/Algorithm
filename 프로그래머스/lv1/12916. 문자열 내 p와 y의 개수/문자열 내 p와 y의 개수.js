function solution(s){
    let pCount = 0;
    let yCount = 0;
    pCount = s.match(/P/gi);
    yCount = s.match(/Y/gi);
    if ((pCount === null) && (yCount === null)) {
        return true;
    } else if ((pCount === null) || (yCount === null)) {
        return false;
    }
    if (pCount.length === yCount.length) {
        return true;
    } else return false;
}