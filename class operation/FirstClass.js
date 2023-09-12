"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirstClass = void 0;
var FirstClass = /** @class */ (function () {
    function FirstClass(id, name, salary) {
        this.empId = id;
        this.empName = name;
        this.empSalary = salary;
    }
    FirstClass.prototype.show = function () {
        console.log("\n          Employee Id      :: ".concat(this.empId, "\n          Employee Name    :: ").concat(this.empName, " \n          Employee Salary  :: ").concat(this.empSalary, "\n       "));
    };
    return FirstClass;
}());
exports.FirstClass = FirstClass;
