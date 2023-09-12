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
exports.studentinfo = void 0;
var Student_1 = require("./Student");
var studentinfo = /** @class */ (function (_super) {
    __extends(studentinfo, _super);
    function studentinfo(id, name, dept) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.name = name;
        _this.dept = dept;
        return _this;
    }
    studentinfo.prototype.display = function () {
        console.log("The student id is ".concat(this.id));
        console.log("The student name is ".concat(this.name));
        console.log("The student dept is ".concat(this.dept));
    };
    return studentinfo;
}(Student_1.student));
exports.studentinfo = studentinfo;
