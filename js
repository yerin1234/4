<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>전자 계산기</title>
    <style>
        body {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            font-family: 'Arial', sans-serif;
            background-color: #f4f4f4;
        }

        #calculator {
            background-color: #fff;
            border: 1px solid #ccc;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            width: 300px;
            padding: 20px;
            box-sizing: border-box;
        }

        #display {
            width: calc(100% - 20px);
            margin-bottom: 10px;
            padding: 10px;
            font-size: 18px;
            box-sizing: border-box;
            border: 1px solid #ccc;
            border-radius: 3px;
        }

        button {
            width: 48px;
            height: 48px;
            font-size: 18px;
            margin: 5px;
            cursor: pointer;
            border: none;
            background-color: #f0f0f0;
            transition: background-color 0.3s;
        }

        button:hover {
            background-color: #d9d9d9;
        }

        #equal {
            width: calc(100% - 10px);
            margin-top: 10px;
        }
    </style>
</head>
<body>

<div id="calculator">
    <input type="text" id="display" disabled>
    <br>
    <button onclick="appendToDisplay('1')">1</button>
    <button onclick="appendToDisplay('2')">2</button>
    <button onclick="appendToDisplay('3')">3</button>
    <button onclick="appendToDisplay('+')">+</button>
    <br>
    <button onclick="appendToDisplay('4')">4</button>
    <button onclick="appendToDisplay('5')">5</button>
    <button onclick="appendToDisplay('6')">6</button>
    <button onclick="appendToDisplay('-')">-</button>
    <br>
    <button onclick="appendToDisplay('7')">7</button>
    <button onclick="appendToDisplay('8')">8</button>
    <button onclick="appendToDisplay('9')">9</button>
    <button onclick="appendToDisplay('*')">*</button>
    <br>
    <button onclick="appendToDisplay('0')">0</button>
    <button onclick="clearDisplay()">C</button>
    <button id="equal" onclick="calculateResult()">=</button>
    <button onclick="appendToDisplay('/')">/</button>
</div>

<script>
    function appendToDisplay(value) {
        document.getElementById('display').value += value;
    }

    function clearDisplay() {
        document.getElementById('display').value = '';
    }

    function calculateResult() {
        try {
            document.getElementById('display').value = eval(document.getElementById('display').value);
        } catch (error) {
            document.getElementById('display').value = 'Error';
        }
    }
</script>

</body>
</html>
