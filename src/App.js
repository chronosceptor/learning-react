import Button from './Button'

const App = () => {
  return (
    <div>
      <h1 onClick={(e) => console.log("click h1")}>hi</h1>
      <Button onClick={ () => console.log("click btn")}>send</Button>
    </div>
  );
}

export default App;
