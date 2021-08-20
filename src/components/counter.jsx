import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <React.Fragment><br />
        <span className={this.getBadgeClasses()}> {this.formatCount()} </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </React.Fragment>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
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
//     if (this.props.counter.tags.length === 0) return <p>There are no tags!</p>;

//     return (
//       <ul>
//         {" "}
//         {this.props.counter.tags.map((tag) => (
//           <li key={tag}> {tag} </li>
//         ))}
//       </ul>
//     );
//   }

//   render() {
//     return (
//       <div>
//         {this.props.counter.tags.length === 0 && "Please create a new tag"}
//         {this.renderTags()}
//       </div>
//     );
//   }
// }

// export default Counter;
