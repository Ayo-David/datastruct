// Input: s = "barfoothefoobarman", words = ["foo","bar"]
// Output: [0,9]
// Explanation: Substrings starting at index 0 and 9 are "barfoo" and "foobar" respectively.
// The output order does not matter, returning [9,0] is fine too.

function subStrings(s, words) {
    let A = []
    //let given = new Set()
    let given = {}
    let s_len = s.length
    let len = words.length
    let word_len = words[0].length
    //console.log(word_len)

    for (let word of words) {
        if (given[word]) {
            given[word]++
        } else {
            given[word] = 1
        }
    }
    console.log(given)
    for (let i = 0; i < s_len; i += word_len) {
        console.log('this is the start point', i)
        let count = 0
        for (let word of words) {
            let found = {}
            for (let j = i; j < i + (len * word_len); j += word_len) {
                //console.log(word)
                if (word == s.substr(j, word_len)) {
                    //if (!given[word]) break //substr not found
                    //given.add(word)
                    if (found[word]) {

                        found[word]++
                        count++ 
                    } else {
                        found[word] = 1
                        count++
                        break
                    }

                    // console.log(given)

                }
            }
            if (!found[word] || found[word] > given[word]) break
            console.log('Found count is ', count)

        }
        //console.log('this is the end point', j + word_len)
        //s = "wordgoodgoodgoodbestword", words = ["word", "good", "best", "good"] //[8]
        if (count == len) A.push(i)
        //if (given.size == len) A.push(i)
        //given.clear()
        //console.log('this is the start point', i)

    }
    return A
}
//let s = "barfoothefoobarman"
//let words = ["foo", "bar"]
//s = "barfoofoobarthefoobarman", words = ["bar", "foo", "the"]
s = "wordgoodgoodgoodbestword", words = ["word", "good", "best", "good"]
console.log(subStrings(s, words))