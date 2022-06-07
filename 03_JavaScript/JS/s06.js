function plus(i) {
    console.log(i + 100);
}
plus(100);
console.log('');
function welcome(name) {
    console.log('안녕하세요, ' + name + '님!');
}
welcome('허지훈');
welcome('장소영');
welcome('최이서');
welcome('최문석');
welcome(1004);

function welcome2() {
    console.log('안녕하세요, 허지훈님!');
}
welcome2();
console.log('');
function printSqure(x) {
    console.log(x * x);
}
printSqure(2);
printSqure(15);
printSqure(132);

console.log('');

/* 메모리 용량 계산식 만들기 */
/*
함수 두개, teraToGiga, teraToMega
테라바이트를 기가바이트로 환산,
테라바이트를 메가바이트로 환산
3테라바이트 환산해주세요!!
*/
function teraToGiga(a) {
    console.log(a + 'TB는');
    console.log(a * 1024 + 'GB입니다.');
}
function teraToMega(b) {
    console.log(b + 'TB는');
    console.log(b * 1024 * 1024 + 'MB입니다.');
}
teraToGiga(3);
teraToMega(3);
/*
1TB는
1024GB입니다.
*/
console.log('');

function printSum(a, b) {
    console.log(a + b);
}
printSum(100, 100);
printSum(50, 130);

/*
함수 introduce를 정의하고,
매개변수로 name, birth, national, job을 사용해서
콘솔창에 
*/

function introduce(name, birth, national, job) {
    console.log('안녕하세요! 반갑습니다.');
    console.log('제 이름은 ' + name + '입니다.');
    console.log('생년월일은 ' + birth + '이고,');
    console.log('국적은 ' + national + '이고,');
    console.log('직업은 ' + job + '입니다.');
    console.log('잘 부탁드립니다!');
}
introduce('김철수', '1998.01.15', '한국', '회사원');
introduce('이영희', '1988.03.15', '중국', '무역 회사원');

console.log('');
/*
bmi = 무게 / ((키 * 키) / 10000)
*/
function bmi(name, weight, tall) {
    let bmi = weight / ((tall * tall) / 10000);
    console.log(name + '님의 체질량 지수는 ' + bmi + '입니다.');
}
bmi('홀쭉이', 42.1, 165);
