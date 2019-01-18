using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Text;

namespace InvestmentDashboard.Domain.Models
{
    public enum SortOrder
    {
        [Description("Descending")]
        desc = 1,

        [Description("Ascending")]
        asc = 2,
    }
}
