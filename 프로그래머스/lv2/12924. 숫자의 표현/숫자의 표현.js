function solution(n) {
    let loop = n
    let i=1;
    let answer = 0;
    while(loop>0){
        if(loop%i===0){
            answer+=1;
        }
        loop-=i
        i+=1
    }
    return answer;
}