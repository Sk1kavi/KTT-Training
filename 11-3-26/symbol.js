let global_id=Symbol.for("id")
console.log(Symbol.keyFor(global_id))

let second_id=Symbol.for("id")
console.log(global_id===second_id)

console.log((Symbol.for("id")).toString());

console.log("key",Symbol.keyFor(Symbol(id)))