let a = () => {
    let i = 1;
    let b = () => {
        console.log(i)
    }
    i = i + 5;
    return b;
}