import { FC } from 'react';
import Header from './header/Header';
import Map from './map/Map';

const APP: FC = () => {
  return (
    <div className="App">
      <Header />
      <Map />
    </div>
  );
}

export default APP
