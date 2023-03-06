function giveMeFive(obj){
    //coding here
    let myKey = []
    for (const key in obj) {
        if(key.length === 5) myKey.push(key)
        if(obj[key].length === 5) myKey.push(obj[key])
    }
    return myKey
    
  }
giveMeFive({Ihave:"enough", money:"to",buy:"a",car:"model"})