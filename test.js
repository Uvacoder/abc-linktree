class PleaseWork {
  constructor() {
    this.cache = {};
  }
  cacheAnswers(arr) {
    if (this.cache["arr"]) {
      return this.cache["arr"];
    }
    this.cache["arr"] = [];
    for (let i = 0; i < arr.length; i++) {
      this.cache["arr"].push(arr[i]);
    }
    return this.cache["arr"];
  }
}
const array = ["Taylor", "Michelle", "Splinter"];
const arrayOne = new PleaseWork();
console.log(arrayOne.cacheAnswers(array));
