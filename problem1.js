function calculateSum(s) {
    let sum = 0;
    for (let i = 0; i < s.length - 1; i++) {
        if (s.charAt(i+1) == s.charAt(i)) {
            sum += parseInt(s.charAt(i));
        }
    }
    if (s.charAt(0) == s.charAt(s.length - 1)) {
        sum += parseInt(s.charAt(0));
    }
    return sum;
}

