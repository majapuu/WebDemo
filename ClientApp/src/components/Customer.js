import React, { Component } from 'react';

export class Customer extends Component {
  displayName = Customer.name

  constructor(props) {
    super(props);
    this.state = { Customer: [], loading: true };

    fetch('api/Customer')
      .then(response => response.json())
      .then(data => {
        this.setState({ Customer: data, loading: false });
      });
  }

  static renderCustomersTable(Customer) {
    return (
      <table className='table'>
        <thead>
          <tr>
            <th>Asiakas ID</th>
            <th>Yrityksen nimi. (C)</th>
            <th>Yhteyshenkilö</th>
            <th>Titteli</th>
          </tr>
        </thead>
        <tbody>
          {Customer.map(Customers =>
            <tr key={Customers.customerID}>
              <td>{Customers.customerID}</td>
              <td>{Customers.companyName}</td>
              <td>{Customers.contactName}</td>
              <td>{Customers.contactTitle}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Lataa...</em></p>
      : Customer.renderCustomersTable(this.state.Customer);

    return (
      <div>
        <h1>Tietoja asiakkaista</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }
}
