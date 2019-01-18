# Invetment Dashboard

I have build a reusable table component using React which supports server side pagination and sorting. 

## Deployed application - Live demo

React frontend app and .NET core backend API is `deployed on Azure`. See a `live demo` in below link.
* React Web app - https://investmentdashboard.azurewebsites.net/
* Web API - https://investmentdashboardapi.azurewebsites.net/api/investments?pageSize=5&pageNum=1&sortOptions=investmentName_asc

## Notable items in the application

* ### Table `columns can be reordered`.
* ### Table data can be sorted on multiple columns. Press 'Shift' key and click on columns to do `multi column sorting`.
* ### Table data is paginated and lazy loaded with `server side pagination`.
* ### `Custom cell renderer` is used in the table to display styled content in the cell.
* ### react-table did not have the column reordering functionality. So had to use a separate `Higher order component` to support this functionality.
* ### App is designed with `Material UI design`.
* ### `Webpack` is used as the build tool for the application.
* ### `Redux architecture` has been used.
* ### `Redux Saga` has been used to asynchronously load data to the table.
* ### `React router` is used for the routing.
* ### `Unit tests` are written using `Jest`.
* ### Backend is developed using `.NET Core Web API`
* ### Data is seeded from the backend using `Entity framework`, `In Memory Database`.

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

## How to run backend API for development

* Navigate to `InvestmentDashboardBackend` folder in explorer. Open the `InvestmentDashboardApp.sln` file in Visual Studio.

* Run the `InvestmentDashboard.API` project. Investment API would be available in the url http://localhost:58667/api/investments

* Investment data is seeded through Entity framework, In Memory Database.

## Sample images of the app

React table display

![](https://i.ibb.co/HYwgpMR/Investments-Table.png)

Loading overlay in React table while loading data from server

![](https://i.ibb.co/3YXNcG6/Loading-screen-while-loading-from-server.png)

Commitment date column in the table is sroted in descending order

![](https://i.ibb.co/ZxMVn12/Sorted-descending-from-commitment-date.png)

Commitment date column and investment column are reordered in the table

![](https://i.ibb.co/Lt6Xy7t/Commitment-Date-and-Investment-columns-reordered.png)