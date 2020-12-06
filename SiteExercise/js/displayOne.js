function getOneRecord(id){
    fetch('https://jsonplaceholder.typicode.com/comments/'+id)
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
                    console.log("postid",data.postId);
                    console.log("id",data.id);
                    console.log("name",data.name);
                    console.log("email",data.email);
                    console.log("body",data.body);
                    let para = document.createElement("P");
                    para.className ="alert alert-info";
                    para.innerText = `
                    ${(document.querySelector("#resp").innerHTML = data[id].postId)}
                    ${(document.querySelector("#resp").innerHTML = data[id].id)}
                    ${(document.querySelector("#resp").innerHTML = data[id].name)}
                    ${(document.querySelector("#resp").innerHTML = data[id].email)}
                    ${(document.querySelector("#resp").innerHTML = data[id].body)}`
                  
                    let myDiv = document.getElementById("myDiv");
                    myDiv.appendChild(para);
            })
        }
    )
    .catch(function(err){
        console.log('Error during fetch', err);
    });
}