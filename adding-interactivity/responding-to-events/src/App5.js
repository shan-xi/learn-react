export default function App() {
  return (
    <Toolbar
      onPlayMoive={() => alert("playing")}
      onUploadImage={() => alert("Uploading")}
    ></Toolbar>
  );
}

function Toolbar({ onPlayMoive, onUploadImage }) {
  return (
    <div>
      <Button onClick={onPlayMoive}>Play Movie</Button>
      <Button onClick={onUploadImage}>Upload Image</Button>
    </div>
  );
}

function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}
