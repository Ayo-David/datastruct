//comments on LET and VAR
{
  //console.log(x); //error: you can not access x before initialization
  let x = 5; //test and understand the difference between let and var
}

{
  var i = 0;
  function myloop() {
    i++;
    while (i == 2) {}
    console.log(`i = `, i);
    //return i;
  }
}
//console.log(`myloop = `, myloop()); //i will always be one (1) - anytime you revisit this function var i=0

//console.log(getState(29)); - bcos user has not been declared this will give an error, though u can call fxn b4 it declaration
const user = [
  {
    name: "Ayo",
    state: "AN",
    age: 40,
  },
  {
    name: "segun",
    state: "AS",
    age: 10,
  },

  {
    name: "Bayo",
    state: "AS",
    age: 29,
  },
];

//console.log(getState(29)); you can call a fxn b4 it declaration - no error
function getState(state) {
  const userState = user.filter((item) => {
    //console.log(item.state)
    return item.age === state;
  });
  //console.log(userState)
  return userState;
}

//console.log(getState(29));

//GraphQL ....Apollo

function checkScope() {
  //let i = "function scope";
  //var i = 'jic'
  var i = "function scope";
  //const i = "function scope";

  if (true) {
    //let i = "Block Scope"; // this will create another instance of let i declared in function & this is accessible locally
    //i = "Block Scope"; // this will change the value of let i declared in function & i is accessible globally (bcos it was declared in the funct)
    const i = "Block Scope"; // this will create another instance of let i declared in function & this is accessible locally
    //var i = "Block Scope"; // this will change the value VAR i declared in function & this is also accessible globally but if LET or CONST was used b4 VAR can not redeclare it
    //var i = 'Block Scoper'//this will change the value var i but can not work if let was used to declare it before
    console.log("Block Scope i is:", i);
  }

  console.log("Function Scope i is:", i);
  return i;
}
//const, let => const, let - with new value in each scope only
//const, let => var //ERROR identifier already declared
//var => var will change the value to new var
//var => const, let //with new value in each scope only

//var can become (redeclared as) const and let within another scope
// but const and let can not be redeclared as var

//const and let can always be reclared as const, let, in another scope but not as var
//checkScope();

(function testIf() {
  if (42) {
    if (42 == "42") {
      console.log("wok");
      if (true) {
        if (42 == true) {
          console.log("All is true");
        } else {
          console.log("so close but no");
        }
      } else {
        console.log("inconceivable");
      }
    } else {
      console.log("not equal");
    }
  } else {
    console.log("it's not true");
  }
})();

function callSomeoneLater(name, callback) {
  let messageEvent = {
    message: `Hi ${name}!`,
  };
  callback.call(messageEvent);
  let caller = callback.bind(messageEvent);
  console.log(caller);
}

function MyObject(name) {
  this.name = name;
  this.invokeGreeting = function () {
    callSomeoneLater(this.name, () => {
      console.log(this.message);
    });
  };
}

class MyObjects {
  constructor(name) {
    this.name = name;
    this.invokeGreeting = invokeGreeting;
  }
  invokeGreeting = function () {
    callSomeoneLater(this.name, () => {
      console.log(this.message);
    });
  };
}

let kelly = new MyObject("Kelly");
kelly.invokeGreeting();

//console.log(`Kelly = `, kelly.invokeGreeting());
//Generator and Iterator
function* test() {
  yield 1;
  yield 2;
  yield true;
}
const a = test();
a.next();
const x = a.next();
// x = {value: 2, done: false}

function NamedList(name, items) {
  let innerValues = items;
  return Object.freeze({
    name,
    [Symbol.iterator]: function* () {
      yield* innerValues;
    },
  }); //
}

let tens = new NamedList("byTens", [10, 20, 30]);

//console.log(`tens: `, tens);

for (let num of tens) {
  //console.log(num)
}

const messageFactory = (
  errorCode = 500,
  message = "Unknown server error",
  severity = "Fatal error"
) => {
  return Object.freeze({
    report: () => `${severity} ${errorCode}: ${message}`,
  });
};

//HOC or HOF
const warning = (factory) => {
  return (errorCode, message) => factory(errorCode, message, "WARNING");
};

const warningFactory = warning(messageFactory);

//console.log(messageFactory(401, "Unauthorized").report());
//console.log(warningFactory(455, "Disk low on space").report());
