const divideFn = async (a: number, b: number) => {
    const res = a / b
    if (res === Infinity)
        throw new Error('divisor can not be zero') //return Promise.reject(....)

    return res //return Promise.resolve(res)
}

const addFn = (a: number, b: number) => a + b

async function invoke() {
    try {
        const data = await divideFn(12, 3)
        console.log(data)
    } catch (err: any) {
        console.log(err.message)
    }
}

invoke()

const addResult = addFn(12, 3)
//console.log(divRes)
console.log(addResult)