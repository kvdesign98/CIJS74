import logo from './logo.svg';
import './App.css';

import ProfileCard from './components/ProfileCard';

function App() {

  // let name = "Đại Hữu"
  // let address = "Bình Dương"
  // let weight = 49
  // let height = 175

  // const TEXT_RED={
  //   color: "red"
  // }

  // const BG_BLUE={
  //   backgroundColor:"cyan"
  // }

  // const hello = () => {
  //   alert("Hello world")
  // }

  // return (
  //   <div>
  //     <h1 className="title">
  //       Hello World from React App , <span className="text-red">{name}</span> {weight}kg {height}cm {address}
  //     </h1>
  //     <h2><span style={{...TEXT_RED,...BG_BLUE}}>hihi</span></h2>

  //     <button onClick={hello}>Click me</button>
  //   </div>
  // );
return (
  <div>
    <ProfileCard name="VDH" address="Bình dương " photo=""/>
  </div>
)}

export default App;

//npm start
