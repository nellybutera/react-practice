import React, { Component } from "react";
<script
  src="https://kit.fontawesome.com/a076d05399.js"
  crossorigin="anonymous"
></script>;
class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log('previous props',prevProps);
    console.log("previous state", prevState);

    if(prevProps.counter.value !== this.props.counter.value){
      //Ajax call and get new data from the server
    }
  }
  componentWillUnmount(){
    console.log('counter - unmount')
  }
  render() {
    console.log('counter - rendered')
    return (
      <React.Fragment>
        <br />
        <div className="row">
          <div className="col-sm">
            <span className={this.getBadgeClasses()}>
              {" "}
              {this.formatCount()}{" "}
            </span>
          </div>
          <div className="col-sm">
            <button
              onClick={() => this.props.onIncrement(this.props.counter)}
              className="btn btn-secondary btn-sm"
            >
              <i class="fa fa-plus"></i>
            </button>
          </div>
          <div className="col-sm">
            <button
              onClick={() => this.props.onDecrement(this.props.counter)}
              {...this.getDisabledState()}
              className="btn btn-secondary btn-sm"
            >
              <i class="fa fa-minus"></i>
            </button>
          </div>
          <div className="col-sm">
            <button
              onClick={() => this.props.onDelete(this.props.counter.id)}
              className="btn btn-danger btn-sm m-2"
            >
              <i className="fa fa-close"></i>
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
  
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  getDisabledState() {
    let classes = "";
    classes += this.props.counter.value === 0 ? "disabled" : " ";
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
