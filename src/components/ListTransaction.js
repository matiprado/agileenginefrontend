import React from "react";
import Transaction from "./Transaction";

const API = "http://localhost:8080/transaction/account/1";

class ListTransaction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: -1,
      transactions: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch(API)   .then(function(response) {
      if(response.status === 200) {
      return response.json();
      }
    }) .then(response => {
      if(response) {
        this.setState({ transactions: response })
      }
    })
  }


  handleChange(panel) {
    if (this.state.expanded !== panel) {
      this.setState({ expanded: panel });
    } else {
      this.setState({ expanded: -1 });
    }
  }

  render() {
    const { transactions, expanded } = this.state;
   if (transactions.length === 0){
     return("Transactions list is empty");
   }
    return (
      <div>
        {transactions.map(transaction => (
          <Transaction key={transaction.id}
            expanded={expanded}
            transaction={transaction}
            handleChange={this.handleChange}
          />
        ))}
      </div>
    );
  }
}

export default ListTransaction;
