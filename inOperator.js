const employees = {"Alice": "HR", "Bob": "Engineering", "Diana": "Marketing"}

if ("Alice" in employees){
    console.log("Alice is in the company.")
}
if (!("John" in employees)){
    console.log("John is not in the company.")
}