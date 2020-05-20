import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  constructor(){
    super()
    this.state={
      stocks: [],
      myStocks: []
    }
  }

  componentDidMount(){
    fetch("http://localhost:3000/stocks")
      .then(response => response.json())
      .then(data => this.setState({stocks: data}))
  }

  buyStock = (stock) => {
    console.log(stock)
    this.setState({
      myStocks: [...this.state.myStocks, stock]
    })
  }

  removeStock = (stock) => {
    console.log(stock)
    this.setState({
      myStocks: this.state.myStocks.filter(s=> s !== stock)})
  }

  render() {
    return (
      <div>
        <SearchBar/>

          <div className="row">
            <div className="col-8">

              <StockContainer 
                  stocks={this.state.stocks} 
                  buyStock={this.buyStock} />

            </div>
            <div className="col-4">

              <PortfolioContainer
                myStocks={this.state.myStocks} 
                removeStock={this.removeStock} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
