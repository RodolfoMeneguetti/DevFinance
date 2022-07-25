const Modal = {
  open(){
    document.querySelector('.modal-overlay').classList.add('active')
  }, 
  close(){
    document.querySelector('.modal-overlay').classList.remove('active')
  }
}

const transaction = [
  {
  id: 1, 
  description: 'Luz', 
  amount: -50000,
  date: '29/06/2022'
}, 
  {
  id: 2, 
  description: 'WebSite', 
  amount: 5000000,
  date: '29/06/2022'
}, 
  {
  id: 1, 
  description: 'Internet', 
  amount: -20000,
  date: '29/06/2022'
}, 
] 

const Transaction = {
  incomes(){
    //somar todas as entradas
  }, 
  expenses(){
    // Somar saidas
  },
  total(){
    // entradas e saidas 
  }
}