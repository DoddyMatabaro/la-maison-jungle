import React from 'react';
import { useState } from 'react';

// function handleSubmit(e){
//     e.preventDefault();
//     alert(e.target[`my_input`].value)
// }


const QuestionForm = () => {
    const [inputValue, setInputValue] = useState('Posez votre question ici')
    function checkValue(value){
            if(!value.includes('f')){
                setInputValue(value)
            }
    }

    return (
        <div>
            {/* <form onSubmit={handleSubmit}>
                <input type='text' name='my_input' defaultValue='Tapez votre texte' />
                <button type='submit'>Entrer</button>

            </form> */}
         
            <textarea
                value={inputValue}
                onChange={(e)=>checkValue}
             />
              <button onClick={()=>alert(inputValue)}>Alert moi </button>
        </div>
    );
}

export default QuestionForm;
