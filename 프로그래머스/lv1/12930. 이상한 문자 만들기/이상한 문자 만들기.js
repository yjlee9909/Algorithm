function solution(s) {    
    return s.split(' ').map(item => 
        item.split('').map((v, i) => 
            i % 2 === 0 ? item[i].toUpperCase() : item[i].toLowerCase()
        ).join('')
    ).join(' ')
}