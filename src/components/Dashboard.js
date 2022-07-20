import React, { Component } from 'react'
import Card from './Card'
import FolioCard from './FolioCard'

class Dashboard extends Component {
  render() {
    return (
      <>
      <div>
        <Card name='Wallet Balance' value={this.props.wallet} />
        <Card name='Current Value' value={this.props.currVal} />
        <Card name='Invested Value' value={this.props.invVal} />
      </div>
      <div className='list'>
        <h2>PortFolio </h2>       
        <ul>
          {this.props.folio.map(stock=>{
            return (
              <li key={stock.ticker}>
                <FolioCard 
                  ticker={stock.ticker}
                  shares={stock.shares}
                  currVal={stock.currentVal}
                  change={((stock.currentVal- stock.prevDayVal)/stock.prevDayVal)*100}
                />                
              </li>
              );
            })
          }
          
        </ul>
      </div>
      </>
    )
  }
}

export default Dashboard
