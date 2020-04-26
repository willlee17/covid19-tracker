import React from 'react';
import Cards from './components/cards/cards';
import Chart from './components/chart/chart';
import CountryPicker from './components/country-picker/country-picker';

import styles from './App.module.css';
import { fetchData } from './api';

class App extends React.Component {
  
  state = {
    data: {},
  }
  
  async componentDidMount() {
    const fetchedData = await fetchData();  
    this.setState({data: fetchedData})

    console.log('ekko: ', fetchedData)
  }

  render() {
    const { data } = this.state
    return (
      <div className={styles.container}>
        <Cards data={data}/>
        <Chart />
        <CountryPicker />
      </div>
    )
  }
}

export default App;