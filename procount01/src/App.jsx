import React, { useState } from 'react'
import './Wordcounter.css'

const App = () => {
const [text, setText] = useState("")
const [characterCount, setCharcterCount] = useState(0);
const [sentenceCount, setSentenceCount] = useState(0);

const handlerTextChange = (e) => {
  const inputText = e.target.value
  setText(inputText);

  //calculate character 
  const characters = inputText.replace(/\s+/g,"");
  setCharcterCount(characters.length);


// sentence Count
const sentences = inputText.trim().split(/[.!?](\s|$)/).filter(sentence => sentence.trim().length > 0);
setSentenceCount(sentences.length);
}

const resetCounter =  () => {
  setText("");
  setCharcterCount(0);
  setSentenceCount(0);
}



return (
  <div className='Container'>
    <div className='Container_middle'>
      <div className='right'>
        <textarea className='text-input'
        value={text}
        onChange={handlerTextChange}
          rows="6"
          placeholder='Type or paste your text here....' />
        <div className='button_div'>
          <button className='button-65' onClick={resetCounter}>
            Delete
          </button>
        </div>
      </div>
      {/* left Section  */}
      <div className='left'>
        <div className='Container_middle_para'>
          <h1>Results</h1>
        </div>
        <div className='flex-container'>
        <div class="flex-container">
          <div><p><strong>Charactors: </strong>{characterCount}</p></div>
        <div><p><strong>Sentences: </strong>{sentenceCount}</p></div>
        </div>
      </div>
    </div>
    </div>

  </div>
)
}

export default App
