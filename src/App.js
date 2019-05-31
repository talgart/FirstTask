import React from 'react';
import './App.css';


function App() {
    let input;
    let pattern;
    let fileReader;
    let fileReaderPattern;

    const handleFileRead = (e) => {
        input = fileReader.result.split("\n");

    }

    const handleFileChosenFromInput = (file) => {
        fileReader = new FileReader()
        fileReader.onloadend = handleFileRead;
        fileReader.readAsText(file)
    }
    const handleFileFromPattern = (e) => {
        pattern = fileReaderPattern.result.split("\n");
    }

    const handleFileChosenFromPattern = (file) => {
        fileReaderPattern = new FileReader()
        fileReaderPattern.onloadend = handleFileFromPattern;
        fileReaderPattern.readAsText(file)
    };

    const required_option = (input, pattern) => {
        if (input === pattern) {
            return input
        }
        else {
            return null
        }

    }
    const optional_2 = (input, pattern) => {
        let result = input.match(pattern)
        if (input>=pattern && result) {
            return input

        } else {
            let re = pattern.match(input);
            if (pattern>=input && re ) {
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
      if (result.length === 1){
          return input
      }
    };


    console.log(optional_3("linep 3 ", "line 3"))
    let testInput = ["Hello. This is line 1 of the text.", "and this is another.", "line 3 here", "the end"]
    let testPattern = ["the end", "matches", "line 3", "and this is anoother."];

    const result = () => {
        console.log(input);
        console.log(pattern)
        let outputOfFirst=[]
        let outputOfSecond = [];
        let outputOfThird = [];
        for (let i = 0; i < input.length; i++) {
            for (let j = 0; j < pattern.length; j++) {
                outputOfFirst.push(required_option(input[i], pattern[j]));
                outputOfSecond.push(optional_2(input[i],pattern[j]));
                outputOfThird.push(optional_3(input[i],pattern[j]));

            }
        }
        console.log("Mode output 1: " + outputOfFirst);
        console.log("Mode output 2: " + outputOfSecond);
        console.log("Mode output 3: " + outputOfThird);
    }
    return (
        <div>
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

export default App;
