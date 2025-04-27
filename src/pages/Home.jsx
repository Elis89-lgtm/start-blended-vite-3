import { useEffect, useState } from 'react';
import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import Section from '../components/Section/Section';

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchDatas = async () => {
      setIsLoading(true)
      setError(null)
      try {
        const data = await getCountries()
        setCountries(data)
      } catch (error) {
        setError(error)

      } finally {
        setIsLoading(false)
      }
    };
    fetchDatas()
  }[]);

  return (
    <Section>
      <Container>
        {isLoading && <Loader />}
        {error && <Heading title="Oops!Something went wrong..." bottom />}
        {<country && <CountryInfo />}
      </Container>
    </Section>
  );
};
export default Home;
