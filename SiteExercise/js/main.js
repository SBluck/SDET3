function getData(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(
        function(response) {
            if (response.status !== 200) {
                console.log('Problem accessing the json website. Status code: ' +
                    response.status);
                return;
            }
            // Check text in the response
            response.json().then(function(data) {
                console.log(data);
                for(let i=0;i<data.length;i++) {
                    console.log("postid",data[i].postId);
                    console.log("id",data[i].id);
                    console.log("name",data[i].name);
                    console.log("email",data[i].email);
                    console.log("body",data[i].body);
                    let para = document.createElement("P");
                    para.className ="alert alert-info";
                    para.innerText = `
                    ${(document.querySelector("#resp").innerHTML = data[i].postId)}
                    ${(document.querySelector("#resp").innerHTML = data[i].id)}
                    ${(document.querySelector("#resp").innerHTML = data[i].name)}
                    ${(document.querySelector("#resp").innerHTML = data[i].email)}
                    ${(document.querySelector("#resp").innerHTML = data[i].body)}`
                  
                }
            })
        }
    )
    .catch(function(err){
        console.log('Error during fetch', err);
    });
}
