## Deployed application

React frontend app is `deployed on Azure`.
* React Web app - https://investmentdashboard.azurewebsites.net/

## How to run, test and build frontend React app

* Open a command prompt and navigate to `InvestmentDashboardFrontend` folder
    
        cd InvestmentDashboardFrontend

* Run below command to install npm packages

        npm install

* Run the React app for development using below command. Open http://localhost:3000 to view it in the browser. The page will reload if you make edits.
        
        npm start

* Run tests in the application using below command
        
        npm test

* Get tests coverage in the application using below command. Test coverage will be available in `coverage` folder.

        npm test -- --coverage

* Build React app for production  to the `build` folder using below command. It correctly bundles React in production mode and optimizes the build for the best performance. 
        
        npm run build