function greet(name: string[] | string) {
  if (Array.isArray(name)) {
    console.log(`Hello ${name.join(" and ")}`)
  }else {
    console.log(`Hello ${name}`)
  }
}

greet("Danil");
greet(["Danil", "Roma"])