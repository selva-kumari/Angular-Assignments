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
exports.partemployee = void 0;
var fulltime_1 = require("./fulltime");
var partemployee = /** @class */ (function (_super) {
    __extends(partemployee, _super);
    function partemployee(id, name, role, salary, period) {
        var _this = _super.call(this, id, name, role, salary) || this;
        _this.period = period;
        return _this;
    }
    partemployee.prototype.Empdetails = function () {
        console.log("This is the information of part time employee details\n                     ------------------*****************------------------    \n                           Employee id       :: ".concat(this.id, "\n                           Employee name     :: ").concat(this.name, "\n                           Employee role     :: ").concat(this.role, "\n                           Employee salary   :: ").concat(this.salary, "\n                           Employee period   :: ").concat(this.period, "\n                     ------------------*****************------------------- \n                   "));
    };
    return partemployee;
}(fulltime_1.fullemployee));
exports.partemployee = partemployee;
