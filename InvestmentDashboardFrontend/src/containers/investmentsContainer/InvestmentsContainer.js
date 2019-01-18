import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as investmentDataActions from '../../actions/investmentDataActions'
import InvestmentTable from '../../components/investmentTable/InvestmentTable';

/**
 * Investments tab container
 */
export class InvestmentsContainer extends Component {

  render() {
    return (
      <InvestmentTable loadInvestmentData={this.loadInvestmentData}
                       data={this.props.investments.rows}
                       pages={this.props.investments.pages}
                       loading={this.props.investments.loading}/>
    );
  };

  /**
   * Load investment data for the table
   * @param {object} pagingData - paging information to be used when loading investments data
   */
  loadInvestmentData = (pagingData) => {
    this.props.investmentDataActions.loadInvestmentData(pagingData);
  }
}

function mapStateToProps(state) {
  let {investments} = state;
  return {investments};
}

function mapDispatchToProps(dispatch) {
  return {
    investmentDataActions: bindActionCreators(investmentDataActions, dispatch)
  };
}

InvestmentsContainer.propTypes = {
  investments: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(InvestmentsContainer);