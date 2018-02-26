import React from 'react';
import sortBy from '../../utils/sortBy';

const COLUMNS = ['done', 'title', 'priority', 'date'];

class Table extends React.Component {
  static renderPriority = (priority) => {
    const strings = ['Lowest', 'Low', 'Medium', 'High'];
    return strings[priority];
  };
  state = {
    sortBy: null,
  };

  setSortBy = (sortBy) =>
    this.setState({
      sortBy,
    });
  renderHeader() {
    return (
      <thead>
        <tr>
          {COLUMNS.map((name) => (
            <th key={name}>
              {name}
              {/* <hr /> */}
              <button onClick={(_) => this.setSortBy(name)}>&#x25B4;</button>
              <button onClick={(_) => this.setSortBy(`-${name}`)}>
                &#x25BE;
              </button>
            </th>
          ))}
        </tr>
      </thead>
    );
  }

  renderBody() {
    return (
      <tbody>
        {sortBy(this.props.items, this.state.sortBy).map((item) => (
          <tr key={item.id}>
            <td>
              <input type="checkbox" checked={item.done} />
            </td>
            <td>{item.title}</td>
            <td>{Table.renderPriority(item.priority)}</td>
            <td>{item.date.toLocaleDateString('en-US')}</td>
          </tr>
        ))}
      </tbody>
    );
  }
  render() {
    return (
      <table>
        {this.renderHeader()}
        {this.renderBody()}
        <caption>{this.state.sortBy}</caption>
      </table>
    );
  }
}

export default Table;
