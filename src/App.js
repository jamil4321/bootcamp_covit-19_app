import React from 'react';
import {Cards,Chart,CountryPicker} from './components';
import styles from './App.module.css';
import{fetchData} from './api';
import coranaImage from './images/image.png'



class App extends React.Component{

  state = {
    data:{},
    country:''
  }

  async componentDidMount(){
    const fetchedData = await fetchData()
    this.setState({data: fetchedData})
  }
  handleCountryCahnge = async (country)=>{
    const fetchedData = await fetchData(country)
    this.setState({data: fetchedData,country:country})
  }
  render(){
    const {data,country} = this.state;
    return(
      <div className={styles.container}>
        <img src={coranaImage} alt="Covit-19"/>
        <Cards data = {data}/>
        <CountryPicker handleCountryCahnge={this.handleCountryCahnge} />
        <Chart data = {data} country={country}/>
       
      </div>
    )
  }
}


export default App;