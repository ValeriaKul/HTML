//ЦИКЛ FOR

/* for (let i = 0; i <= 10; i++) {
    console.log(i);
}

for (let i = 15; i <= 65; i += 5) {
    console.log(i);
}

for (let i = 65; i >= 15; i -= 5) {
    console.log(i);
}

function getNums (n, m) {
for (let i = m; i <= n; i++) {
    if ( i % 2 == 0){
    console.log(i);
    }
  }
}

const getNums_arrow = (n, m) => {
    for (let i = m; i <= n; i++) {
        if ( i % 2 === 0){
            console.log(i);
        }
    }
}
getNums_arrow (10, 4); */

const getNums2 = (n, m) => {
    if (n > m) {
        for (i = n; i >= m; i--) {
            console.log(i);
        }
    } else if (m > n){
        for (i = m; i >= n; i--) {
            console.log(i);
        }
    } else {
        console.log('Numbers are equal')
    }
}
/* getNums2(2, 12);
getNums2(12, 2);
getNums2(2, 2); */

const getNums3 = (n, m) => {
    if (n === m) {
        console.log('Numbers are equal');
        return;
    }

    for (i = Math.max(n, m); i >= Math.min(n, m); i--) {
        console.log(i);
    }
}
/* getNums3(16,16);
getNums3(16,26); */

const getSum = () => {
    let count = 0;
    for(let i = 1; i <= 10; i++) {
        count += i;
    }
    return count;
}

const getMult = () => {
    let count = 1;
    for(let i = 1; i <= 10; i++) {
        count *= i;
    }
    return count;
}

const getEvenSum = () => {
    let count = 0;
    for(let i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
        count += i;
        }
    }
    return count;
}

// console.log(getEvenSum(10));

