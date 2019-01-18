import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import moment from 'moment'
import PropTypes from 'prop-types';
import ColumnReorderableReactTable from '../shared/tables/ColumnReorderableReactTable';
import 'react-table/react-table.css';
import 'react-table-material/Table.css';
import './InvestmentTable.css';

/**
 * Table component to display the investment data
 */
class InvestmentTable extends Component {

  /**
   * Load paginated data for the table
   * @param {object} pagingData - paging information to be used when loading investments data
   */
  loadPaginatedData = (paginatedData) => {
    this.props.loadInvestmentData(paginatedData);
  };

  render() {
    const {data, pages, loading} = this.props;
    const columns = [
      {Header: "Id", accessor: "id"},
      {Header: "Investment", accessor: "investmentName"},
      {
        Header: "Commitment Date",
        accessor: "commitmentDate",
        Cell: row => {
          return moment(row.value).format("DD/MM/YYYY");
        }
      },
      {
        Header: "Market Value",
        accessor: "marketValue",
        Cell: row => {
          return (
            <span>
              <span style={{color: row.value < 6000 ? '#ff2e00' : '#57d500'}}>
                &#x25cf;
              </span> {`$ ${row.value}`}
            </span>
          );
        }
      }
    ];
    return (
      <Card className='investment-details-card'>
        <CardContent>
          <ColumnReorderableReactTable
            rows={data}
            pages={pages}
            columns={columns}
            defaultPageSize={5}
            pageSizeOptions={[5, 10, 15, 20]}
            manual
            loadPaginatedData={this.loadPaginatedData}
            loading={loading}
            className="-striped -highlight"
          />
        </CardContent>
      </Card>
    );
  }
}

InvestmentTable.propTypes = {
  loadInvestmentData: PropTypes.func.isRequired,
  pages: PropTypes.number.isRequired,
  data: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

export default InvestmentTable;