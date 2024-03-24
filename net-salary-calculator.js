// net salary calculator
// calculating the net salary by getting inputs of the basic salary and benefits

let basicSalary;
let benefits = []; //Giving the benefits an empty array to later list the benefits

// calculating the benefits with a function that takes in the array benefits as the parameter and spreads it. then it reduces the array to one single value to get the total by using the reduce method
function calculateBenefits(...benefits) {
  return (
    benefits.reduce((accumalator, benefits) => accumalator + benefits, 0) * 0.15
  ); // returning one value from the benefits array and multiplying by 15% because that is the interest rate
}

// calculating the grosssalary by adding up the basic salary and benefits
function calculateGross(basicSalary, benefits) {
  let grossPay = basicSalary + benefits;
  return grossPay; //returning the grossPay value
}

// calculating the PAYE by mulplyin the grosspay by the Paye rates depending on their maximum values and minimum values
function calcPaye(grossPay) {
  let paye;
  if (grossPay >= 0 && grossPay <= 24000) {
    paye = grossPay * 0.1;
  } else if (grossPay >= 24001 && grossPay <= 32333) {
    paye = grossPay * 0.25;
  } else if (grossPay >= 32334 && grossPay <= 500000) {
    paye = grossPay * 0.3;
  } else if (grossPay >= 500001 && grossPay <= 800000) {
    paye = grossPay * 0.325;
  } else {
    paye = grossPay * 0.35;
  }
  return paye; //returning the paye value
}

// calculating the NHIF deductions based on the gross pay someone recives
function calcNhifDeduction(grossPay) {
  let nhifDeduction = 0;
  if (grossPay <= 5999) {
    nhifDeduction = 150;
  } else if (grossPay >= 6000 && grossPay <= 7999) {
    nhifDeduction = 300;
  } else if (grossPay >= 8000 && grossPay <= 11999) {
    nhifDeduction = 400;
  } else if (grossPay >= 12000 && grossPay <= 14999) {
    nhifDeduction = 500;
  } else if (grossPay >= 15000 && grossPay <= 19999) {
    nhifDeduction = 600;
  } else if (grossPay >= 20000 && grossPay <= 24999) {
    nhifDeduction = 750;
  } else if (grossPay >= 25000 && grossPay <= 29999) {
    nhifDeduction = 8500;
  } else if (grossPay >= 30000 && grossPay <= 34999) {
    nhifDeduction = 900;
  } else if (grossPay >= 35000 && grossPay <= 39999) {
    nhifDeduction = 9500;
  } else if (grossPay >= 40000 && grossPay <= 44999) {
    nhifDeduction = 1000;
  } else if (grossPay >= 45000 && grossPay <= 49999) {
    nhifDeduction = 1100;
  } else if (grossPay >= 50000 && grossPay <= 59999) {
    nhifDeduction = 1200;
  } else if (grossPay >= 60000 && grossPay <= 69999) {
    nhifDeduction = 1300;
  } else if (grossPay >= 70000 && grossPay <= 79999) {
    nhifDeduction = 1400;
  } else if (grossPay >= 80000 && grossPay <= 89999) {
    nhifDeduction = 1500;
  } else if (grossPay >= 90000 && grossPay <= 99999) {
    nhifDeduction = 1600;
  } else {
    nhifDeduction = 1700;
  }
  return nhifDeduction; // returning the nhif deduction value
}

// calculating the NSSF deduction that takes in pensiable pay as its parameter and checks if its less or equal to the limit pensiable pay which is 7000
function calcNssfDeduction(penssiablepay) {
  let limitPensiablePay = 7000;
  let nssfPercenteage = 0.06;

  let nssfContribution;

  if (penssiablepay <= limitPensiablePay) {
    nssfContribution = penssiablepay * nssfPercenteage;
  } else {
    nssfContribution = limitPensiablePay * nssfPercenteage;
  }
  return nssfContribution; //returning the nssf deduction value
}

// calculating the net salary by taking the gross and minusing all the deductions
function calcNetSalary() {
  netSalary = grossPay - paye - nhifDeduction - nssfContribution;
  return netSalary; //returning the net salary
}
