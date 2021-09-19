"use strict";
exports.__esModule = true;
exports.getName = exports.introduce = exports.printFprmat = exports.format = exports.addStrings = void 0;
function addNumbers(a, b) {
    return a + b;
}
exports["default"] = addNumbers;
var addStrings = function (str1, str2) {
    if (str2 === void 0) { str2 = ""; }
    return str1 + " " + str2;
};
exports.addStrings = addStrings;
var format = function (title, param) {
    return title + " " + param;
};
exports.format = format;
var printFprmat = function (title, param) {
    console.log((0, exports.format)(title, param));
};
exports.printFprmat = printFprmat;
// export const fetchData = (url: string): Promise<string> => Promise.resolve(`Data from ${url}`);
function introduce(salutation) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return salutation + " " + names.join(" ");
}
exports.introduce = introduce;
function getName(user) {
    return (user === null || user === void 0 ? void 0 : user.first) + " " + (user === null || user === void 0 ? void 0 : user.last);
}
exports.getName = getName;
