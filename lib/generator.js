function generator(response) {
    return`
    ${response.employeeName}
    ${response.employeeId}
    ${response.employeeEmail}
    ${response.employeeNumber}
    ${response.employeeRole}
    ${response.engineerGitHub}
    ${response.internSchool}
    ${response.managerNumber}`
}
  
  module.exports = generator;