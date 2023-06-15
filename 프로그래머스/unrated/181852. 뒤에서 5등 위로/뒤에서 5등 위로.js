function solution(num_list) {
    num_list = num_list.sort((a,b)=> a- b);
    let arr = [];
    for (let i = 5; i < num_list.length; i++) {
        arr.push(num_list[i])
    }
    return arr;
}