function solution(array, height) {
    // let answer = 0;
    // for(const i = 0; i < array.length; i++) {
    //     if (array[i] > height) {
    //         answer++;
    //     }
    // }
    // return answer;
    
    return array.filter(v => v > height).length;
}