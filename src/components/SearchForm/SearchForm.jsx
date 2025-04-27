import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const regions = [
  { id: 'africa', value: 'africa', name: 'Africa' },
  { id: 'america', value: 'america', name: 'America' },
  { id: 'asia', value: 'asia', name: 'Asia' },
  { id: 'europe', value: 'europe', name: 'Europe' },
  { id: 'oceania', value: 'oceania', name: 'Oceania' },
];

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const handleChasnge = e => {
    setQuery(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit} />
    <button className={styles.button} type="
};

export default SearchForm;
