(async function(){
    const data = await fetch('./data.json')
    const response = await data.json()
    let employees = response;
    let selectedEmployeeId = employees[0].id;
    let selectedEmployee  = employees[0];
    const employeeList = document.querySelector('.employee__names--list')
    const employeeInfo = document.querySelector('.employee__names--information')

    const createEmployee = document.querySelector('.createEmployee')
    const addEmployeeModal = document.querySelector('.addEmployee')
    const addEmployeeForm = document.querySelector('.addEmployee__create')

    createEmployee.addEventListener('click',()=>{
        addEmployeeModal.style.display = "flex";
    })

    addEmployeeModal.addEventListener('click',(e)=>{
        console.log(e.target.className);
        if(e.target.className === "addEmployee"){
            addEmployeeModal.style.display = "none";
        }
    })

    addEmployeeForm.addEventListener('submit',(e)=>{
        e.preventDefault()
        const formData = new FormData(addEmployeeForm)
        const values = [...formData.entries()];
        
        console.log(values);
    })

    employeeList.addEventListener('click',(event)=>{
        if(event.target.tagName === 'SPAN' && selectedEmployeeId !== event.target.id){
            selectedEmployeeId = event.target.id;
            renderEmployees()
            renderSingleEmployee()
        }
    })

    const renderEmployees = () =>{
        console.log("Rendered");
        employeeList.innerHTML = "";
        employees.forEach((element) => {
            const employee = document.createElement('span')
            employee.classList.add('employee__names--item')

            if(parseInt(selectedEmployeeId,10) === element.id){
                employee.classList.add('selected')
                selectedEmployee = element
            }
            employee.setAttribute("id",element.id)
            employee.innerHTML = `${element.firstName} ${element.lastName} <i class="employeeDelete">❌</i>`
            employeeList.append(employee)
        });
    }

    const renderSingleEmployee = ()=>{
        employeeInfo.innerHTML = `<img src="${selectedEmployee.imageUrl}"/>
              <span class="employees__single--heading">
      ${selectedEmployee.firstName} ${selectedEmployee.lastName} (${selectedEmployee.age})
      </span>
      <span>${selectedEmployee.address}</span>
      <span>${selectedEmployee.email}</span>
      <span>Mobile - ${selectedEmployee.contactNumber}</span>
      <span>DOB - ${selectedEmployee.dob}</span>`
    }


    renderEmployees()
})();