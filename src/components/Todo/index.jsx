import React from 'react';
import Table from '../Table';
import { getItems, addItem } from '../../utils/api';
import AddForm from '../AddForm';
import Filter from '../Filter';
import styles from './Todo.css';

class Todo extends React.Component {
  static renderSpiner() {
    return <div>....spiner</div>;
  }
  state = {
    items: null,
    filter: {},
  };

  componentWillMount() {
    getItems().then((items) => this.setState({ items }));
  }

  onFilterChange = (filter) => this.setState({ filter });

  getFilteredItems = () => {
    return this.state.filter.showCompleted
      ? this.state.items
      : this.state.items.filter((item) => !item.done);
  };

  addItem = (item) => {
    addItem(item).then((newItem) =>
      this.setState({
        items: [...this.state.items, newItem],
      })
    );
  };

  renderTodo() {
    return (
      <div className="wrapper">
        <AddForm onSubmit={this.addItem} />
        <Filter onFilterChange={this.onFilterChange} />
        <Table items={this.getFilteredItems()} />
      </div>
    );
  }

  render() {
    return this.state.items ? this.renderTodo() : Todo.renderSpiner();
  }
}

export default Todo;
