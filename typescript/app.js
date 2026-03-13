var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var stdId = 1234; // 타입 명시
var stdName = 'Yang'; // 타입 명시
// -> string타입으로 명시했는데 number값이 들어옴!
var age = 20; // 타입 명시 오류 
var gender = 'female'; // 타입 추론
var course = 'Typescript'; // 타입 추론
var completed = false; // 타입 추론
// function Plus(a: number, b: number) : number{
//     return a + b;
// }
var GenderType;
(function (GenderType) {
    GenderType["Male"] = "male";
    GenderType["Female"] = "female";
})(GenderType || (GenderType = {}));
var MyStudent = /** @class */ (function () {
    function MyStudent() {
        this.stdId = 326;
        this.stdName = 'hee';
        this.age = 30;
        this.gender = 'female';
        this.course = 'javascript';
        this.completed = true;
    }
    MyStudent.prototype.setName = function (name) {
        this.stdName = name;
        console.log('이름 설정 : ' + this.stdName);
    };
    return MyStudent;
}());
var myInstance = new MyStudent();
myInstance.setName('희진스');
// return 타입으로 Student 인터페이스를 가지는 getInfo
function getInfo(id) {
    // return 값도 Student 인터페이스에 맞게 리턴해줘야한다!
    return ({
        stdId: 1234,
        stdName: 'yang',
        // age: 30,   
        gender: GenderType.Female,
        course: 'typescript',
        completed: true
    });
}
console.log(getInfo(5678));
var std = {
    stdId: 326,
    stdName: 'hee',
    age: 30,
    // gender: 'female',
    course: 'javascript',
    completed: true
};
// Student를 세팅하는 함수
function setInfo(student) {
    console.log(student);
}
setInfo(std);
// 각 매개변수의 타입을 지정해준다. 
var user = {
    name: 'john',
    age: 30
};
// 오류 발생! age가 number타입인데 문자열로 받고 있음
// const user2: {name: string, age: number} = {
//     name: 'yang',
//     age: '30'
// }
// ----------- any type ----------- //
// any 타입 : 아무 타입이나 오케이!
var anyVal = 100;
anyVal = true;
anyVal = '문자열';
// ----------- union type ----------- //
// 유니온 타입 : |로 지정한 타입들만 허용
var anyVal2 = 100;
anyVal = 'yang';
var numStr = 100;
var item;
function convertToString(val) {
    // numStr 은 number일 수도 있지만 string일 수도 있기 때문에!! 에러!! 작은범위에 큰 범위를 담으려고 하면 에러가 발생한다.
    // item = numStr;     에러 발생!
    if (typeof val === 'string') {
        item = 0;
    }
    else { // val의 타입이 숫자일 때만 item처림!
        item = val;
    }
    return String(val); // 강제 String 형변환
}
function convertToNumber(val) {
    return Number(val); // 강제 Number 형변환
}
console.log(convertToString(numStr));
console.log(convertToNumber(numStr));
// ----------- array type ----------- //
// let numbers = new Array([1, 2, 3, 4, 5]);
// 숫자형 배열
var numbers = [1, 2, 3, 4, 5]; // javascript는 위의 new Array과정을 생략해준다.
// 문자형 배열
var fruits = ['apple', 'banana'];
for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// 타입 혼합 배열
// (타입1 || 타입 2 ...)[] => []로 배열임을 표현
var mixedArray = [1, 'two', 3, 'four'];
for (var i = 0; i < mixedArray.length; i++) {
    console.log(mixedArray[i]);
}
var infer = [1, 2, 3]; // 타입 추론 => 배열
for (var i = 0; i < infer.length; i++) {
    console.log(infer[i]);
}
// 읽기 전용 배열 ReadonlyArray<내부타입>
var readOnlyArray = [1, 2, 3];
// ----------- tuple type ----------- //
// 튜플 : 타입의 순서가 정해져 있다.
var greeting = [1, 'hello', true];
for (var i = 0; i < greeting.length; i++) {
    console.log(greeting[i]);
}
// ----------- Spread ----------- //
var firstArray = [1, 2, 3];
var secondArray = [4, 5, 6];
// 각 배열의 요소만 뽑아온다 []를 없애준다! 
var combineArray = __spreadArray(__spreadArray([], firstArray, true), secondArray, true); // [1, 2, 3, 4, 5, 6]
// spread 연산자 없이 사용 시 배열이 두개..!
var combineArray2 = [firstArray, secondArray]; // [[1, 2, 3], [4, 5, 6]]
