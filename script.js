let data;
let titles = [];
let descriptions = [];


accessData();

function accessData() 
{
    const request = new XMLHttpRequest();
    request.open("GET", "https://ghibliapi.herokuapp.com/films", true);

    request.onload = function()
    {
        data = JSON.parse(this.response);

        if (request.status == 200)
        {
            console.log(`Response OK.`)
            //console.log(data[2].title);

            data.forEach(
                movie => 
                {
                    let title = movie.title;
                    let description = movie.description;
                    titles.push(title);
                    descriptions.push(description);
                }
            )
            printOptions();
        }
        else
        {
            console.log(`Error Occured: Status: ${request.status}`);
        }
    };
    request.send();
}

function printOptions()
{
    //let title = document.querySelector("#options");
    titles.forEach(name => {
        var x = document.createElement("OPTION");
        var t = document.createTextNode(name);
        x.appendChild(t);

    document.querySelector("#options").appendChild(x);
    });
}

function getItemSelected()
{
    document.querySelector("#outputTitle").innerHTML = "";
    document.querySelector("#outputDescription").innerHTML = "";
    
    let selectedItem = document.querySelector("#options").selectedIndex;
    var x = document.createElement("p");
    var t = document.createTextNode("Movie Title: " + titles[selectedItem]);
    
    x.appendChild(t);
    document.querySelector("#outputTitle").appendChild(x);

    var y = document.createElement("p");
    var z = document.createTextNode(`Movie Description: ${descriptions[selectedItem]}`);
    
    y.appendChild(z);
    document.querySelector("#outputDescription").appendChild(y);
    
}

function clear()
{
    document.querySelector("#outputTitle").innerHTML = "";
    document.querySelector("#outputDescription").innerHTML = "";
}