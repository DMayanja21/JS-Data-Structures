function isPrime(n){
	if(n<2) return false;
	for(var m=2;m<n;m++){
		if(n%m==0) return false;
	}
	return true;
}
var primes=[];
for(m=0;m<101;m++){
	if(isPrime(m)==true)
		primes.push(m);
}
console.log(primes);