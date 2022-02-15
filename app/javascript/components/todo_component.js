import React from 'react'
import ReactDOM from 'react-dom'

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h2",
        null,
        "Tareas pendientes"
      ),
      React.createElement(TodoList, { items: this.state.items }),
      React.createElement(
        "form",
        { onSubmit: this.handleSubmit },
        React.createElement(
          "label",
          { htmlFor: "new-todo" },
          "\xBFQu\xE9 se necesita hacer? "
        ),
        React.createElement("input", {
          id: "new-todo",
          placeholder: " nueva tarea...",
          onChange: this.handleChange,
          value: this.state.text,
          style: { borderRadius: "5px", marginRight: "5px", color: "blue", paddingLeft: "15px" }
        }),
        React.createElement(
          "button",
          null,
          "A\xF1adir #",
          this.state.items.length + 1
        )
      )
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

class TodoList extends React.Component {
  render() {
    return React.createElement(
      "ul",
      null,
      this.props.items.map(item => React.createElement(
        "li",
        { key: item.id, style: { color: "blue" }},
        item.text,
      ))
    );
  }
}

ReactDOM.render(React.createElement(TodoApp, null), document.getElementById('todos-example'));