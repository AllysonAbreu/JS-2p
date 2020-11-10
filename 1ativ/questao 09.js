

const estados = ["GO", "MG", "SP", "RJ", "AM", "PA"];

let select = ["<select>"];

estados.forEach(e => {
  const option = `<option value>="${e}"> ${e}</option>`
  select.push(option)
})

select.push("</select>")

console.log(select.join(""));