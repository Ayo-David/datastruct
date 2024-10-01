const solution = (messages) => {
  class Emitter {
    constructor(messages = []) {
      this.messages = messages;
      this.event = function () {};
    }

    //set the event emmiter (get it ready)
    setEvent(fn) {
      this.event = fn;
      console.log(`log = `, this.event);
      //this.messages.push(this.event);
    }
    //trigger the event - eg. trigger the send button
    trigger = () => {
      this.messages.forEach((message) => this.event(message));
    };
  }

  class Receiver {
    constructor() {
      this.messages = [];
    }

    ping(message) {
      this.messages.push(message);
    }
  }

  const myEmitter = new Emitter(messages); // Pass messages as an argument here
  //the class emmiter (sender received the messages)
  const myReceiver = new Receiver(); // the receiver is instantiated

  myEmitter.setEvent(myReceiver.ping.bind(myReceiver)); //prepare the event to call myReceiver.ping
  //which is not available for the emmitter - hence the need to bind it
  myEmitter.trigger(); //this trigger the send button to post the messages to the receiver

  return myReceiver.messages; //this is waht the receiver will get
};

// Example usage
const messages = ["Hello", "How are you?", "Goodbye"];
const result = solution(messages);
console.log(result);
