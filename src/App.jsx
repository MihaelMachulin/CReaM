import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setStarships } from './components/redux/starships-reducer';
import Table from './components/table/table';

// TODO: Для начала подключить Firebase с логином и реальные данные

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getNews = async () => {
      const {data} = await axios.get(`http://swapi.dev/api/vehicles`)
      await axios.get(`https://cream-c6573-default-rtdb.europe-west1.firebasedatabase.app/companies.json`)
        .then(response => console.log('Firebase', response))

      dispatch(setStarships(data.results))
    }
    getNews();
  }, [])

  return (
    <div className="App">
      <Table />
    </div>
  );
}

export default App;