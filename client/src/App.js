import { useState, useEffect, useRef } from 'react';
import './App.css';
import { uploadFile } from './service/api';

function App() {
  const [file, setFile] = useState('');
  const [result, setResult] = useState('');

  const fileInputRef = useRef();

  const url = 'https://cdn.windowsreport.com/wp-content/uploads/2020/03/best-file-sharing-software-and-tools-886x590.jpg';

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        const response = await uploadFile(data);
        setResult(response.path);
      }
    }
    getImage();
  }, [file])

  const onUploadClick = () => {
    fileInputRef.current.click();
  }

  return (
    <div className='container'>
      <img src={url} className='img' />
      <div className='wrapper'>
        <h1>Simple file sharing!</h1>
        <p>Upload and share the download link.</p>
        
        <button onClick={() => onUploadClick()}>Upload</button>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />

        <a href={result} target='_blank'>{result}</a> 
      </div>
    </div>
  );
}

export default App;