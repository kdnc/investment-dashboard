using InvestmentDashboard.Application.Models.Business;
using InvestmentDashboard.Domain.Models;

namespace InvestmentDashboard.Application.Mappers
{
    public class InvestmentMapper : IModelMapper<InvestmentDto, Investment>
    {
        public InvestmentDto DtoFrom(Investment domainEntity)
        {
            return new InvestmentDto()
            {
                Id = domainEntity.Id,
                InvestmentName = domainEntity.InvestmentName,
                CommitmentDate = domainEntity.CommitmentDate,
                MarketValue = domainEntity.MarketValue
            };
        }

        public Investment EntityFrom(InvestmentDto dto)
        {
            return new Investment()
            {
                Id = dto.Id,
                InvestmentName = dto.InvestmentName,
                CommitmentDate = dto.CommitmentDate,
                MarketValue = dto.MarketValue
            };
        }
    }
}
