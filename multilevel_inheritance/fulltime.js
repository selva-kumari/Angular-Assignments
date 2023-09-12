"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.fullemployee = void 0;
var employee_1 = require("./employee");
var fullemployee = /** @class */ (function (_super) {
    __extends(fullemployee, _super);
    function fullemployee(id, name, role, salary) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.name = name;
        _this.role = role;
        _this.salary = salary;
        return _this;
    }
    fullemployee.prototype.Empdetails = function () {
        console.log("This is the information of full time employee details\n                     ------------------*****************------------------    \n                           Employee id       :: ".concat(this.id, "\n                           Employee name     :: ").concat(this.name, "\n                           Employee role     :: ").concat(this.role, "\n                           Employee salary   :: ").concat(this.salary, "\n                     ------------------*****************------------------- \n                   "));
    };
    return fullemployee;
}(employee_1.employee));
exports.fullemployee = fullemployee;
