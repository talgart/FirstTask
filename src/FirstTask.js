import React, {Component} from 'react';
import './App.css';

class FirstTask extends Component {

    required_option = (input, pattern) => {
        if (input === pattern) {
            return input
        }

    }
    optional_2 = (input, pattern) => {
        let result = input.match(pattern);
        if (input >= pattern && result) {
            return input

        } else {
            let re = pattern.match(input);
            if (pattern >= input && re) {
                return input
            }
        }
    }
    optional_3 = (input, pattern) => {
        let inputLength = input.length
        let patternLength= pattern.length
        if (Math.abs(inputLength-patternLength)>1){
            return false
        }
        let count = 0
        let i = 0
        let j =0
        while (i<inputLength && j <patternLength){
            if (inputLength[i] != patternLength[j]){
                if (count == 1){
                    return false
                }
                if (inputLength>patternLength){
                    i++
                }
                if (inputLength<patternLength){
                    j++

                }
                else {
                    i++;
                    j++
                }
                count++
            }
            else {
                i++;
                j++
            }

        }
        if (i < inputLength || j<patternLength){
            count++
        }
       return count
    };



    render() {
        let {required_option, optional_2, optional_3} = this;
        let input, pattern, fileReaderInput, fileReaderPattern;
        const handleFileFromInput = (e) => {
            input = fileReaderInput.result;
        };

        const handleFileChosenFromInput = (file) => {
            fileReaderInput = new FileReader()
            fileReaderInput.onloadend = handleFileFromInput;
            fileReaderInput.readAsText(file)
        };
        const handleFileFromPattern = (e) => {
            pattern = fileReaderPattern.result;
        };

        const handleFileChosenFromPattern = (file) => {
            fileReaderPattern = new FileReader()
            fileReaderPattern.onloadend = handleFileFromPattern;
            fileReaderPattern.readAsText(file)
        };
        console.log(optional_3("the end", "the end"))
        const result = () => {
            const inputResult = input.split("\n");
            console.log(inputResult);
            const patternResult = pattern.split("\n");
            console.log(patternResult);
            let firstModeOutput=[];
            let secondModeOutput = [];
            let thirdModeOutput = [];
            for (let i = 0; i < inputResult.length; i++) {
                for (let j = 0; j < patternResult.length; j++) {
                    let required = required_option(inputResult[i].trim(), patternResult[j].trim());
                    if (required != null) {
                        firstModeOutput.push(required)
                    }
                    let optional = optional_2(inputResult[i].trim(), patternResult[j].trim());
                    if (optional != null && inputResult[i] !== "" && patternResult[j] !== "") {
                        secondModeOutput.push(optional)
                    }
                    let option3 = optional_3(inputResult[i].trim(), patternResult[j].trim())
                    if (option3 && option3<=1) {
                        thirdModeOutput.push(inputResult[i])
                    }

                }
            }

            {
            }
            console.log("Mode 1 outputs: " +firstModeOutput);
            console.log("Mode 2 outputs: " + secondModeOutput);
            console.log("Mode 3 outputs: " + thirdModeOutput)
        };


        return (

            <div>
                <div>
                <strong className="ml-4">upload here input.txt file</strong>
                <input type="file"
                       id="file"
                       className='input-file'
                       accept='.txt'
                       onChange={e => handleFileChosenFromInput(e.target.files[0])}/>
                </div>
                <div className='mt-3'>
               <strong className="ml-4">upload here pattern.txt file</strong>
                <input type="file"
                       id="file"
                       className='input-file'
                       accept='.txt'
                       onChange={e => handleFileChosenFromPattern(e.target.files[0])}/>
                       </div>
                <button className="ml-4" onClick={result}> Show result</button>
            </div>
        )
    }
}

export default FirstTask;
