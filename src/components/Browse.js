import React, { Component } from 'react'
import WLCard from './WLCard'

class Browse extends Component {
  render() {
    return (
      <div className='list'>
        <h2>PortFolio </h2>       
        <ul>
          {this.props.stocks.map(stock=>{
            return (
              <li key={stock.ticker}>
                <WLCard     
                  ticker={stock.ticker}                  
                  change={((stock.currentVal- stock.prevDayVal)/stock.prevDayVal)*100}
                />                
              </li>
              );
            })
          }
          
        </ul>
      </div>
    )
  }
}

export default Browse
