(async function(){
    const data = await fetch('./data.json')
    const response = await data.json()
    let employees = response;
    let selectedEmployeeId = employees[0].id;
    let selectedEmployee  = employees[0];
    const employeeList = document.querySelector('.employee__names--list')
    const employeeInfo = document.querySelector('.employee__names--information')

    const renderEmployees = () =>{
        employeeList.innerHTML = "";
        employees.forEach(element => {
            const employee = document.createElement('span')
            employee.classList.add('employee__names--item')

            if(selectedEmployeeId === element.id){
                employee.classList.add('selected')
                selectedEmployee = element
            }
            console.log(element.firstName);
            employee.setAttribute("id",element.id)
            employee.innerHTML = `${element.firstName} ${element.lastName} <i class="employeeDelete">❌</i>`
            employeeList.append(employee)
        });
    }
    renderEmployees()
})();