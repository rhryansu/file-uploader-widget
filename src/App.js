import './App.css';
import Model from './components/popup';
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
      <form action='http://protecturskin.social:5000/uploader' method='POST' source="custom" encType='multipart/form-data'>
        <input type='file' name='file' className="u-border-1 u-border-grey-30 u-input u-input-rectangle" id='fileuploader' required/><br/>
        <input type='email' name='email' className="u-border-1 u-border-grey-30 u-input u-input-rectangle" id='email' placeholder="Enter your doctor's email" required/>
        <input name='checkbox' type="checkbox" onClick={counter}/> By using this feature, You agree with our <Model /><br/>
        <button disabled type='submit' className="u-black u-border-none u-btn u-btn-submit u-button-style u-btn-1" id='submitbutton'>Submit</button>
      </form>
      
    </div>
  );
}

export default App;
