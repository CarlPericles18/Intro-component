
const submit = document.querySelector('.formButton');
const input = document.getElementsByTagName('input')
const inputBox = document.querySelector('.firstName');
const inputBox2 = document.querySelector('.lastName');
const inputBox3 = document.querySelector('.emailAddress');
const inputBox4 = document.querySelector('.password');
const text = document.querySelector('.wrongtext');
const text2 = document.querySelector('.wrongtext2 ');
const text3 = document.querySelector('.wrongtext3');
const text4 = document.querySelector('.wrongtext4');




submit.addEventListener('click', () =>{
   if(inputBox && inputBox.value){
        inputBox.classList.remove('firstNameActive')
        text.textContent = ''
   }
   else{
    inputBox.classList.add('firstNameActive');
    text.textContent = 'First Name cannot be empty';
   } 
});

submit.addEventListener('click', () =>{
    if(inputBox2 && inputBox2.value){
         inputBox2.classList.remove('firstNameActive')
         text2.textContent = ''
    }
    else{
     inputBox2.classList.add('firstNameActive');
     text2.innerText = 'Last Name cannot be empty'
    } 
 });


const validEmail = (email) =>{
    let formatEmail =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return formatEmail.test(String(email).toLowerCase());
}

submit.addEventListener('click', () => {
    let emailValues = inputBox3.value;
    if(validEmail(emailValues)){
        inputBox3.classList.remove('firstNameActive')
        text3.textContent = ''
    }

   else{
    inputBox3.classList.add('firstNameActive');
    text3.textContent = 'Look like this is not an email'
   } 

  
})

 submit.addEventListener('click', () =>{
    if(  inputBox4.value.length >= 8){
         inputBox4.classList.remove('firstNameActive');
         text4.textContent = '';
    }
    else if(inputBox4.value.length < 1){
        inputBox4.classList.add('firstNameActive');
        text4.textContent = 'Password cannot be empty';
       }
   
    else{
        inputBox4.classList.add('firstNameActive');
        text4.textContent = 'Password is not long enough';
    }
  
 });
