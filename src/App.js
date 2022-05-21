import './App.css';

function App() {
  return (
    <div className="App">
      <form action='http://localhost:5000/uploader' method='POST' source="custom" encType='multipart/form-data'>
        <input type='file' name='file' class="u-border-1 u-border-grey-30 u-input u-input-rectangle" id='fileuploader'/>
        <button type='submit' className="u-black u-border-none u-btn u-btn-submit u-button-style u-btn-1" id='submitbutton'>Submit</button>
      </form>
    </div>
  );
}

export default App;
