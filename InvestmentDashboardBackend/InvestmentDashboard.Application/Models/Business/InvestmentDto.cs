using System;

namespace InvestmentDashboard.Application.Models.Business
{
    public class InvestmentDto
    {
        public int Id { get; set; }

        public string InvestmentName { get; set; }

        public DateTime CommitmentDate { get; set; }

        public float MarketValue { get; set; }
    }
}
