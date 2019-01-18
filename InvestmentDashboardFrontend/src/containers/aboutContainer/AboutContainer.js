import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './AboutContainer.css';

/**
 * About tab container
 */
const AboutContainer = () => (
  <Card className='about-card'>
    <CardContent>
      <Typography variant="h6" gutterBottom>
        Notable items in the application
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Table columns can be reordered.
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Table data can be sorted on multiple columns. Press 'Shift' key and click on columns to do multi column sorting.
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Table data is paginated and lazy loaded with server side pagination.
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Custom cell renderer is used in the table to display styled content in the cell.
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        react-table did not have the column reordering functionality. So had to use a
        separate Higher order component to support this functionality.
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        App is designed with Material UI design.
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Webpack is used as the build tool for the application.
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Redux architecture has been used.
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Redux saga has been used to asynchronously load data to the table.
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        React router is used for the routing.
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Unit tests are written using Jest.
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Backend is developed using .NET Core Web API
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Data is seeded from the backend using Entity framework, In Memory Database.
      </Typography>
    </CardContent>
  </Card>
);

export default AboutContainer;