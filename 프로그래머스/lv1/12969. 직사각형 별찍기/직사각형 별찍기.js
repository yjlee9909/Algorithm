process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);

    let sum = '';
    for (let i = 1; i <= b; i++) {
        for (let j = 1; j <= a; j++) {
            sum += '*';
        }
        sum += "\n";
    }
    console.log(sum)
});