import React, { Component } from "react";
import Table from "./common/table/table";
import Vote from "./common/vote";

class HackerTable extends Component {
  columns = [
    { path: "num_comments", label: "Comments" },
    { path: "points", label: "Vote Counts" },
    {
      key: "vote",
      content: (hit) => (
        <Vote voted={hit.voted} onClick={() => this.props.onVote(hit)} />
      ),
    },

    { path: "title", label: "News Details" },
    {
      key: "delete",
      content: (hit) => (
        <button
          onClick={() => this.props.onDelete(hit)}
          className="btn btn-danger btn-sm"
        >
          Hide
        </button>
      ),
    },
  ];
  render() {
    const { hits } = this.props;
    return <Table columns={this.columns} data={hits} />;
  }
}

export default HackerTable;
