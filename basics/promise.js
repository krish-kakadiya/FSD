function add_positive_async(n1,n2)
{
    let p = new Promise((resolve,reject)=>{
        if(n1>-1 && n2>-1)
        {
            setTimeout(() => {
                console.log("Delayed for 1 second.");
                resolve(n1 + n2); // move resolve *inside* setTimeout
            }, 1000);
        }
        else{
            reject('not positive');
        }
    })
    return p;
}

add_positive_async(5,10)
.then((ans)=>{
    console.log(ans)
})
.catch((err)=>{
    console.log(err);
})