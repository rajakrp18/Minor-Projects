const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = (document.querySelector('#name').value);
    const age = (document.querySelector('#age').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const height = parseInt(document.querySelector('#height').value);
    const results = document.querySelector('#results');

    //just checking the values
    // console.log(name, age, weight, height); //Raj Poddar 25 90 185
    // console.log(typeof name, typeof age, typeof weight, typeof height); //string string number number


    if (name === "" || !isNaN(name)) {
        results.innerHTML = `Please give a valid name , error is ${name}`;
    }
    if (age === "" || age <= 0 || isNaN(age)) {
        results.innerHTML = `Please give a valid age , error is ${age}`;
    }

    if (height === "" || height <= 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height , error is ${height}`;
    } else if (weight === "" || weight <= 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight , error is ${weight}`;

    }else{
      const BMI =(weight /((height*height)/10000)).toFixed(2);  
        results.innerHTML = `Hello ${name}, your BMI is ${BMI}.<br>`;
    }


});

form.addEventListener('reset', function () {
    // Clear results or any dynamic messages if needed
    const results = document.querySelector('#results');
    results.innerHTML = ""; // optional: clears the BMI result when resetting
});