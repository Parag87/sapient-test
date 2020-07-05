import React, { Component } from "react";
import HackerTable from "./hackerTable";
import Pagination from "./common/pagination/pagination";
import { paginate } from "./utils/paginate";

class HackerNews extends Component {
  state = {
    hits: [],
    currentPage: 1,
    pageSize: 8,
  };
  async componentDidMount() {
    const response = await fetch(
      "https://hn.algolia.com/api/v1/search_by_date?tags=story"
    );
    const result = await response.json();
    this.setState({ hits: result.hits });
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleDelete = (hit) => {
    const hits = this.state.hits.filter((h) => {
      return hit.title !== h.title;
    });
    this.setState({ hits });
  };

  handleVote = (hit) => {
    const hits = [...this.state.hits];
    const index = hits.indexOf(hit);
    hits[index] = { ...hits[index] };
    hits[index].voted = !hits[index].voted;
    this.setState({ hits });
  };
  render() {
    const { currentPage, pageSize, hits } = this.state;
    const dataList = paginate(hits, currentPage, pageSize);
    return (
      <div className="row">
        <div className="col">
          <HackerTable
            hits={dataList}
            onDelete={this.handleDelete}
            onVote={this.handleVote}
          />
          <Pagination
            itemCount={hits.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default HackerNews;
