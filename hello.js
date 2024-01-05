let inputAge = document.getElementById('inputAge');
let checkAge = document.getElementById('checkAge');
let youngMan = document.getElementById('youngMan');
let childMan = document.getElementById('childMan');

checkAge.addEventListener('click', function() {
    if(inputAge.value >=18){
        youngMan.classList.remove('hidden');
        childMan.classList.add('hidden');
        inputAge.value = "";
    }else{
        childMan.classList.remove('hidden');
        youngMan.classList.add('hidden');
        inputAge.value = "";
    }
})
