function calculate(expression) {
    if(!expression) {'You must provide valid experssion'}
    let stack = [];
    const newExpression = expression.split(' ')
    
    for( let i=newExpression.length -1; i >=0; i--) {
      if (newExpression[i] === 0 ) {return 0}
      if(!isNaN(newExpression[i])){
        stack.push(parseFloat(newExpression[i]))
      }
      else {
        let a = stack[stack.length - 1]
        stack.pop()
        let b = stack[stack.length - 1]
        stack.pop()
        if (newExpression[i] === '+') {stack.push(a + b)}
       else if (newExpression[i] === '-') {stack.push(a - b)}
       else if (newExpression[i] === '*') {stack.push(a + b)}
       else if (newExpression[i] === '/') {stack.push(a + b)}
      }
    } 
    return stack[stack.length - 1]  
  }

 console.log('result', calculate('135'))