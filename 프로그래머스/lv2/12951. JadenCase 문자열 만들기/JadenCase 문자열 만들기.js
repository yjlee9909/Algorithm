function solution(s) {
    return s.toLowerCase().split(" ").map((item)=> item.charAt(0).toUpperCase()+item.substring(1)).join(" ");
}