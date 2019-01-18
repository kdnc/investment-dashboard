using System.Collections.Generic;
using InvestmentDashboard.Application.Mappers;
using InvestmentDashboard.Application.Models.Business;
using InvestmentDashboard.Application.Models.Helper;
using InvestmentDashboard.Domain.DataAccess;
using InvestmentDashboard.Domain.Models;

namespace InvestmentDashboard.Application.Services
{
    public class InvestmentApplicationService : IInvestmentApplicationService
    {
        private readonly IInvestmentRepository investmentRepository;

        public InvestmentApplicationService(IInvestmentRepository investmentRepository)
        {
            this.investmentRepository = investmentRepository;
        }

        public InvestmentPagingData GetInvestments(List<SortOption> sortData, int pageSize, int pageNum)
        {
            var modelMapper = new InvestmentMapper();
            var investments = investmentRepository.GetInvestments(sortData);

            var investmentsDtos = new List<InvestmentDto>();
            foreach (var investment in investments)
            {
                var investmentDto = modelMapper.DtoFrom(investment);
                investmentsDtos.Add(investmentDto);
            }

            var pages = pageSize > 0 ? investmentsDtos.Count / pageSize : 0;
            var rows = investmentsDtos.GetRange((pageNum) * pageSize, pageSize);

            var investmentPagingData = new InvestmentPagingData()
            {
                Pages = pages,
                Rows = rows
            };
            return investmentPagingData;
        }

    }
}
