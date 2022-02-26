
Array.prototype.newMap = function (callback) {
    let retorno = []
    for (let counter = 0; counter < this.length; counter++){
      retorno.push(callback(this[counter]))
    }
    return retorno
}

Array.prototype.newForEach = function (callback) {
  
  for (let counter = 0; counter < this.length; counter++){
      callback(this[counter], counter, this)
  }
  
}

Array.prototype.newFilter = function (callback) {
  let retorno = []
  for (let counter = 0; counter < this.length; counter++){
    if (callback(this[counter])) {
      retorno.push(this[counter])
    }
  }
  return retorno
}

Array.prototype.newFind = function (callback) {
  for (let counter = 0; counter < this.length; counter++){
    if (callback(this[counter])) {
      return this[counter]
    }
  }
}

Array.prototype.newFindIndex = function (callback) {
  for (let counter = 0; counter < this.length; counter++){
    if (callback(this[counter])){
      return counter
    }
  }
    return -1
}

Array.prototype.newReduce = function (callback, valorInicial = true) {
      
      if (typeof valorInicial === 'number') {
        let acumulador = valorInicial
        for (let counter = 0; counter <this.length; counter++){
          acumulador = callback(acumulador, this[counter], counter, this)
        }
        return acumulador
      } else {
        let acumulador = this[0]
        for (let counter = 1; counter <this.length; counter++){
          acumulador = callback(acumulador, this[counter], counter, this)
        }
        return acumulador
      }
       
}

Array.prototype.newSome = function (callback) {

  for (let counter = 0; counter < this.length; counter++){
    if (callback(this[counter], counter, this)){
      return true
    }
  }
  return false

}

Array.prototype.newEvery = function (callback) {
  let check = 0
  for (let counter = 0; counter < this.length; counter++){
    if (callback(this[counter], counter, this)) {
      check++
    }
  }

  if (check === (this.length)){
    return true
  } else {
    return false
  }

}

Array.prototype.newFill = function (value, initial, end) {
  let newArr = []

  for (let counter = 0; counter < this.length; counter++){
    newArr.push(value)
  }
  return newArr
}

Array.prototype.newIncludes = function (searcheElement, fromIndex = true){

  if (typeof fromIndex === 'number'){

    for (let counter = fromIndex; counter < this.length; counter++){
      if (searcheElement === this[counter]){
        return true
      }
    }
    return false
  } else {
    for (let counter = 0; counter < this.length; counter++){
      if (searcheElement === this[counter]){
        return true
      }
    }
    return false
  }

}


Array.prototype.newIndexOf = function (searchElement, initialPoint = true) {

     
  if (typeof searchElement === 'number'){

    if (initialPoint < 0) {
      for (let counter = (this.length-1); counter > ((this.length-1) - initialPoint); counter--){     
        if (searchElement === this[counter]){
          return counter
            }
              }
                return -1
                        } else {

                          for (let counter = 0; counter < this.length; counter++){
                            if (searchElement === this[counter]){
                              return counter
                                            }
                                              }
                                                return -1
                                                          }    
                                                            }

    for (let counter = (this.length-1); counter > ((this.length-1) - initialPoint); counter--){
     
      if (searchElement === this[counter]){
        return counter
                      }
                       }
                        return -1
                                   }
  

Array.prototype.newConcat = function (...test) {
  
  let retorno = []

  for (counter = 0; counter < this.length; counter++) {
    retorno.push(this[counter])
  }


  for (let counter = 0; counter < test.length; counter++){

    for (let counter2 = 0; counter2 < test[counter].length; counter2++){
      retorno.push(test[counter][counter2])
    }
  }
  return retorno
}

Array.prototype.newJoin = function (recive) {
  let str = ""

  for (let counter = 0; counter < this.length; counter++) {
    
    if (counter === (this.length -1)){
      str = str + this[counter]
      break
    }
    
    str = str + this[counter] + recive
  }
    return str
}

















