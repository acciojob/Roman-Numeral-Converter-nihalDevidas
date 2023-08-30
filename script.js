function convertToRoman(num) {
	if(num === 0){
		return 0;
	}
  	const obj = [
      ['M',1000],
	  ['CM',900],
      ['D', 500],
	  ['CM', 400],
      ['C', 100],
	  ['XC', 90],
      ['L', 50], 
	  ['XL', 40],
      ['X', 10], 
	  ['IX', 9],
      ['V', 5],
	  ['IV', 4],
      ['I', 1]
    ];

  //your code here
	let roman = "";
	let i=0;
	while(num > 0 && i < obj.length)
	{
		if(num >= obj[i][1]){
			num = num-obj[i][1];
			roman = roman + obj[i][0];
		}
		else{
			i++;
		}
	}
  return roman;
}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

console.log(convertToRoman(798));




// do not edit below this line
module.exports = convertToRoman
