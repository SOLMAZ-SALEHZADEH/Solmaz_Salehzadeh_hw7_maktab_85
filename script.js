
// question 1
let salaries = {
    "jhone":100,
    "pete":300,
    "mary":250,
    "soli":300,
}
const test = Object.values(salaries)
const x = Math.max(...test)
for (const [key, value] of Object.entries(salaries)) {
  if(value === x ){console.log(key)}
}