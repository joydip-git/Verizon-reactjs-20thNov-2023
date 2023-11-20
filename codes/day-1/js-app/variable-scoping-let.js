//function main(){
function run() {
    //any variable declared with let keyword can't be accessed before the variable declaration
    //console.log(x)//? undefined
    //var x
    let x
    x = 10
    console.log(x)//? 10

    for (let i = 0; i < 1; i++) {
        //in JS there is no separate scope for a variable inside the control  flow statements and outside them in a function
        //var x
        let x
        x = 20
        console.log(x)//? 20
    }
    console.log(x)//? 20/10

    test()
    function test() {
        var x = 30
        console.log('test method')
    }
    test()

    // sample()
    var sample
    sample = function () {
        console.log('sample')
    }
    sample()
}
run()
//}
//main()