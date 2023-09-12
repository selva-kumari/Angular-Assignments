"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fulltime_1 = require("./fulltime");
var parttime_1 = require("./parttime");
var fobj = new fulltime_1.fullemployee(101, "selva", "developer", 60000);
fobj.Empdetails();
var pobj = new parttime_1.partemployee(120, "vjselva", "fullstackdeveloper", 500000, "sixmonths");
pobj.Empdetails();
