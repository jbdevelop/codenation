var array =
    [
        {"name":"abc","age":20},
        {"name":"abc","age":20},
        {"name":"abc","age":20},
        {"name":"xyz","age":21},
        {"name":"xyz","age":21}
    ];

    
    
var result = array.reduce( (acc, o) => {

  console.log(o.name)
  return acc[o.name] = acc[o.name] || 0+1, acc
}, {})

console.log(result);

