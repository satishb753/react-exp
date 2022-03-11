class Experiment {
    
  duplicateCharCount(str) {
    if(str) {
      var obj = {};
      for(let i = 0; i < str.length; i++) {
        if(obj[str[i]]){
          obj[str[i]] += 1;
        }else {
          obj[str[i]] = 1;
        }
      }
      console.log(obj);
    }
      
  }
  
}

let exp = new Experiment()

exp.duplicateCharCount('mississippi')