const OddOccur = (A, B) => {
  let S = new Set();
  let i = 0;
  for (let a of A) {
    i++;
    if (a <= B) {
      if (!S.has(a)) {
        S.add(a);
      }

      if (S.size == B) {
        return i - 1;
      }
    }
  }
  return -1;
};

console.log(`OddOccur() = `, OddOccur([1, 2, 3, 1, 5, 4, 2, 1], 5));
