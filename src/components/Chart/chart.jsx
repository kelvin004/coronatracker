import  React,{ useState,useEffect }  from 'react';
import {fetchdailydata} from '../../api';
import {Line, Bar} from 'react-chartjs-2';
import styles from './chart.module.css';

const Chart = ({data:{confirmed,recovered,deaths},country}) => {

    const[dailydata,setdailydata] = useState([]);

    useEffect(() =>{

        const fetchAPI = async () => {

            setdailydata(await fetchdailydata());
               
        };
         
        fetchAPI();

    },[setdailydata]);

    var chartdata = {
                labels: dailydata.map(({date})=> (date)),
                datasets: [
                    {
                        data: dailydata.map(({confirmed})=> (confirmed)),
                        label:'Infected',
                        bordercolor:'rgb(0,0,255)',
                        fill:true,        
                    },
                    { 
                        data: dailydata.map(({deaths})=> (deaths)),
                        label:'Deaths',
                        bordercolor:'red',
                        backgroundColor:'rgba(255,0,0,0.5)',
                        fill:true,        
                    }   
                ]

    }
    
    const barchart = (

        confirmed ?
        (
          <Bar      
            data = {{
                labels:['Infected','Recovered','Deaths'],
                datasets:[{
                    label:'People',
                    backgroundColor:['rgba(0, 0, 255,0.5)','rgba(0,255,0,0.5)','rgba(255, 0,0,0.5)'],
                    data:[confirmed.value,recovered.value,deaths.value]
                }]
            }}
            options = {{
                    legend:false,
                    title:(true,'Current Status of Covid 19')
                }
            }
          />

        ):null

    );

    const lineChart = (
        
        dailydata.length!==0 ? (
        <Line
            data = {chartdata}
        />):null

    );
     
    if(confirmed){
        console.log(barchart);
        console.log(country);
    }
    return (
        <div className={styles.container}>
            {country?barchart:lineChart}
        </div>
    );
    
}

export default Chart;