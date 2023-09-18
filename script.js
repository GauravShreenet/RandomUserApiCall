const apiEP = "https://randomuser.me/api/?results=20";

let userList = [];


const fetchUser = async (url) => {

    try {
        // promise using fetch to fetch data from any server, fetch()

        // fetch(url).then((response)=> {
        //     return response.json();
        // }).then((data) => {
        //     userList = data.results;
        //     display(userList);
        // })

        // Async / Await
        const dt = await fetch(url);
        const data = await dt.json();
        userList = data.results;
        display(userList);
    } catch {
        console.log(error);
    }

}

fetchUser(apiEP);

const display = (users) => {
    let str = ""

    const listElm = document.getElementById("list");
    userList.map((item, i)=>{
        str += `<div class="card flex-grow-1" style="width: 18rem;">
        <img src="${item?.picture?.large}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${item.name.title} ${item.name.first} ${item.name.last}</h5>
            <div class="card-text">
                <ul class="list-unstyled">
                    <li><i class="fa-solid fa-mobile"></i> ${item.phone}</li>
                    <li><i class="fa-solid fa-envelope"></i> ${item.email}</li>
                    <li><i class="fa-solid fa-location-dot"></i> ${item.location.street.number} ${item.location.street.name} ${item.location.city} ${item.location.state} ${item.location.postcode}, ${item.location.country}</li>
                </ul>
            </div>

        </div>
    </div>`
    });

    listElm.innerHTML = str;
}

const handleOnGenderSelect = e => {
    const g = e.value;

    const url = `${apiEP}&gender=${g}`

    fetchUser(url);
}