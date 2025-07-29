import { useNavigation } from 'react-router-dom';
import Loader from './Loader';

function DataLoader() {
  const navigation = useNavigation();
  const isLoading: boolean = navigation.state === "loading";

  return (
    isLoading && <Loader />
  );
}

export default DataLoader
