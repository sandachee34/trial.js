class Calculator{
    constructor(previousTextElement,currentTextElement){
    this.previousTextElement = previousTextElement
    this.currentTextElement = currentTextElement
    this.clear()  
}
  clear(){
      this.current=''
      this.previous=''
      this.operation= undefined
  }
  delete(){

  }
  appendNumber(number){
    this.current = number
  }
  chooseOperation(operation){

  }
  compute(){

  }
  updateDisplay(){
       this.currentTextElement.innerText=this.current
  }
}
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operand]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousTextElement = document.querySelector('[data-previous]')
const currentTextElement= document.querySelector('[data-current]')

const calculator =new Calculator(previousTextElement,currentTextElement)

numberButtons.forEach(button=>{
    button.addEventListener('click',() =>{
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})