import React, { useState } from "react";
import { connect } from "react-redux";
import { Button } from "reactstrap";

const SearchExample = (props) => {
  const [filterText, setFilterText] = useState("");

  const filteredItems = props.data.filter(
    data =>
      data.title.toLocaleLowerCase().includes(filterText)
  );

  const itemsToDisplay = filterText ? filteredItems : props.data;

  return (
    <div style={{ padding: "20px 50px" }}>
      {/* <h4>Search Page</h4> */}
      <input
        type="text"
        placeholder="Filter items by keyword"
        value={filterText}
        onChange={e => setFilterText(e.target.value.toLocaleLowerCase())}
      />
      <Button onClick={() => {}} variant="outline-success">Search</Button>

      <hr />
      {!filteredItems.length && (
        <div>There are no items to display adjust your filter criteria</div>
      )}
      {filterText && itemsToDisplay.map(item => (
        <div key={item.title}>
          <img alt='car' src={item.image} width="80" height="40" />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  const { data } = state.ProductReducer
  return { data };
}

export default connect(mapStateToProps, null)(SearchExample);