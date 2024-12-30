
// Alert Banner
const alertBanner = document.getElementById("alert");

console.log(alertBanner.innerHTML);

alertBanner.innerHTML=
`
<div class="alert-banner">
  <p><strong>Alert:</strong> You have unread messages</p>
  <p class="alert-banner-close">x</p>
</div>
`;

alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
    alertBanner.style.display = "none"
    }
    });


// Chart Widgets

// Traffic Line Graph

const trafficCanvas = document.getElementById("traffic-chart");

const trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1900, 2250, 1500, 2500],
        backgroundColor: '#7477bf33',
        borderWidth: 1,
        tension: 0.4,
    }],
};

const trafficOptions = {
    backgroundColor: '#7477bf99',
    fill: true,
    aspectRatio: 2.5,
    animation: {
        duration: 0
    },
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            display: false
        }
    },

};

const trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
});


// Daily Bar Chart

const dailyCanvas = document.getElementById("daily-chart");

let dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        label: "# of Hits",
        data: [75, 110, 175, 125, 225, 200, 100],
        backgroundColor: '#7477bf',
        borderWidth: 1
    }]
};

let dailyOptions = {
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
};

let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});


// Mobile Doughnut Chart

const mobileCanvas = document.getElementById("mobile-chart");

let mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
        label: "# of Users",
        data: [60, 20, 20],
        backgroundColor: [
            '#7477bf',
            '#81c98f',
            '#51b6c8'
        ],
    }]
}

let mobileOptions = {
    aspectRatio: 1.9,
    plugins: {
        legend: {
            position: 'right',
            labels: {
                boxWidth: 30,
                font: {
                    size: 14,
                    weight: 'bold'
                }
            }
        }
    },
    elements: {
        arc: {
            borderWidth: 0
        }
    }
};

let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});



// Message User


const user = document.getElementById('userField');

const message = document.getElementById('messageField');

const send = document.getElementById('send');


send.addEventListener( 'click', () => {

    if (user.value === "" && message.value === "") {
        alert("Please select a user and type a message before sending.");
    } else if (user.value === "") {
        alert('Please select a user before sending.');
    } else if (message.value === "") {
        alert('Please type a message before sending.');
    } else {
        alert(`Message sent successfully to ${user.value}`);
    }

} );







