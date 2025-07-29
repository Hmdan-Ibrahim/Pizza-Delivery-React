import { useRouteError } from 'react-router-dom';

export default function Error() {
    const error = useRouteError()
    
  return (
    <div className='container' >
      <h1>Error 👎❌</h1>
      <p>{error?.message}</p> 
    </div>
  );
}
