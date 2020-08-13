// Created Using Easy HTML v1.4.5
// https://play.google.com/store/apps/details?id=ak.andro.easyhtml

const BMI = ()=>{
  let height =document.getElementById('height').value;
  let weight =document.getElementById('weight').value;
  let bmi = weight/(height/100 * height/100);
  let bmiOutput=bmi.toFixed(2);
  const result = () => {
    let bmiO = `Your BMI is ${bmiOutput}
kg/m²`;
    return (document.getElementById('result').textContent = bmiO);
  };
  if(height != '' && weight != ''){
    result();
  }
  else{
    document.getElementById('result').textContent= '';
  }
  if(bmi < 18.5){
    result();
    document.getElementById('deduce').textContent=`You are Underweight`;
  }
  else if(bmi === 18.5 || bmi <25){
    result();
    document.getElementById('deduce').textContent=`Your BMI is in the normal range`;
  }
  else if(bmi === 25 || bmi < 30){
    result();
    document.getElementById('deduce').textContent=`Your are Overweight`;
  }
  else if(bmi >30){
    result();
    document.getElementById('deduce').textContent=  `Your are Obese`;
  }
};
const reset = () => {
  let h =document.getElementById('height').value='';
  let w = document.getElementById('weight').value='';
  document.getElementById('result').textContent ='';
  document.getElementById('deduce').textContent='';
};
