import React from 'react';
import { Cards, Charts, Countrypicker} from './components';

import styles from './App.module.css';
import {fetchdata} from './api';

class App extends React.Component{

    state = {
        data:{},
        country:"" 
    }
    async componentDidMount()
    {
        const fetchData = await fetchdata();
        this.setState({data:fetchData});
    }

    Handlecountrychanged = async (country) => {
        const fetchData = await fetchdata(country);
        console.log(fetchData);
        this.setState({data:fetchData, country: country})
    };

    render(){
        
        const {data,country} = this.state;

        return(
            <div className = {styles.container}>
                <Cards data={data}></Cards>
                <Countrypicker Handlecountrychanged = {this.Handlecountrychanged}></Countrypicker>
                <Charts data={data} country={country}></Charts>
            </div>
        ) 
    }
}

export default App;