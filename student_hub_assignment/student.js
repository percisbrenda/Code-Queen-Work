const firstName=document.getElementById('fname')
const lastName=document.getElementById('lname')
const email=document.getElementById('mail')
const age=document.getElementById('age')
const submitBtn=document.getElementById('submit-btn')
const signUpForm=document.getElementById('studentform')
const errorMessage=document.getElementById('error-msg')
const table=document.getElementById('tableresult')
var form = document.getElementById('userform');

var studentsList=[];

function localStorageLoad(){
    if(localStorage.students){
        studentsList=JSON.parse(localStorage.students)
        let studentObject = "";
        for(let student in studentsList) {
            studentObject += `<tr>`;
            for(let eachStudentElement in studentsList[student]) {
                studentObject += `<td>${studentsList[student][eachStudentElement]}</td>`;
            }
            studentObject += `</tr>`;
        }
         table.innerHTML = studentObject;
    }
}

submitBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    const firstNameInput=firstName.value;
    const lastNameInput=lastName.value;
    const emailInput=email.value;
    const ageInput=age.value;
    
    const newStudent={userid:studentsList.length+1, fname:firstNameInput, lname:lastNameInput, email:emailInput, age:ageInput};
    studentsList.push(newStudent);
    localStorage.students=JSON.stringify(studentsList);
    signUpForm.reset();
    localStorageLoad(studentObject)
})