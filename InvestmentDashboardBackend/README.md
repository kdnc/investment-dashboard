## Deployed Web API

Backend API is `deployed on Azure`.
* Web API - https://investmentdashboardapi.azurewebsites.net/api/investments?pageSize=5&pageNum=1&sortOptions=investmentName_asc

## How to run backend API for development

* Navigate to `InvestmentDashboardBackend` folder in explorer. Open the `InvestmentDashboardApp.sln` file in Visual Studio.

* Run the `InvestmentDashboard.API` project. Investment API would be available in the url http://localhost:58667/api/investments

* Investment data is seeded through Entity framework, In Memory Database.