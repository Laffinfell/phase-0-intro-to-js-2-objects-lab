// Write your s      
const employee = {
    name: 'Simpson',
    streetAddress: '742Evergreen Terrace',
}

function updateEmployeeWithKeyAndValue(employeeobject, key, value) {
    const newObj = {...employeeobject};
    newObj[key] = value;
    return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employeeobject, key, value) {
     employeeobject[key] = value;
     return employeeobject;
}

function deleteFromEmployeeByKey(employeeobject, key) {
    const newObj = {...employeeobject};
    delete newObj[key];
    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(employeeobject, key) {
    delete employeeobject[key];
    return employeeobject
}