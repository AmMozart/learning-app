function sleep(ms) {
  const callback = function () {
    console.log(`Name: ${this.name}, age: ${this.age}. sleep - ${ms} sec.`)
  }
  setTimeout(callback.bind(this), ms)
}

person = new Object({ name: 'Sergei', age: 30 })

function bind(context, fn) {
  return function (...args) {
    fn.apply(context, args)
  }
}

let printSleep = bind(person, sleep)

printSleep(1000)
