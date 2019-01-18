using System.Collections.Generic;
using InvestmentDashboard.Application.Models.Business;

namespace InvestmentDashboard.Application.Models.Helper
{
    public class InvestmentPagingData
    {
        public int Pages { get; set; }

        public IEnumerable<InvestmentDto> Rows { get; set; }
    }
}
