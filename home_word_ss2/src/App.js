import logo from './logo.svg';
import './App.css';

import MangaContainer from './components/MangaContainer(hwSS2)';
import MangaList from './components/MangaList(hwSS2)';

function App() {
return (
  <div>
    <MangaContainer 
      image="http://dummyimage.com/300x400.png/cc0000/ffffff"
      name="attack on titan"
      viewCount="190748"
      commentCount="32832"
      lastestChapter="114"
      dateModified="10/10/2021"/>
      <MangaList />
  </div>
)}

export default App;


