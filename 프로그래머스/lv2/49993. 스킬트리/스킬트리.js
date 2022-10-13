function solution(skill, skill_trees) {
    let 패턴 = '[' + skill + ']';
    let 표현식 = new RegExp(패턴, 'g');
    let answer = 0;
    for (i of skill_trees){
        if(i.match(표현식)){
            console.log(i.match(표현식))
            console.log(표현식)
            console.log(skill.indexOf(i.match(표현식).join('')))
            if(skill.indexOf(i.match(표현식).join('')) === 0){
                answer += 1
            }
        } else {
            answer += 1
        }
    }
    return answer;
}