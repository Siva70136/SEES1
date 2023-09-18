let bgcolor = ['lightgreen', 'lightblue', 'lightgoldenrodyellow', 'lightskyblue', 'lightpink']
const data = [{
    name: "Glyan Ginpoo",
    role: "Software Engineer",
    email: "ggainpoo9786@gmail.com",
    date: "04/05/2012",
    salary: "$24973.48",
    status: "Professional"
},
{
    name: "Evangelina Carnock",
    role: "Cost Accountant",
    email: "ecrock234@gmail.com",
    date: "26/05/2021",
    salary: "$23704.48",
    status: "Resigned"
},
{
    name: "Olivette Gudgin",
    role: "Paralegal",
    email: "ogudin4@gmail.com",
    date: "16/05/2022",
    salary: "$1523.18",
    status: "Professional"
}
    ,
{
    name: "Reina Peckett",
    role: "Quality Control Specialist",
    email: "rpeckett@gmail.com",
    date: "13/05/2011",
    salary: "$3200.18",
    status: "Resigned"
}
    ,
{
    name: "Aleric Besiler",
    role: "Tax Accountant",
    email: "abesiler@gmail.com",
    date: "16/02/2002",
    salary: "$1335.88",
    status: "Resigned"
},
{
    name: "Ronic Hasterd",
    role: "Human Resources Assistant",
    email: "rhasterd@gmail.com",
    date: "16/04/2023",
    salary: "$1999.68",
    status: "Current"
}
    ,
{
    name: "Siva Ch",
    role: "Full Stack Engineer",
    email: "sivach@gmail.com",
    date: "16/03/2023",
    salary: "$5231.44",
    status: "Current"
}, {
    name: "Anusha Ch",
    role: "Software Engineer",
    email: "anushach786@gmail.com",
    date: "04/04/2010",
    salary: "$34973.48",
    status: "Professional"
},
{
    name: "Narendra Ch",
    role: "Cost Accountant",
    email: "narirock@gmail.com",
    date: "26/05/2021",
    salary: "$24041.48",
    status: "Current"
},
{
    name: "Mani Ch",
    role: "Paralegal",
    email: "chmani@gmail.com",
    date: "16/11/2022",
    salary: "$1623.18",
    status: "Professional"
}
    ,
{
    name: "Reina Peckett",
    role: "Quality Control Specialist",
    email: "rpeckett@gmail.com",
    date: "13/05/2011",
    salary: "$3200.18",
    status: "Resigned"
}
    ,
{
    name: "Mahendra K",
    role: "Tax Accountant",
    email: "abesiler@gmail.com",
    date: "16/02/2002",
    salary: "$1335.88",
    status: "Resigned"
},
{
    name: "Vamsi P",
    role: "Human Resources Assistant",
    email: "rhasterd@gmail.com",
    date: "16/04/2023",
    salary: "$1779.68",
    status: "Current"
}
    ,
{
    name: "Madhan P",
    role: "Full Stack Engineer",
    email: "sivach@gmail.com",
    date: "16/03/2023",
    salary: "$5231.44",
    status: "Current"
},,
{
    name: "Dheeraj L",
    role: "Human Resources Assistant",
    email: "rhasterd@gmail.com",
    date: "16/04/2023",
    salary: "$1779.68",
    status: "Current"
}
    ,
{
    name: "Saidha Reddy",
    role: "Full Stack Engineer",
    email: "sivach@gmail.com",
    date: "16/03/2023",
    salary: "$5231.44",
    status: "Current"
}
]

const itemsPerPage = 5;
let currentPage = 1;


function displayData() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemContainer = document.getElementById('items-container');

    let tableHTML = '<tr><td><input type="checkbox" /></td><td>NAME</td><td>EMAIL</td><td>DATE</td><td>SALARY</td><td class="orange1">STATUS</td><td>ACTIONS</td></tr>';

    for (let i = startIndex; i < endIndex && i < data.length; i++) {
        const row = data[i];
        let color;
        if (row.status === "Professional") {
            color = "green";
        }
        else if (row.status === "Resigned") {
            color = "orange";
        }
        else {
            color = "purple";
        }
        let l = Math.floor(Math.random() * bgcolor.length);
        console.log(l);
        tableHTML += `<tr><td><input type="checkbox" /></td><td><div class="title">
            <div >
            <p class=" i" style="background:${bgcolor[l]}">${row.name[0]}${row.name.split(" ")[1][0]}</p>
            </div>
            <div class="name">
            <p>${row.name}</p>
            <p class="role">${row.role}</p>
            </div>
        </div></td>
        <td>${row.email}</td><td>${row.date}</td><td>${row.salary}</td><td><div class="${color}1"><p class="${color}">${row.status}</p></div></td>
        <td>
        <div class="">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16" style="color:lightskyblue;">
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16" style="color:lightskyblue;">
            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
        </svg>
        </div></td></tr>`;

    }

    itemContainer.innerHTML = tableHTML;
}

// Function to update pagination controls
function updatePaginationControls() {
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const prevButton = document.getElementById('prev-page');
    const nextButton = document.getElementById('next-page');
    const pageNumSpan1 = document.getElementById('page-num1');
    const pageNumSpan2 = document.getElementById('page-num2');
    const pageNumSpan3 = document.getElementById('page-num3');

    //console.log(pageNumSpan1.id===`page-num${currentPage}`);
    if (pageNumSpan1.id == `page-num${currentPage}`) {
        pageNumSpan1.classList.add("active");
        pageNumSpan2.classList.remove("active");
        pageNumSpan3.classList.remove("active");
    }
    else if (pageNumSpan2.id === `page-num${currentPage}`) {
        pageNumSpan2.classList.add("active");
        pageNumSpan1.classList.remove("active");
        pageNumSpan3.classList.remove("active");

    }
    else {
        pageNumSpan3.classList.add("active");
        pageNumSpan1.classList.remove("active");
        pageNumSpan2.classList.remove("active");
    }
    if (currentPage === 1) {
        prevButton.disabled = true;
    } else {
        prevButton.disabled = false;
    }

    if (currentPage === totalPages) {
        nextButton.disabled = true;
    } else {
        nextButton.disabled = false;
    }
}

// Event listeners for pagination buttons
document.getElementById('prev-page').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        displayData();
        updatePaginationControls();
    }
});

document.getElementById('next-page').addEventListener('click', () => {
    const totalPages = Math.ceil(data.length / itemsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        displayData();
        updatePaginationControls();
    }
});
document.getElementById('page-num1').addEventListener('click', () => {
    const totalPages = Math.ceil(data.length / itemsPerPage);
    if (1 <= totalPages) {
        currentPage = 1;
        displayData();
        updatePaginationControls();
    }
});

document.getElementById('page-num2').addEventListener('click', () => {
    const totalPages = Math.ceil(data.length / itemsPerPage);

    if (2 <= totalPages) {
        currentPage = 2;
        displayData();
        updatePaginationControls();
    }
});
document.getElementById('page-num3').addEventListener('click', () => {
    const totalPages = Math.ceil(data.length / itemsPerPage);

    if (totalPages >= 3) {
        currentPage = 3;
        displayData();
        updatePaginationControls();
    }
});

// Initial display
displayData();
updatePaginationControls();