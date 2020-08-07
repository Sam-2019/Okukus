import React from "react";
import pic from "./pic.png";

let list = [
  {
    fName: "Elon Musk ",
    url: "https://tesla.com ",
    clique: "PayPal Mafia ",
    education: "Wharton ",
    avatar: { pic },
    objectID: 0,
    portfolio: {
      ecommerce: "none",
      vehicle: "Tesla",
      space: "SpaceX"
    }
  },

  {
    fName: "Jeff Bezos ",
    url: "https://amazon.com",
    clique: "unknown ",
    education: "Princeton ",

    objectID: 1,
    portfolio: {
      ecommerce: "Amazon",
      vehicle: "none",
      space: "BlueOrigin"
    }
  },

  {
    fName: "Peter Thiel ",
    url: "https://foundersfund.com ",
    clique: "PayPal Mafia ",
    education: "Stanford ",
    objectID: 2,
    portfolio: {
      ecommerce: "none",
      vehicle: "none",
      space: "none"
    }
  }
];

function isSearched(searchTerm) {
  return function(item) {
    return (
      !searchTerm || item.fName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };
}

class RoadtoReact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list,
      searchTerm: ""
    };

    this.onSearchChange = this.onSearchChange.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  onDismiss(id) {
    const isNotId = item => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotId);
    this.setState({ list: updatedList });
  }

  render() {
    const { searchTerm, list } = this.state;
    return (
      <div className="RoadtoReact">
        <Search value={searchTerm} onChange={this.onSearchChange}>
          Search
        </Search>

        <br />
        {this.state.list.filter(isSearched(this.state.searchTerm)).map(item => (
          <div key={item.objectID}>
            <span>
              <a href={item.url}>{item.fName}</a>
            </span>
            <span>{item.clique}</span>,<span>{item.education}</span>,
            <span>{item.portfolio.space}</span>,
            <span>
              <button
                onClick={() => this.onDismiss(item.objectID)}
                type="button"
              >
                Dismiss
              </button>
            </span>
          </div>
        ))}
      </div>
    );
  }
}

function Search({ value, onChange, children }) {
  return (
    <form>
      {children} <input type="text" value={value} onChange={onChange} />
    </form>
  );
}
export default RoadtoReact;
