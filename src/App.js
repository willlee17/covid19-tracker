import React from 'react';
import Cards from './components/cards/cards';
import Chart from './components/chart/chart';
import CountryPicker from './components/country-picker/country-picker';
import covidimage from './img/covidimage.png';

import styles from './App.module.css';
import { fetchData } from './api';

class App extends React.Component {
  
  state = {
    data: {},
    country: '',
  }
  
  async componentDidMount() {
    const fetchedData = await fetchData();  
    this.setState({data: fetchedData})

    console.log('ekko: ', fetchedData)
  }

  handleCountryChange = async (country) => {
    const fetchedCountry = await fetchData(country)

    this.setState({
      data: fetchedCountry,
      country: country
    })
  }

  render() {
    const { data, country } = this.state
    return (
      <div className={styles.container}>
        <img src={covidimage} className={styles.image} alt="Covid-19"/>
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country}/>        
      </div>
    )
  }
}

export default App;