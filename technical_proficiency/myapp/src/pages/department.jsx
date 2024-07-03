import { useState, useEffect } from 'react';
import AddGroup from './components/add_field';
import Navbar from './components/navbar';
import SelectField from './components/select_field';
import { getData } from './components/functions/handleSubmit';

const Department = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const references = await getData('companies');
        console.log(references);
        setCompanies(Object.values(references));
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar heading="department" current="departments" />
      <form action="" method="post">
        <SelectField options={companies} title="select company" />
        <AddGroup placeholder="enter department name" />
      </form>
    </>
  );
};

export default Department;