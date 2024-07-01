 const clearAll= document.querySelector('.clear-all')
  const repayOption = document.querySelector('.repayinp')
  const IntrestOption = document.querySelector('.only-interest')
   const submitButton = document.querySelector('.submit-btn')
   const montlyPay = document.querySelector('.monthlypay')
    const formPage = document.querySelector('form')
    const amountInput = document.querySelector('.amountinp')
    const yearsInput = document.querySelector('.yearsinp')
    const rateInp = document.querySelector('.rateinp')
     const totalPayment = document.querySelector('.totalpay')
    formPage.addEventListener('submit', (e)=>{
  e.preventDefault()
   const years = parseFloat(yearsInput.value.trim())
   const amount= parseFloat(amountInput.value.trim())
   const rate= parseFloat(rateInp.value.trim())


  let hasError = false;

if (isNaN(amount) || amount <=0){
    document.querySelector('.amount-error').textContent= "this filed is required"
    document.querySelector('.input-wrapper').style.backgroundColor="red"
    hasError=true
}

 if (isNaN(years) || years <=0){
    document.querySelector('.team-error').textContent="this filed is required"
    hasError=true
}
 
 if (isNaN(rate)){
    document.querySelector('.interest-error').textContent="this filed is required"   
    hasError=true
}
 if (!repayOption.checked && !IntrestOption.checked){
    emptyResult.classList.remove('hidden');
         completeResult.classList.add('hidden');
         return;
 }
 if (hasError){
    return;
 }
  const  allInput= rate / 100
  const finalCalculate = amount *(1 + allInput) * years
  const emptyResult = document.querySelector('.empty-result')
  const completeResult=  document.querySelector('.complete-result')


  totalPayment.textContent=`£${finalCalculate.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
   emptyResult.classList.add('hidden')
   completeResult.classList.remove('hidden')
   amountInput.value = "";
   yearsInput.value = "";
   rateInp.value = "";
   })










   repayOption.addEventListener('change', () => {
    if (repayOption.checked) {
        const amount = parseFloat(amountInput.value.trim());

        if (isNaN(amount) || amount <= 0) {
            document.querySelector('.amount-error').textContent = "This field is required";
            document.querySelector('.input-wrapper').style.backgroundColor = "red";
            return;
        }

        const allInput = rateInp.value.trim() / 100;
        const monthlyPayment = amount * (1 + allInput) / (yearsInput.value.trim() * 12);

        montlyPay.textContent = `£${monthlyPayment.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
         if (!repayOption.checked){
            emptyResult.classList.remove('hidden');
         completeResult.classList.add('hidden');
         }
    }
});








IntrestOption.addEventListener('change', () => {
    if (IntrestOption.checked) {
        const amount = parseFloat(amountInput.value.trim());

        if (isNaN(amount) || amount <= 0) {
            document.querySelector('.amount-error').textContent = "This field is required";
            document.querySelector('.input-wrapper').style.backgroundColor = "red";
            return;
        }

        const allInput = rateInp.value.trim() / 100;
        const totalInterest = amount * allInput * yearsInput.value.trim();
        const monthlyInterest = totalInterest / (yearsInput.value.trim() * 12);
         document.querySelector('.youranswer').textContent="Your Monthly Intrest Payback"
        montlyPay.textContent = `£${monthlyInterest.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
        if (!IntrestOption.checked){
        emptyResult.classList.remove('hidden');
           completeResult.classList.add('hidden');

        }
    }
});
   clearAll.addEventListener("click", ()=>{
    montlyPay.textContent=""
    amountInput.textContent=""
    yearsInput.textContent=""
    rateInp.textContent=""
    totalPayment.textContent=""
    repayOption.checked = false;
    IntrestOption.checked = false;
    
   })