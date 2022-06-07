let patient = {
    name: 'jihun',
    age: 40,
    gender: 'male',
    disease: 'cold',
};
/* 위의 코드는 patient라는 객체를 생성하고, 거기에다가 name, age, gender, disease라는 정보를 입력한 경우이다. */
console.log(patient);
console.log('');
console.log(patient.name);
console.log('');
console.log(patient['name']);
/* 배열과 살짝 혼동되기도 하지만, 배열의 방식으로도 이 객체의 키값을 불러올 수 있다. */
patient.age = 'JiHun';
console.log(patient);
patient['age'] = 30;
console.log(patient);
console.log('');
delete patient.gender;
console.log(patient);
console.log('');
patient.address = '울산시 동구';
console.log(patient);
console.log('');

let patientList = [
    { name: 'jisu', age: 20, gender: 'female', disease: 'cold' },
    { name: 'jihun', age: 30, gender: 'male', disease: 'cold' },
    { name: 'jiyong', age: 40, gender: 'male', disease: 'cold' },
];
console.log(patientList);
console.log(patientList[0]);
console.log(patientList[0].name);
