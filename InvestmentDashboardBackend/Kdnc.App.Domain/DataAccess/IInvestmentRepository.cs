using System.Collections.Generic;
using InvestmentDashboard.Domain.Models;

namespace InvestmentDashboard.Domain.DataAccess
{
    public interface IInvestmentRepository
    {
        List<Investment> GetInvestments(IList<SortOption> sortData);
    }
}
