function printDetails(employeeData){
    if (!employeeData){
        console.log("No data available")
    }
    else {
        for (const [key, value] of Object.entries(employeeData)){
            console.log(`${key}: ${value}`);
        }
    }
}