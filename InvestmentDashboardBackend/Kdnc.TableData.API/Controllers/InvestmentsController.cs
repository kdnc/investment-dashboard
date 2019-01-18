using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using InvestmentDashboard.Application.Models.Helper;
using InvestmentDashboard.Application.Services;
using InvestmentDashboard.Domain.Models;
using Microsoft.AspNetCore.Mvc;

namespace InvestmentDashboard.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InvestmentsController : ControllerBase
    {
        private readonly IInvestmentApplicationService _investmentApplicationService;

        public InvestmentsController(IInvestmentApplicationService investmentApplicationService)
        {
            this._investmentApplicationService = investmentApplicationService;
        }

        [HttpGet]
        public InvestmentPagingData Get([FromQuery]int pageSize, [FromQuery]int pageNum,
            [FromQuery]string sortOptions)
        {
            var sortData = new List<SortOption>();
            if (!String.IsNullOrEmpty(sortOptions))
            {
                var sortOptionsArr = sortOptions.Split(',');
                sortData.AddRange(sortOptionsArr.Select(option => option.Split('_'))
                    .Select(splittedOption => new SortOption
                    {
                        SortVariable = splittedOption[0],
                        SortOrder = splittedOption[1]
                    }));
            }

            var investmentPagingData = _investmentApplicationService.GetInvestments(sortData, pageSize, pageNum);
            return investmentPagingData;
        }
    }
}
