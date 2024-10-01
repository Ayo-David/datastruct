// Input: s = "barfoothefoobarman", words = ["foo","bar"]
// Output: [0,9]
// Explanation: Substrings starting at index 0 and 9 are "barfoo" and "foobar" respectively.
// The output order does not matter, returning [9,0] is fine too.

function subStrings(s, words) {
  let A = [];
  //let given = new Set()
  let given = {};
  let s_len = s.length;
  let len = words.length;
  let word_len = words[0].length;
  console.log(word_len);

  for (let word of words) {
    if (given[word]) {
      given[word]++;
    } else {
      given[word] = 1;
    }
  }
  console.log(given);
  for (let i = 0; i < s_len; i += word_len) {
    console.log("this is the start point", i);
    let count = 0;
    for (let word of words) {
      let found = {};
      for (let j = i; j < i + len * word_len; j += word_len) {
        //console.log(word)
        if (word == s.substr(j, word_len)) {
          //if (!given[word]) break //substr not found
          //given.add(word)
          if (found[word]) {
            found[word]++;
            count++;
          } else {
            found[word] = 1;
            count++;
            break;
          }

          // console.log(given)
        }
      }
      if (!found[word] || found[word] > given[word]) break;
      console.log("Found count is ", count);
    }
    //console.log('this is the end point', j + word_len)
    //s = "wordgoodgoodgoodbestword", words = ["word", "good", "best", "good"] //[8]
    if (count == len) A.push(i);
    //if (given.size == len) A.push(i)
    //given.clear()
    //console.log('this is the start point', i)
  }
  return A;
}
//let s = "barfoothefoobarman"
//let words = ["foo", "bar"]
//s = "barfoofoobarthefoobarman", words = ["bar", "foo", "the"]
(s = "wordgoodgoodgoodbestword"), (words = ["word", "good", "best", "good"]);
//console.log(subStrings(s, words))

function substring(s, words) {
  let word_len = words[0].length;
  let wordsLen = words.length;
  let memo = {};
  let output = [];

  for (let word of words) memo[word] ? memo[word]++ : (memo[word] = 1);

  for (let i = 0; i < s.length; i += word_len) {
    let start = i;
    let seen = { ...memo };
    console.log(`at `, i);

    for (let j = 0; j < wordsLen; j++) {
      let count = 0;
      for (let i = start; i < start + word_len * wordsLen; i += word_len) {
        // let neww = s.substr(i, word_len)
        // console.log(`neww = `, neww)
        if (words[j] == s.substr(i, word_len)) {
          seen[words[j]]--;
          count++;
          console.log(`found = `, words[j]);
          break;
        } else {
          console.log(`not found = `, words[j]);
        }
      }
      console.log(`seen = `, seen);
      if (count == 0) break;
    }
    //converts object to an array - all values as array
    let found = Object.values(seen).some((item) => item > 0);
    console.log(`All found = `, !found);
    !found && output.push(i);
  }
  return output;
}

//console.log(substring(s, words))

//use memo Object, array or set as a temporary container to hold this
//for SET functionality - set.add , set.has, set.clear, set.sizeof...
//for Array functionaliy - has - if(!memo[A[i]]), add A[i] to specific position A[i] - memo[A[i]] = A[i]
//push A[i] to the last array - A.push(A[i])
//use Array as memo if you dont need the count of the values inserted into the array
//for Object functionality - has - if(!memo[A[i]]), add A[i] value with key A[i] - memo[A[i]] = A[i]
//duplicate memo - duplicate = {...memo}

//use count, max, min...variables to hold values and then compute result as used above

//Remove all even integers from an array
//Input: [4, 1, 9, 10, 15, 22, 5, 14]
//Output: [4, 10, 22, 14]
I = [4, 1, 9, 10, 15, 22, 5, 14];
function evenIntegers(I) {
  let A = [];
  for (let i of I) {
    if (i % 2 == 0) A.push(i);
  }

  //using map
  // I.map(item => {
  //     if (item % 2 == 0) A.push(item)
  // })

  //USIN FILTER
  // let A = I.filter(item => item % 2 == 0)
  return A;
}

//console.log(evenIntegers(I))

//Find all repeated numbers from an array
//Input: [1,2,4,5,6,1,3,7,9,10]
R = [1, 2, 4, 5, 6, 1, 3, 7, 9, 10];
function repeated(R) {
  let memo = {};
  let A = [];
  for (let r of R) {
    !memo[r] ? (memo[r] = 1) : A.push(r);
  }
  console.log(memo);
  return A;
}
//find all unique numbers from the array
const findUniqueNos = (R) => {
  let uniqueNumbers = [];
  R.map((number) => {
    let counts = uniqueNumbers.filter((uniqueNo) => uniqueNo == number);
    console.log(counts);
    if (counts.length == 0) uniqueNumbers.push(number);
  });
  return uniqueNumbers;
};
console.log(findUniqueNos(R));
//console.log(repeated(R))

//STACK
// First input: {[({})]}
// First output: true

// Second input: {[({})}
// Second output: false

stack = "{[({})}";
const stackcheck = (stack) => {
  let memo = [];
  let last = "";

  for (let i = 0; i < stack.length; i++) {
    if (
      (stack[i] == "}" && last == "{") ||
      (stack[i] == "]" && last == "[") ||
      (stack[i] == ")" && last == "(")
    ) {
      memo.pop();
      last = memo[memo.length - 1];
    } else {
      memo[i] = stack[i];
      last = stack[i];
      console.log(`${memo}  ${last}`);
    }
  }
  if (memo.length == 0) {
    return true;
  } else {
    return false;
  }
};

//console.log(stackcheck(stack))
