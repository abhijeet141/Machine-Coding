//create an edit button which will be in information section and on clicking it will opent the modal prefilled and then you can edit the information and click on submit again which will edit the user information

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
    const dobInput = document.querySelector('.addEmployee_create--dob')
    dobInput.max = `${new Date().getFullYear() - 18}-${new Date().toISOString().slice(5,10)}`
    addEmployeeForm.addEventListener('submit',(e)=>{
        e.preventDefault()
        const formData = new FormData(addEmployeeForm)
        const values = [...formData.entries()];
        let employeeData = {}
        values.forEach((val)=>{
            employeeData[val[0]] = val[1]
        })
        // console.log(values);
        employeeData.id = employees[employees.length - 1].id + 1;
        employeeData.age = new Date().getFullYear() - parseInt(employeeData.dob.slice(0,4),10)
        employeeData.imageUrl = employeeData.imageUrl || "https://cdn-icons-png.flaticon.com/512/0/93.png"
        employees.push(employeeData)
        renderEmployees()
        addEmployeeForm.reset()
        addEmployeeModal.style.display = "none";
    })

    employeeList.addEventListener('click',(event)=>{
        if(event.target.tagName === 'SPAN' && selectedEmployeeId !== event.target.id){
            selectedEmployeeId = event.target.id;
            renderEmployees()
            renderSingleEmployee()
        }

        if(event.target.tagName === "I"){
            employees = employees.filter((emp) => String(emp.id) !== event.target.parentNode.id)
        }
        if(String(selectedEmployeeId) === event.target.parentNode.id){
            selectedEmployeeId = employees[0]?.id || -1;
            selectedEmployee = employees[0] || {}
            renderSingleEmployee()
        }
        renderEmployees()
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
        if(selectedEmployeeId === -1){
            employeeInfo.innerHTML = "";
            return;
        }
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