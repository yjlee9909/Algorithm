let record = [
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan",
];
function solution(record){
    let answer = []
    let 유저정보 = {}
    for (const i of record){
        const [상태, 아이디, 닉네임] = i.split(' ')
        // answer.push([상태, 아이디, 닉네임])
        if (상태 === 'Enter'){
            유저정보[아이디] = 닉네임
            answer.push([아이디, '님이 들어왔습니다.'])
        } else if (상태 === 'Leave'){
            answer.push([아이디, '님이 나갔습니다.'])
        } else if (상태 === 'Change'){
            유저정보[아이디] = 닉네임
        }
    }
    //console.log(유저정보)
    answer = answer.map(item => 유저정보[item[0]] + item[1])
    return answer
}