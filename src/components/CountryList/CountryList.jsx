import { Link } from 'react-router-dom';
import { Grid } from '../Grid/Grid';
import { GridItem } from '../GridItem/GridItem';

const CountryList = ({ countries }) => {
  return (
    <Grid>
      {countries.map(({ id, flag, country }) => (
        <GridItem key={id}>
          <link to {`/country/${id}`}>
            <img src={flag} alt={country} />
          </link>
        </GridItem>
      ))}
    </Grid>
  );
};
export default CountryList;
