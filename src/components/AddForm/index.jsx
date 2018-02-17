import React from 'react';

class AddForm extends React.Component {
  onSubmit = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const data = [...form.querySelectorAll('[name]')].reduce((hash, item) => {
      if (item.getAttribute('name') === 'date') {
        item.value
          ? (hash.date = new Date(item.value))
          : (hash.date = new Date());
      } else {
        hash[item.getAttribute('name')] = item.value;
      }

      return hash;
    }, {});
    this.props.onSubmit(data);
    form.reset();
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <fieldset>
          <legend>Add Task</legend>
          <input name="title" placeholder="title" />
          <select name="priority">
            <option value="0">Lowest</option>
            <option value="1">Low</option>
            <option value="2">Medium</option>
            <option value="3">High</option>
          </select>
          <input type="date" name="date" />
          <br />
          <textarea
            name="description"
            rows="5"
            cols="40"
            placeholder="description"
          />
          <br />
          <button>Add</button>
        </fieldset>
      </form>
    );
  }
}

export default AddForm;
