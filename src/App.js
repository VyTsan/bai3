import './App.css';
import {useState} from 'react';

const divs = [1,2,3,4,5,6,7];

function App() {
  // Xử lý logic bài 2
  const [checkedDiv,setCheckedDiv] = useState(divs[0])
  const handleNext = () => {
    setCheckedDiv((prev) => (prev===divs[divs.length-1]) ? divs[0] : prev + 1);
  }
  // Xử lý logic bài 3
  const [circleMode,setCircleMode] = useState('false')
  const handleChangeShape = () => {
    setCircleMode((circleMode) => ((circleMode=='true') ? 'false' : 'true'));
  }
  return (
    <div className="App">
      <h1>BÀI TẬP SỐ 3</h1>
      <h2>Bài 3.1</h2>
      <div>
        {divs.filter((num) => num!==7).map((filteredNum,index) => (
          <div key={`bai1-${index}`} className={`square ${(filteredNum%2===0) && 'circle'}`}></div>
        ))}
      </div>
      <hr/>

      <h2>Bài 3.2</h2>
      <div>
        {divs.map((num,index) => (
          <div key={`bai2-${index}`} className={`square ${(num===checkedDiv) && 'colored'}`}></div>
        ))}
      </div>
      <button onClick={handleNext}>Next</button>
      <hr/>
      
      <h2>Bài 3.3</h2>
      <div className={`square ${(circleMode=='true') && 'circle'}`}></div> <br/>
      <button onClick={handleChangeShape}>Change Shape</button>

    </div>
  );
}

export default App;
