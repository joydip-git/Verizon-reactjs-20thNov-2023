const divide = (a: number, b: number) => {

    const p = new Promise<number>(
        //executor function (task)
        (_resolveFnRef, _rejectFnRef) => {
            const res = a / b
            if (res === Infinity)
                //throw new Error('divisor can not be zero')
                _rejectFnRef(new Error('divisor can not be zero'))
            //_rejectFnRef('divisor can not be zero')

            //return res
            _resolveFnRef(res)
            //console.log(res)
            //_resolveFnRef(undefined)
        }
    )
    return p
}

const add = (a: number, b: number) => a + b

const divPromise = divide(12, 3)
divPromise
    .then(
        (data: number) => { console.log(data) },
        (err: Error) => { console.log(err.message) }
    )
// divPromise
//     .catch((err: Error) => console.log(err.message))

const addRes = add(12, 3)

//console.log(divRes)
console.log(addRes)