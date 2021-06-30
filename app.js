// sending and retreiving data Firebase 
let sendData = () => {
    let a = prompt("enter your name")
    let b = +prompt("enter your age")
    let c = prompt("enter your section")
    let d = prompt("enter your roll")
    let obj = {
        name : a,
        age : b,
        section : c,
        roll : d
    }
    firebase.database().ref('student').push(obj)
}

let getData = (e) => {
    firebase.database().ref('student').on('child_added', (data) => {
        // console.log(data.val())
        e(data.val())
    })
}

// console.log(r)

let dusra = (data) => {
    // console.log(data)
    console.log("Fetching Data Please Wait ....... ")
    setTimeout(() => {
        var r = new Promise((res, rej) => {
            if (data) {
                res(data)
            }
            else {
                rej("Something went wrong")
            }
        })

        r.then((data) => {
            console.log(data)
        }).catch((err) => {
            console.log(err)
        })
    },3000)

}






// sending data in database thorugh array
let arr = ["saad", 21]
let sendData = () => {
    firebase.database().ref('student').push(arr)
}

let obj = "Saad"
let sendData = () => {
    firebase.database().ref('student').push(obj)
}





// sending data in firebase through array of objects
let obj = [
    {name : "saad", age : 21},
    {name : "atif", age : 21},
    {name : "kashan", age : 21},
]

let sendData = () => {
    firebase.database().ref('student').push(obj)
}




// Printing object Data in DOM 
let obj = {
    name: "saad",
    age: 21
}

for (var key in obj) {
    document.write(obj[key])
}




// for each
var arr = ["saad", "Ali"]
// let obj = {
//     name : "Saad",            objects not possible
//     age : 21
// }
var b = arr.forEach((val, key) => {
    document.write(`${key} ${val} <br><br>`)
})