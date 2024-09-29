// Function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
    // Gross salary
    let grossSalary = basicSalary + benefits;

    // PAYE Calculation
    let paye;
    if (grossSalary <= 24000) {
        paye = grossSalary * 0.1;
    } else if (grossSalary <= 32333) {
        paye = 2400 + (grossSalary - 24000) * 0.25;
    } else if (grossSalary <= 52333) {
        paye = 2400 + 2083.25 + (grossSalary - 32333) * 0.3;
    } else {
        paye = 2400 + 2083.25 + 6000 + (grossSalary - 52333) * 0.35;
    }

    // NHIF Calculation
    let nhif = calculateNHIF(grossSalary);

    // NSSF Calculation (Tier I and Tier II)
    let nssfTier1 = Math.min(grossSalary, 6000) * 0.06;
    let nssfTier2 = Math.max(0, Math.min(grossSalary - 6000, 12000)) * 0.06;

    // Net salary calculation
    let netSalary = grossSalary - (paye + nhif + nssfTier1 + nssfTier2);

    return {
        grossSalary: grossSalary,
        netSalary: netSalary,
        paye: paye,
        nhif: nhif,
        nssf: nssfTier1 + nssfTier2
    };
}

// Function to calculate NHIF deductions based on gross salary
function calculateNHIF(grossSalary) {
    if (grossSalary <= 5999) return 150;
    if (grossSalary <= 7999) return 300;
    if (grossSalary <= 11999) return 400;
    if (grossSalary <= 14999) return 500;
    if (grossSalary <= 19999) return 600;
    if (grossSalary <= 24999) return 750;
    if (grossSalary <= 29999) return 850;
    if (grossSalary <= 34999) return 900;
    if (grossSalary <= 39999) return 950;
    if (grossSalary <= 44999) return 1000;
    if (grossSalary <= 49999) return 1100;
    if (grossSalary <= 59999) return 1200;
    if (grossSalary <= 69999) return 1300;
    if (grossSalary <= 79999) return 1400;
    if (grossSalary <= 89999) return 1500;
    if (grossSalary <= 99999) return 1600;
    return 1700;
}

// Example usage
const salaryDetails = calculateNetSalary(500, 5000);
console.log(`Gross Salary: ${salaryDetails.grossSalary}`);
console.log(`PAYE: ${salaryDetails.paye}`);
console.log(`NHIF: ${salaryDetails.nhif}`);
console.log(`NSSF: ${salaryDetails.nssf}`);
console.log(`Net Salary: ${salaryDetails.netSalary}`);
