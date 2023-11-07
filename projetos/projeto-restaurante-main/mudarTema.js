document.addEventListener('DOMContentLoaded', function() {
    const darkModeButton = document.getElementById('darkModeButton');
    const body = document.body;

    function setLightMode() {
        body.classList.remove("ligth-mode");
        darkModeButton.innerHTML = '<img src="moon.png" alt="moon">';
        body.style.backgroundColor = 'white'; // Cor do fundo no modo claro
    }

    function toggleDarkMode() {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            darkModeButton.innerHTML = '<img src="sun.png" alt="sun">';
            body.style.backgroundColor = '#333'; // Cor do fundo no modo escuro
        } else {
            setLightMode(); // Chama a função para definir o modo claro
        }

      
    
    }
    darkModeButton.addEventListener('click', toggleDarkMode);
    updateTime();
});
