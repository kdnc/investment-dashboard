import React from 'react';
import renderer from 'react-test-renderer';
import ColumnReorderableReactTable from '../../../components/shared/tables/ColumnReorderableReactTable';

describe('ColumnReorderableReactTable', () => {
  it("ColumnReorderableReactTable renders correctly", () => {
    const rows = [
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
    const columns = [
      {Header: "Id", accessor: "id"},
      {Header: "Investment", accessor: "investmentName"},
      {Header: "Commitment Date", accessor: "commitmentDate"},
      {Header: "Market Value", accessor: "marketValue"}
    ];
    renderer.create(
      <ColumnReorderableReactTable columns={columns}
                                   loadPaginatedData={() => {}}
                                   rows={rows}
                                   pages={pages}
                                   loading={loading}/>
    );
  });
});