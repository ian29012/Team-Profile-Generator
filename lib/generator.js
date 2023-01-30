function generator(response) {
    return`
    ${response.employeeName}
    ${response.employeeId}
    ${response.employeeEmail}
    ${response.employeeNumber}
    ${response.employeeRole}`
}
  
  module.exports = generator;