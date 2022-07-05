import React from 'react';

const QuestionForm = () => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' name='my_input' defaultValue='Tapez votre texte' />
                <button type='submit'>Entrer</button>
            </form>
        </div>
    );
}

export default QuestionForm;
