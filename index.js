function theBeatlesPlay(x, y){
  var emptyArray = [];
  
  for(var i = 0; i < x.length; i++)
  {
    var push = x[i] + " plays " +  y[i]
    emptyArray.push(push)
  }
  
  return emptyArray
}

function johnLennonFacts(x){
  var y = []
  var counter = 0
  var index = x.length
  while (counter < index) {
    y.push(x[counter] + "!!!")
    counter ++
  }
  return y; 
}

function 