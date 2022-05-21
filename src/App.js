import './App.css';

function App() {
  return (
    <div className="App">
      <form action='http://localhost:5000/uploader' method='POST' encType='multipart/form-data'>
        <input type='file' name='file'/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
