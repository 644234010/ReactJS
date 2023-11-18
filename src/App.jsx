import { useState } from 'react'
import AppHeader from './assets/components/Appheader';
import TrangItem from './assets/components/TrangItem';
import  './Trang.css'

function App() {
  const [showDetails, setShowDetails] = useState(false);

  const handleButtonClick = () => {
    setShowDetails(!showDetails);
  };
  return (
   
      <div>
        <AppHeader onButtonClick={handleButtonClick} />
        {showDetails && <TrangItem />}
      </div>
     
  )
}

export default App;
