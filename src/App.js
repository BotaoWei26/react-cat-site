import { useEffect, useState } from 'react';
import { Input, Button, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import Quote from './Quote'
import Image from './Image'
import './App.css';

const CAT_QUOTE_URL = "https://cat-fact.herokuapp.com/facts";
const DEFAULT_TAG = "cute";

function App() {
  const [quote, setQuote] = useState("");
  const [tag, setTag] = useState(DEFAULT_TAG);

  useEffect(() => {
    async function fetchData() {
      fetch(CAT_QUOTE_URL)
        .then(response => response.json())
        .then(data => {
          setQuote(data[Math.floor(Math.random() * data.length)].text);
        })
    }
    fetchData();
  }, [])

  const handleInputChange = e => {
    const value = e.target.value;
    setTag(value === "" ? DEFAULT_TAG : value);
  };
  
  const handleRandomButton = e => {
    setTag("");
  };

  return (
    <div className="App">
      <Image tag={tag} />
      <Button animated onClick={handleRandomButton}>
        <Button.Content visible>Random</Button.Content>
        <Button.Content hidden>
          <Icon name="random" />
        </Button.Content>
      </Button>
      <Input
        placeholder={DEFAULT_TAG}
        onChange={handleInputChange}
      />
      <Quote text={quote}/>
    </div>
  );
}

export default App;
