// 문제 1번)
// 1부터 100까지 더하는 for문을 만들고 그 결과를 출력해보자.
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);
console.log('');
// 문제 2번)
// 1부터 100까지 홀수만 출력해보자.
for (let i = 1; i <= 100; i += 2) {
    console.log(i);
}
console.log('');
// 문제 3번)
// 1부터 50까지 369의 결과를 프린트해보자.
// 1  2  짝  4  5  짝  6  7  짝  10..............28  짝  짝  짝  짝  짝짝...........
for (let i = 1; i <= 50; i++) {
    let stringValue = i.toString(); // 숫자를 문자열로 바꿔주는 기능
    let hand = '';
    for (let j = 0; j < stringValue.length; j++) {
        if (stringValue[j] == '3' || stringValue[j] == '6' || stringValue[j] == '9') {
            hand += '짝';
        }
    }
    console.log(hand.length > 0 ? hand : i);
}
console.log('');
// 문제 4번)
// 주어진 숫자가 소수이면 true, 소수가 아니면 false를 출력하는 프로그램을 짜보자.
// 소수 : PrimeNumber, 1과 자기 자신으로만 나누어지는 수

let n = 15;
let isPrime = true;
if (n === 1) {
    // 1은 소수가 아니므로 제외시켜야 합니다 !
    isPrime = false;
}
for (let i = 2; i < n; i++) {
    if (n % i == 0) {
        isPrime = false;
    }
}
console.log(isPrime);
