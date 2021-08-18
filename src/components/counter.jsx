import React, { Component } from "react";
// import 'Counters' from "./counters"

class Counter extends Component {
  state = {
    value: this.props.counter.value,
  };

  handleIcrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    let classes = this.getBadgeClasses();
    console.log("props", this.props);

    return (
      <React.Fragment>
        <br />
        <span className={classes}> {this.formatCount()} </span>
        <button
          onClick={() => {this.handleIcrement();}}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
      </React.Fragment>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;

// import React, { Component } from "react";

// class Counter extends Component {
//   state = {
//     count: 0,
//     tags: ["tag1", "tag2", "tag3"],
//   };

//   renderTags() {
//     if (this.state.tags.length === 0) return <p>There are no tags!</p>;

//     return (
//       <ul>
//         {" "}
//         {this.state.tags.map((tag) => (
//           <li key={tag}> {tag} </li>
//         ))}
//       </ul>
//     );
//   }

//   render() {
//     return (
//       <div>
//         {this.state.tags.length === 0 && "Please create a new tag"}
//         {this.renderTags()}
//       </div>
//     );
//   }
// }

// export default Counter;
