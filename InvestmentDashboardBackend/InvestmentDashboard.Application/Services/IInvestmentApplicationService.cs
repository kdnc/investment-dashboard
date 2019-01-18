using System.Collections.Generic;
using InvestmentDashboard.Application.Models.Helper;
using InvestmentDashboard.Domain.Models;

namespace InvestmentDashboard.Application.Services
{
    public interface IInvestmentApplicationService
    {
        InvestmentPagingData GetInvestments(List<SortOption> sortData, int pageSize, int pageNum);
    }
}
