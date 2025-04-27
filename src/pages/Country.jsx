import { useState } from 'react';
import { useParams } from 'react-router-dom';

const Country = () => {
  const [country, setCountry] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, etIsLoading] = useState(null);

 useEffect(() => {
    const fetchDatas = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchCountry(countryId);
        setCountry(data);
      } catch (error) {
        setError(error);

      } finally {
        setIsLoading(false);
      }
    };
    fetchDatas()
  }[countryId]);
  return (
    <Section>
      <Container>
        <Heading title="SearchCountry" bottom />
      </Container>
    </Section>
  );
};

export default Country;
