// Реалізувати друкарську машинку.
//     У вас є текст "Hello World".
//     Ваша функція має друкувати цей текст по 1 симоволу в браузері.
//     КОЖНА нова буква має бути з РАНДОМНОЮ затримкою від 0.1 до 1 секунди.
//     Цим самим ви маєте симулювати написання даного тексту юзером.
//     Приклад: "Hello"
// Затримки:
// H (затримка 0.6)
// e (затримка 0.1)
// l (затримка 0.3)
// l (затримка 0.7)
// о (затримка 1)



function outputH() {
    const randomTime = (Math.random() * 1000) - 100;
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('H');
        }, randomTime)
    })
}

function outputE() {
    const randomTime = (Math.random() * 1000) - 100;
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('e');
        }, randomTime)
    })
}

function outputL() {
    const randomTime = (Math.random() * 1000) - 100;
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('l');
        }, randomTime)
    })
}

function outputO() {
    const randomTime = (Math.random() * 1000) - 100;
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('o');
        }, randomTime)
    })
}

function outputW() {
    const randomTime = (Math.random() * 1000) - 100;
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('W');
        }, randomTime)
    })
}

function outputR() {
    const randomTime = (Math.random() * 1000) - 100;
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('r');
        }, randomTime)
    })
}

function outputD() {
    const randomTime = (Math.random() * 1000) - 100;
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('d');
        }, randomTime)
    })
}


async function typewriter() {
    const h = await outputH();
    console.log(h);

    const e = await outputE();
    console.log(e);

    const l = await outputL();
    console.log(l);

    const lTwo = await outputL();
    console.log(lTwo);

    const o = await outputO();
    console.log(o);

    const w = await outputW();
    console.log(w);

    const oTwo = await outputO();
    console.log(oTwo);

    const r = await outputR();
    console.log(r);

    const lThree = await outputL();
    console.log(lThree);

    const d = await outputD();
    console.log(d);
}

typewriter();