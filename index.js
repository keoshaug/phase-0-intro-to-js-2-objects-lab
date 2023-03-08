// Write your solution in this file!
const employee = {
    name: "Sam"
};

function updateEmployeeWithKeyAndValue(employee, name, value) {
    const newEmployee = {...employee};
    newEmployee[name] =value;
    return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, value) {
    employee[name] =value;
    return employee;
}
function deleteFromEmployeeByKey(employee, name, value) {
    const newEmployee = {employee};
    newEmployee[name] = value;
    delete newEmployee[name];
    return newEmployee;

}
function destructivelyDeleteFromEmployeeByKey(employee, name, value) {
    employee[name] = value;
    delete employee[name];
    return employee;
}