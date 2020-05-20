import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
        {this.props.myStocks.map(myStock => <Stock 
                                              stock={myStock}
                                              key={myStock.id}
                                              removeStock={this.props.removeStock} />)}
          {
            //render your portfolio stocks here
          }
      </div>
    );
  }

}

export default PortfolioContainer;
