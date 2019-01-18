import React, {Component} from 'react';
import ReactTable, {ReactTableDefaults} from 'react-table';
import PropTypes from 'prop-types';
import 'react-table/react-table.css';
import './ColumnReorderableReactTable.css';

Object.assign(ReactTableDefaults, {
  defaultPageSize: 10,
  minRows: 3
});

/**
 * Higher order component to support column reordering in react-table
 */
class ColumnReorderableReactTable extends Component {

  constructor(props) {
    super(props);
    this.dragged = null;
    this.reorder = [];
    this.state = {
      trigger: 0,
      loading: true
    };
  }

  componentDidMount() {
    this.registerEvents();
  }

  componentDidUpdate() {
    this.registerEvents();
  }

  /**
   * Register drag and drop events to support column dragging
   */
  registerEvents() {
    const headers = Array.prototype.slice.call(
      document.querySelectorAll(".draggable-header")
    );

    headers.forEach((header, index) => {
      header.setAttribute("draggable", true);
      header.ondragstart = event => {
        event.stopPropagation();
        this.dragged = index;
      };

      header.ondrag = event => event.stopPropagation;

      header.ondragend = event => {
        event.stopPropagation();
        setTimeout(() => (this.dragged = null), 1000);
      };

      header.ondragover = event => {
        event.preventDefault();
      };

      header.ondrop = event => {
        event.preventDefault();
        this.reorder.push({reorderIndex: index, dragged: this.dragged});
        this.setState({trigger: Math.random()});
      };
    });
  }

  /**
   * Fetch data from server when pagination clicked or column is sorted or filtered
   * @param {object} state - Current pagination state of the table
   * @param {object} instance - Instance of the table
   */
  onFetchData(state, instance) {
    let sortTextArr = [];
    sortTextArr = state.sorted.map((sortOption) => {
      const orderingValue = (sortOption.desc) ? 'desc' : 'asc';
      return `${sortOption.id}_${orderingValue}`;
    });
    let sortedTextStr = sortTextArr.join(',');
    this.props.loadPaginatedData({
      pageSize: state.pageSize,
      pageNum: state.page,
      sortOptions: sortedTextStr
    });
  };

  render() {
    const {rows, columns, loading} = this.props;
    const cols = columns.map(col => ({
      ...col,
      Header: <div className="draggable-header">{col.Header}</div>
    }));
    this.reorder.forEach(
      reorderObject => cols.splice(reorderObject.reorderIndex, 0, cols.splice(reorderObject.dragged, 1)[0])
    );

    return (
      <div className="esr-table">
        <ReactTable {...this.props}
                    onFetchData={this.onFetchData.bind(this)}
                    loading={loading}
                    data={rows} columns={cols}/>
      </div>
    );
  }
}

ColumnReorderableReactTable.propTypes = {
  loadPaginatedData: PropTypes.func.isRequired,
  pages: PropTypes.number.isRequired,
  rows: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

export default ColumnReorderableReactTable;