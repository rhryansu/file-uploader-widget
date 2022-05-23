import './App.css';
function App() {

  var count = 0;

  const counter = () => {
    count += 1;
    if (count % 2 === 0) {
      document.getElementById('submitbutton').disabled = true;
    } else {
      document.getElementById('submitbutton').disabled = false;
    }
  };

  return (
    <div className="App">
      <form action='http://localhost:5000/uploader' method='POST' source="custom" encType='multipart/form-data'>
        <input type='file' name='file' className="u-border-1 u-border-grey-30 u-input u-input-rectangle" id='fileuploader'/><br/>
        
        <input name='checkbox' type="checkbox" onClick={counter}/> By using this application, You agree with our terms and conditions.<br/>
        <button disabled type='submit' className="u-black u-border-none u-btn u-btn-submit u-button-style u-btn-1" id='submitbutton'>Submit</button>
      </form>
      
    </div>
  );
}

export default App;
