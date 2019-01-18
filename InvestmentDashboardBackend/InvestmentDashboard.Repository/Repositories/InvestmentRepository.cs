using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using InvestmentDashboard.Domain.DataAccess;
using InvestmentDashboard.Domain.Models;
using InvestmentDashboard.Repository.DatabaseContext;

namespace InvestmentDashboard.Repository.Repositories
{
    public class InvestmentRepository : IInvestmentRepository
    {

        private readonly InvestmentContext _investmentContext;

        public InvestmentRepository(InvestmentContext investmentContext)
        {
            _investmentContext = investmentContext;
        }

        public List<Investment> GetInvestments(IList<SortOption> sortData)
        {
            var investments = _investmentContext.Set<Investment>().ToList();
            investments = SortInvestments(sortData, investments);
            return investments;
        }

        private List<Investment> SortInvestments(IList<SortOption> sortData, List<Investment> investments)
        {
            const string descending = nameof(SortOrder.desc);
            const string ascending = nameof(SortOrder.asc);

            for (var i = sortData.Count; i > 0; i--)
            {
                var sortOption = sortData[i - 1];
                if (sortOption.SortVariable.Equals("id"))
                {
                    if (sortOption.SortOrder.Equals(descending))
                    {
                        investments.Sort((x, y) => x.Id.CompareTo(y.Id));
                    }
                    else if (sortOption.SortOrder.Equals(ascending))
                    {
                        investments.Sort((x, y) => y.Id.CompareTo(x.Id));
                    }
                }
                else if (sortOption.SortVariable.Equals("investmentName"))
                {
                    if (sortOption.SortOrder.Equals(descending))
                    {
                        investments.Sort((x, y) =>
                            String.Compare(x.InvestmentName, y.InvestmentName, StringComparison.Ordinal));
                    }
                    else if (sortOption.SortOrder.Equals(ascending))
                    {
                        investments.Sort((x, y) =>
                            String.Compare(y.InvestmentName, x.InvestmentName, StringComparison.Ordinal));
                    }
                }
                else if (sortOption.SortVariable.Equals("commitmentDate"))
                {
                    if (sortOption.SortOrder.Equals(descending))
                    {
                        investments.Sort((x, y) => x.CommitmentDate.CompareTo(y.CommitmentDate));
                    }
                    else if (sortOption.SortOrder.Equals(ascending))
                    {
                        investments.Sort((x, y) => y.CommitmentDate.CompareTo(x.CommitmentDate));
                    }
                }
                else if (sortOption.SortVariable.Equals("marketValue"))
                {
                    if (sortOption.SortOrder.Equals(descending))
                    {
                        investments.Sort((x, y) => x.MarketValue.CompareTo(y.MarketValue));
                    }
                    else if (sortOption.SortOrder.Equals(ascending))
                    {
                        investments.Sort((x, y) => y.MarketValue.CompareTo(x.MarketValue));
                    }
                }
            }

            return investments;
        }
    }
}
