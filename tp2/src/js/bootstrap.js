// DATE AUTOMATIQUE
const today = new Date();

const year = today.getFullYear();

const month = String(today.getMonth() + 1).padStart(2, '0');
const dayOfMonth = String(today.getDate()).padStart(2, '0');

const dateDisplay = document.getElementById('date-display');

dateDisplay.innerHTML = `<i class="bi bi-calendar3"></i> ${year}-${month}-${dayOfMonth}`