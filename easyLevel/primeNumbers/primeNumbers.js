// Check which numbers are prime?
function isPrime(n) {
    if (n < 2) {
        return false;
    }
    else {
        for (var i = 2; i * i <= n; i++) {
            if (n % i == 0) {
                return false;
            }
        }
    }
    return true;
}
for (var i = 1; i < 100; i++) {
    if (isPrime(i)) {
        console.log(i, " TAK");
    }
    else {
        console.log(i, " NIE");
    }
}
