import React from 'react';
import renderer from 'react-test-renderer';
import {InvestmentsContainer} from '../../../containers/investmentsContainer/InvestmentsContainer';

describe('Investment container', () => {
  it('InvestmentContainer renders correctly', () => {
    const investments = {
      rows: [
        {
          id: 999,
          investmentName: "Investment 999",
          commitmentDate: "2021-01-09T00:00:00+00:00",
          marketValue: 5626
        },
        {
          id: 998,
          investmentName: "Investment 998",
          commitmentDate: "2020-04-18T00:00:00+00:00",
          marketValue: 5474
        },
      ],
      pages: 0,
      loading: false
    };
    const investmentDataActions = {
      loadInvestmentData: jest.fn()
    };
    const testRenderer = renderer.create(
      <InvestmentsContainer investmentDataActions={investmentDataActions}
                            investments={investments}/>
    );
  });
})
;