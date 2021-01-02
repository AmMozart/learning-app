
function func(){
  let x = 0
}

Function.prototype.bind = function() {console.log("Перезаписал Bind")}
func.bind(null)