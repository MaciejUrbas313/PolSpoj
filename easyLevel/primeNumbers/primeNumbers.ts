// Check which numbers are prime?

function isPrime(n: number) {
    if(n < 2) {
        return false; 
    }

    else {
        for(let i:number = 2; i*i<=n; i++) {
            if(n % i === 0) {
                return false;
            }
        }
    }
    return true;
}

for (let i:number = 1; i<100; i++) {
    if (isPrime(i)) {
        console.log(i," TAK");
    }
    else {
        console.log(i, " NIE");
    }
}