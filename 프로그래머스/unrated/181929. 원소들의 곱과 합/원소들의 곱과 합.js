function solution(num_list) {
    const a = num_list.reduce((acc,cur) => acc*cur)
    const b = num_list.reduce((acc,cur) => acc+cur)
    if(a<b*b){
        return 1
    }else { return 0}
}