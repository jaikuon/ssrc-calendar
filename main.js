setInterval(function() {var now = new Date();
var start = new Date(now.getFullYear(), 0, 1);
var dayOfYear = Math.floor((now - start) / 86400000); // 0-based: Jan 1 = 0l


var monthNames = ["January", "February", "March", "April", "May", "June", "Sol",
  "July", "August", "September", "October", "November", "December"
];

if (dayOfYear >= 364) {
  document.getElementById("date").textContent = "ITS RESET DAY!";
document.getElementById("tagline").textContent="You better be relaxing. It’s the law"} else { document.getElementById("tagline").textContent = ""
  var month = Math.floor(dayOfYear / 28);
  var day = (dayOfYear % 28) + 1;
  document.getElementById("date").textContent =
    monthNames[month] + " " + day + ", " + now.getFullYear();
}; document.getElementById("time").textContent = new Date().toLocaleTimeString()}, 1000)