function isPrime(n){//generate a function that can identify prime numbers (numbers with only two factors 1 and itself)
	if(n<2) return false;//any values less tean 2 will bring a false result (0 and 1 in most cases aren't considered prime numbers)
	for(var m=2;m<n;m++){//generate a loop from which possible facotrs can be derived, identified as m
		if(n%m==0) return false;//if the selected value n when divided by our possible factors m gives no remainder, then m is a factor of n and thus n cannot be a prime number
	}
	return true;//when m found not to be a factor of n, the selected value of n is a prime number
}
var primes=[];//generates an array to be defined by the subsequent code
for(m=0;m<==100;m++){//generates a loop within which values of m that fall within the given range(0 to 100) are ran through the function generated above
	if(isPrime(m)==true)
		primes.push(m);//values of m found to be "true" are then pushed to the array
}
console.log(primes);//retuns values for the selected array 