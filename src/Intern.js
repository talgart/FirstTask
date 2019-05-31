import React from 'react';
import './App.css';

function Intern() {
    let input;
    let pattern;
    let fileReader;
    let fileReaderPattern;

    const handleFileRead = (e) => {
        input = fileReader.result;

    }

    const handleFileChosenFromInput = (file) => {
        fileReader = new FileReader()
        fileReader.onloadend = handleFileRead;
        fileReader.readAsText(file)
    }
    const handleFileFromPattern = (e) => {
        pattern = fileReaderPattern.result;
    }

    const handleFileChosenFromPattern = (file) => {
        fileReaderPattern = new FileReader()
        fileReaderPattern.onloadend = handleFileFromPattern;
        fileReaderPattern.readAsText(file)
    };
    const required_option = (input, pattern)=> {
        if (input === pattern) {
             return input
        }

    }
    const optional_2 = (input, pattern) => {
        let result = input.match(pattern)
        if (input >= pattern && result) {
            return input

        } else {
            let re = pattern.match(input);
            if (pattern >= input && re) {
                return input
            }
        }
    };

    const optional_3 = (input, pattern) => {
        let i = 0;
        let j = 0;
        let result = "";
        while (j < pattern.length) {
            if (input[i] != pattern[j] || i == input.length)
                result += pattern[j];
            else
                i++;
            j++;
        }
        if (result.length === 1) {
            return input
        }
    };
    const result = () => {
        const inputResult = input.split("\n");
        console.log(inputResult);
        const patternResult = pattern.split("\n");
        console.log(patternResult);
        let array1 = [];
        let array2 = [];
        let array3=[]
        for (let i = 0; i < inputResult.length; i++) {
            for (let j = 0; j < patternResult.length; j++) {
                let required= required_option(inputResult[i], patternResult[j]);
                if (required!=null){
                    array1.push(required)
                }
                let optional = optional_2(inputResult[i], patternResult[j]);
                if (optional!=null && inputResult[i]!=="" && patternResult[j]!=="" ){
                    array2.push(optional)
                }
                let option3 = optional_3(inputResult[i], patternResult[j]);
                if (option3!=null){
                    array3.push(option3)
                }
            }
        }

        {
        }
        console.log("Mode 1 outputs: " + array1);
        console.log("Mode 2 outputs: " + array2);
        console.log("Mode 3 outputs: " + array3)
    };
    return (
        <div>
            <label for="file">kkm</label>
            <input type="file"
                   id="file"
                   className='input-file'
                   accept='.txt'
                   onChange={e => handleFileChosenFromInput(e.target.files[0])}/>
            <input type="file"
                   id="file"
                   className='input-file'
                   accept='.txt'
                   onChange={e => handleFileChosenFromPattern(e.target.files[0])}/>
            <button onClick={result}> Show result</button>
        </div>
    )
}

export default Intern;
