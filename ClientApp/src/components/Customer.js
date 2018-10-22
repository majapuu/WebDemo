import React, { Component } from 'react';

export class FetchData extends Component {
  displayName = FetchData.name

  constructor(props) {
    super(props);
    this.state = { customers: [], loading: true };

    fetch('api/customer')
      .then(response => response.json())
      .then(data => {
        this.setState({ customers: data, loading: false });
      });
  }

  static renderCustomersTable(customers) {
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
          {customers.map(customer =>
            <tr key={customers.CustomerID}>
              <td>{customers.CustomerID}</td>
              <td>{customers.CompanyName}</td>
              <td>{customers.ContactName}</td>
              <td>{customers.ContactTitle}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchData.renderCustomersTable(this.state.customer);

    return (
      <div>
        <h1>Asikkaita</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }
}
