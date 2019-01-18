import React from 'react';
import renderer from 'react-test-renderer';
import InvestmentTable from '../../components/investmentTable/InvestmentTable';

describe('InvestmentTable', () => {
  it("InvestmentTable renders correctly", () => {
    const data = [
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
    ];
    const pages = 0;
    const loading = false;
    renderer.create(
      <InvestmentTable loadInvestmentData={() => {}}
                       data={data}
                       pages={pages}
                       loading={loading}/>
    );
  });
});