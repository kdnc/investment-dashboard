using System;
using System.Collections.Generic;
using System.Text;
using InvestmentDashboard.Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Internal;

namespace InvestmentDashboard.Repository.DatabaseContext
{
    public class InvestmentContext : DbContext
    {
        public InvestmentContext(DbContextOptions<InvestmentContext> options)
            : base(options)
        {
            Database.EnsureCreated();
            EnsureInvestmentsDataSeeded();
        }

        public DbSet<Investment> Investments { get; set; }

        private void EnsureInvestmentsDataSeeded()
        {
            if (!Investments.Any())
            {
                var investments = new List<Investment>();

                var randomDateGenerator = new Random();
                var randomNumGenerator = new Random();
                const int dateRange = 5 * 365; //5 years          

                for (var i = 1; i < 1000; i++)
                {
                    var randomCommitmentDate = DateTime.Today.AddDays(randomDateGenerator.Next(dateRange));
                    var randomMarketValue = randomNumGenerator.Next(5000, 7000);
                    investments.Add(new Investment
                    {
                        Guid = new Guid(),
                        Id = i,
                        InvestmentName = $@"Investment {i}",
                        CommitmentDate = randomCommitmentDate,
                        MarketValue = randomMarketValue
                    });
                }

                Investments.AddRange(investments);
                SaveChanges();
            }
        }

    }
}
