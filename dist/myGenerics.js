"use strict";
const workingDay = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
];
const workingHours = [8, 9, 10, 10];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
// the problem here is that we dont't have control on the output of the function here generics
// helps us to bind the type with the function
function identityThree(val) {
    return val; // this will be a error because it's not assignable from Type
}
identityThree("pass string as argument");
identityThree(2);
// we can also use anything instead of Type;
function identityFour(val) {
    return val; //this will work fine but its bad practice
}
identityFour({ rooms: 1, kithen: true });
function getSearchProduct(val) {
    return val[4];
}
const getSearchMoreProducts = (val) => {
    return val.slice(-3)[-1];
};
