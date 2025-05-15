 function updateTotal() {
    document.querySelectorAll('.options').forEach(option => {
        if (option.style.display === 'block') {
            option.style.maxHeight = '0';
            option.style.opacity = '0';
            setTimeout(() => {
                option.style.display = 'none';
            }, 300);
        }
    });
    
    const selectedOption = document.querySelector('input[name="pricing"]:checked');
    if (selectedOption) {
        const optionsId = 'options' + selectedOption.value;
        const optionsElement = document.getElementById(optionsId);
        optionsElement.style.display = 'block';
        setTimeout(() => {
            optionsElement.style.maxHeight = '500px';
            optionsElement.style.opacity = '1';
        }, 10);
    }
    
    const selectedValue = selectedOption.value;
    let total = 18.00; 
    
    if (selectedValue === "1") {
        total = 10.00;
    } else if (selectedValue === "3") {
        total = 24.00;
    }
    
    document.querySelector('.total').textContent = `Total : $${total.toFixed(2)} USD`;
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('option2').checked = true;
    const optionsElement = document.getElementById('options2');
    optionsElement.style.display = 'block';
    setTimeout(() => {
        optionsElement.style.maxHeight = '500px';
        optionsElement.style.opacity = '1';
    }, 10);
});