//1 
function greet() {
    console.log('안녕 내 이름은 제시카야')
}
greet();
// 2
function greet2(name) {
    console.log('안녕 내 이름은 ' + name + '야')
}
greet2('에밀리');
// 3
function greet3(name) {
    console.log('안녕 내 이름은 ' + name + '야')
    return name;
}
console.log(greet3('test'));
// 4
function meetAt(Year, Month, Day) {
    if (Year != null && Month != null && Day != null) {
        console.log(Year + '/' + Month + '/' + Day)
    } else if (Year != null && Month != null) {
        console.log(Year + '년 ' + Month + '월');
    } else {
        console.log(Year + '년');
    }
    
};
meetAt(1234, 5, 31);
// 5
function findSmallestElement(j) {
    let Small = 0;
    if (j.length == 0) {
        return 0;
    }
    for (let i = 0; i < j.length; i++) {
        if (Small > j[i]) {
            Small = j[i];
        }        
    }
    return Small;
}
// console.log(findSmallestElement([100, 200, 3, 0, 2, 1]));
console.log(findSmallestElement([]));
// 6

