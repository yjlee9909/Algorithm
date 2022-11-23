function solution(a, b) {
    let day = new Date(2016, a - 1, b);
    const WEEKDAY = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    let week = WEEKDAY[day.getDay()];
    return week
    
}