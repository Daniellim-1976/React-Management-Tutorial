import React,{Component} from 'react';
import './App.css';
import Customer from './components/Customer'

const customer ={
  'name':'ȫ�浿',
  'birthday':'961222',
  'gender':'����',
  'job':'���л�'
}
class App extends Component{
  render(){
    return (
      <Customer
        name={customer.name}
        birthday={customer.birthday}
        gender={customer.gender}
        job={customer.job}
      />
    );
  }
}

export default App;
