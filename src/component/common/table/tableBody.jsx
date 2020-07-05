import React, { Component } from "react";
import _ from "lodash";
import Parser from "html-react-parser";

class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item);
    if (column.path === "title") {
      const items =
        item.title +
        "<div class='titleAuth'>(" +
        item.url +
        ") by " +
        item.author +
        "</div>";
      return Parser(items);
    }
    return _.get(item, column.path);
  };
  createKey = (item, column) => {
    return item.points + (column.path || column.key);
  };
  render() {
    const { data, columns } = this.props;
    return (
      <tbody>
        {data.map((item) => (
          <tr key={item.title}>
            {columns.map((column) => (
              <td key={this.createKey(item, column)}>
                {this.renderCell(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
