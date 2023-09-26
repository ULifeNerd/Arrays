function onlyOdds(numbers) {
  
    const oddNumbers = numbers.filter(number => number % 2 !== 0);
  
    return oddNumbers;
  }

  const input1 = [2, 4, 6, 8, 11, 20, 15, 22];
  const input2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const input3 = [70, 42, 55, 81, 21, 91, 34];
  const input4 = [2, 4, 6, 8, 10, 11, 12];
  
  console.log(onlyOdds(input1)); 
  console.log(onlyOdds(input2));
  console.log(onlyOdds(input3)); 
  console.log(onlyOdds(input4));




  function countConsonantsAndVowels(input) {

    let consonantCount = 0;
    let vowelCount = 0;
 
    input = input.toLowerCase();

    for (let i = 0; i < input.length; i++) {
      const char = input[i];
      

      if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        vowelCount++;
      } else if (char >= 'a' && char <= 'z') {
 
        consonantCount++;
      }

    }
  
  
    return `${input} has ${consonantCount} consonants and ${vowelCount} vowels`;
  }
  

  console.log(countConsonantsAndVowels("hello"));       
  console.log(countConsonantsAndVowels("ukelele"));     
  console.log(countConsonantsAndVowels("awesome"));     
  console.log(countConsonantsAndVowels("onomonopia")); 
  console.log(countConsonantsAndVowels("textbook"));    
  

  function reverseArray(arr) {
    const reversedArr = [];
  
    
    for (let i = arr.length - 1; i >= 0; i--) {
      reversedArr.push(arr[i]);
    }
  
    return reversedArr;
  }
  
  
  console.log(reverseArray([1, 2, 3]));                     
  console.log(reverseArray([1, 3, 5, 7, 9, 11]));           
  console.log(reverseArray([20, 50, 30, 60, 200]));         
  console.log(reverseArray([1, -1, 2, -3, 5, -8, 13]));
  
  for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    }

    else if (i % 3 === 0) {
      console.log("Fizz");

    else if (i % 5 === 0) {
      console.log("Buzz");
    }

    else {
      console.log(i);
    }
  }