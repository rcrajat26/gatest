import {Route, Routes} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Browse from './components/Browse'
import AddFund from './components/AddFund'
import Profile from './components/Profile'
import FundsAdded from './components/FundsAdded'
import './App.css';
import Navbar from './components/Navbar'
import NoMatch from './components/NoMatch'
import { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentVal: 11,
      investedVal: 13,
      wallet: 5,
      portfolio : [
        {
          ticker: "EPAM",
          shares: 0.1,
          currentVal: 10,
          prevDayVal: 9,
        },
        {
          ticker: "XOM",
          shares: 0.3,
          currentVal: 2,
          prevDayVal: 1.8,
        },
        {
          ticker: "T",
          shares: 0.1,
          currentVal: 1.9,
          prevDayVal: 2,
        },
        {
          ticker: "QCOM",
          shares: 0.1,
          currentVal: 5,
          prevDayVal: 3.2,
        },
        {
          ticker: "UNH",
          shares: 0.1,
          currentVal: 99,
          prevDayVal: 80,
        },
        {
          ticker: "ABBV",
          shares: 0.1,
          currentVal: 55,
          prevDayVal: 56,
        },
        {
          ticker: "WPC",
          shares: 0.1,
          currentVal: 2000,
          prevDayVal: 2201,
        }
      ],
      watchList: [
        {
          ticker: "COIN",          
          currentVal: 10,
          prevDayVal: 9,
        },
        {
          ticker: "SHOP",          
          currentVal: 10,
          prevDayVal: 9,
        },
        {
          ticker: "NFLX",          
          currentVal: 10,
          prevDayVal: 9,
        },
        {
          ticker: "NVDA",          
          currentVal: 10,
          prevDayVal: 9,
        }
      ],
      allStocks: [
        {
          ticker: "EPAM",          
          currentVal: 10,
          prevDayVal: 9,
        },
        {
          ticker: "XOM",          
          currentVal: 1200,
          prevDayVal: 1189,
        },
        {
          ticker: "COIN",          
          currentVal: 1189,
          prevDayVal: 1200,
        },
        {
          ticker: "SHOP",          
          currentVal: 261454,
          prevDayVal: 258991,
        },
        {
          ticker: "NFLX",          
          currentVal: 14,
          prevDayVal: 17,
        },
        {
          ticker: "NVDA",          
          currentVal: 201,
          prevDayVal: 202,
        },
        {
          ticker: "T",          
          currentVal: 20001,
          prevDayVal: 19985,
        },
        {
          ticker: "QCOM",          
          currentVal: 11,
          prevDayVal: 9,
        },
        {
          ticker: "UNH",          
          currentVal: 80,
          prevDayVal: 57,
        },
        {
          ticker: "ABBV",          
          currentVal: 855,
          prevDayVal: 900,
        },
        {
          ticker: "WPC",          
          currentVal: 85,
          prevDayVal: 58,
        },
        {
          ticker: "V",          
          currentVal: 9668,
          prevDayVal: 9612,
        },
        {
          ticker: "TSLA",          
          currentVal: 8585,
          prevDayVal: 9000,
        }
      ]
    }
  }

  updateBal = (amt) => {
    this.setState((prev) => ({
      wallet: prev.wallet + amt
    }))
  }
  render() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path='/' element={
            <Dashboard 
              currVal={this.state.currentVal}
              invVal={this.state.investedVal}
              wallet={this.state.wallet}
              folio={this.state.portfolio}
              wlist={this.state.watchList}
            />
          }></Route>
          <Route path='/browse' element={
            <Browse
              stocks={this.state.allStocks}
            />
          }></Route>
          <Route path='/add-fund' element={<AddFund updateFunc={this.updateBal}/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
          <Route path='/funds-added' element={<FundsAdded/>}></Route>
          <Route path='*' element={<NoMatch/>}></Route>
        </Routes>
      </>
    );
  }
}

export default App;
