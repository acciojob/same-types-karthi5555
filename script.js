function isSameType(value1, value2) {
  //your js code here
	 // Check if both values are NaN
  if (isNaN(value1) && isNaN(value2)) {
    return true;
  }

  // Check if the types are the sam
	let type_1 = typeof value1
	let type_2 = typeof value2
	
  return type_1 === type_2;
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
