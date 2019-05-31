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
        let m = input.length;
        let n = pattern.length;
        let count = 0;
        let i = 0;
        let j = 0;
        if (Math.abs(m - n) > 1) {
            return false
        }
        while (i < m && j < n) {
            if (input[i] != pattern[j]) {
                if (count == 1) {
                    return false
                    if (m > n)
                        i += 1
                    if (m < n)
                        j += 1
                    else
                        i++;
                    j++


                    count += 1

                } else
                    i++;
                j++;
            }
            if (i < m || j < n)
                count += 1

            if (count == 1) {
                return input
            }


        }
    };


    render() {
        let {required_option, optional_2, optional_3} = this;
        let input,pattern, fileReaderInput,fileReaderPattern;
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
        const result = () => {
            const inputResult = input.split("\n");
            console.log(inputResult);
            const patternResult = pattern.split("\n");
            console.log(patternResult);
            let array1 = [];
            let array2 = [];
            let array3 = [];
            for (let i = 0; i < inputResult.length; i++) {
                for (let j = 0; j < patternResult.length; j++) {
                    let required = required_option(inputResult[i].trim(), patternResult[j].trim());
                    if (required != null) {
                        array1.push(required)
                    }
                    let optional = optional_2(inputResult[i].trim(), patternResult[j].trim());
                    if (optional != null && inputResult[i] !== "" && patternResult[j] !== "") {
                        array2.push(optional)
                    }
                    let option3 = optional_3(inputResult[i].trim(), patternResult[j].trim())
                    if (option3) {
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
}

export default FirstTask;
