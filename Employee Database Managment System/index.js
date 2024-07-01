(async function(){
    const data = await fetch('./data.json')
    const response = await data.json()
    let employees = response;
    let selectedEmployeeId = employees[0].id;
    let selectedEmployee  = employees[0];
    const employeeList = document.getElementsByClassName('employee__names--list')[0]
    const employeeInfo = document.getElementsByClassName('employee__names--information')[0]

    const renderEmployees = () =>{
        employeeList.innerHTML = "";
        employees.forEach(element => {
            const employee = document.createElement('span')
            employee.setAttribute('class','employee__names--item')

            // if(selectedEmployeeId === element.id){
            //     employee.classList.add('selected')
            //     selectedEmployee = element
            // }
            employee.setAttribute("id",element.id)
            employee.innerHTML = `${element.firstName} ${element.lastName} <i class="employeeDelete">❌</i>`
            employeeList.appendChild(employee)
        });
    }
    renderEmployees()
})();