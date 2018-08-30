const factorial: any = (num: number) => {
    if (num === 0) {
        return 1
    }

    return num * factorial(num - 1)
}

export default factorial