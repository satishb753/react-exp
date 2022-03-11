let arr = [ {name: 'Hanagami', age: 24}, {name: 'Light', age:18}, {age:22}, {name: 'Satoshi', age: 55}];

let newArr = arr.map( elem => elem.name);

console.log(newArr);

arr = [3, 4, 5, 6, 7, 1];

let output = { a:null, b:null };

for ( let i = 0 ; i < arr.length ; i++ )
{
	for( let j = i+1; j< arr.length ; j++ )
	{
		if(arr[i] + arr[j] === 7) 
		{
			output.a = arr[i];
			output.b = arr[j];
		}
	}
}

console.log( output )

console.log( 2+3+"5")