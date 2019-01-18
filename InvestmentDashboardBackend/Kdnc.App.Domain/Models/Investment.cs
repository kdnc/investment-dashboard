using System;

namespace InvestmentDashboard.Domain.Models
{
    public class Investment
    {
        public Guid Guid { get; set; }

        public int Id { get; set; }

        public string InvestmentName { get; set; }

        public DateTime CommitmentDate { get; set; }

        public float MarketValue { get; set; }
    }
}
