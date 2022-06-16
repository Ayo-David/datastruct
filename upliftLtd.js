; {
  //console.log(x)
  let x = 5 //test and understand the difference between let and var
}


const user = [
  {
    name: 'Ayo',
    state: 'AN',
  },
  { name: 'segun', state: 'AS' },

  { name: 'Bayo', state: 'AS' }
]

function getState(state) {
  const userState = user.filter((item) => {
    console.log(item.state)
    return item.state === state
  })
  //console.log(userState)
  return userState
}

//getState('AS')

//GraphQL ....Apollo

function checkScope() {

  let i = 'function scope'
  //var i = 'jic'
  //var i = 'function scope'
  //const i = 'function scope'

  if (true) {

    let i = 'Block Scope' // this will create another instance of let i declared in function & this is accessible locally
    //i = 'Block Scope' // this will change the value of let i declared in function & i is accessible globally (bcos it was declared in the funct)
    //const i = 'Block Scope' // this will create another instance of let i declared in function & this is accessible locally
    //var i = 'Block Scope'// this will change the value VAR i declared in function & this is also accessible globally but if LET or CONST was used b4 VAR can not redeclare it
    //var i = 'Block Scoper'//this will change the value var i but can not work if let was used to declare it before
    console.log('Block Scope i is:', i)
  }

  console.log('Function Scope i is:', i)
  return i
}
checkScope()


function testIf() {
  if (42) {
    if (42 == '42') {
      if (true) {
        if (42 == true) {
          console.log('All is true')
        } else {
          console.log('so close but no')
        }
      } else {
        console.log('inconceivable')
      }

    } else {

      console.log('not equal')
    }
  } else {
    console.log('it\'s not true')
  }
}

function callSomeoneLater(name, callback) {
  let messageEvent = {
    message: `Hi ${name}!`
  }
  callback.bind(messageEvent)
  //let caller = callback.bind(messageEvent)
  //console.log(caller)
}

function MyObject(name) {
  this.name = name
  this.invokeGreeting = () => {
    callSomeoneLater(this.name, () => {
      console.log(this.message)
    })
  }
}

let kelly = new MyObject("Kelly")
//kelly.invokeGreeting()

function NamedList(name, items) {
  let innerValues = items
  return Object.freeze({
    name,
    [Symbol.iterator]: function* () {
      yield* innerValues
    }
  })//
}

let tens = new NamedList('byTens', [10, 20, 30])

//console.log(tens)
for (let num of tens) {
  //console.log(num)
}

const messageFactory = (errorCode = 500,
  message = 'Unknown server error',
  severity = 'Fatal error') => {
  return Object.freeze({
    report: () => `${severity} ${errorCode}: ${message}`
  })
}

const warning = (factory) => {
  return (errorCode, message) => factory(errorCode, message, 'WARNING')
}

const warningFactory = warning(messageFactory)

//console.log(messageFactory(401, 'Unauthorized').report())
//console.log(warningFactory(455, 'Disk low on space').report())