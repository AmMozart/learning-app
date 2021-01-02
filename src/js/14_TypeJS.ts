interface ISwitch {
  on():void
  off():void
}

interface IDimmer extends ISwitch {
  dimmTo(value: number):void
}

class SwitchGroup implements ISwitch {
  on() {
    console.log('on')
  }
  off() {
    console.log('off')
  }
}

class DimmerGroup implements IDimmer {
  on() {
    console.log('on')
  }
  off() {
    console.log('off')
  }
  dimmTo(value: number){
    console.log(`dimmTo value = ${value}`)
  }
}

function onAll(group: ISwitch) {
  group.on()
  setTimeout(()=>{group.off()}, 1500)
}

onAll(new DimmerGroup())

