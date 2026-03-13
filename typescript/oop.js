// 직원 정보 => 데이터가 많아질 수록 관리하기가 어렵다! -> 연관된 정보들을 묶어서 class로 관리
var empName;
var Age;
var empJob;
function printEmp(empName, age, empJob) {
    console.log("".concat(empName, "\uC758 \uB098\uC774\uB294 ").concat(age, "\uC774\uACE0, \uC9C1\uC5C5\uC740 ").concat(empJob, "\uC785\uB2C8\uB2E4."));
}
printEmp('yang', 30, 'student');
// 멤버변수 == 속성 == 프로퍼티
// 멤버함수 == 메소드
var Employee = /** @class */ (function () {
    // kim, 20, developer로 초기값 생성. 아무값도 입력하지 않았을 시 갖는 값
    // private 클래스 밖에서 접근 못함 -> 메소드를 생성하여 접근할 수 있도록 한다. (get / set 메소드)
    // private 속성 앞에는 _를 붙여 명시해준다.
    // private _empName: string = 'kim';
    // private _age: number = 20;
    // private _empJob: string = 'developer';
    // 생성자 => 초기화!
    // 객체 생성시 값을 넘겨받아 설정해준다!
    function Employee(
    // 변수 선언과 전달을 동시에!
    _empName, _age, _empJob) {
        this._empName = _empName;
        this._age = _age;
        this._empJob = _empJob;
        this.printEmp = function () {
            // 클래스 내의 합수에서 접근하는 객체는 this를 붙여주자!
            // console.log(`${this.empName}의 나이는 ${this.age}이고, 직업은 ${this.empJob}입니다.`);
        };
        // this.empName = empName;
        // this.age = age;
        // this.empJob = empJob;
    }
    Object.defineProperty(Employee.prototype, "empName", {
        // 내부 멤버변수인 empName이 호출된다. -> _empName은 노출되지 않고 불러온다!
        get: function () {
            return this._empName;
        },
        // 전달된 매개변수 값을 _empName에 저장
        set: function (val) {
            this._empName = val;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
// Employee 클래스를 이용하여 생성한 객체
// let employee1 = new Employee();
// employee1.empName = 'yang';
// employee1.age = 30;
// employee1.empJob = '취준생'
// employee1.printEmp();
// let employee2 = new Employee();
// employee2.printEmp();
// constructor 사용 한 객체 생성
var employee3 = new Employee('yang', 30, '취준생');
employee3.printEmp();
var employee4 = new Employee('lee', 27, '개발자');
// set empName 호출!
employee4.empName = 'park';
employee4.printEmp();
