document.addEventListener('DOMContentLoaded', () => {
    const hugButton = document.getElementById('hugButton');
    const hugCounter = document.getElementById('hugCounter');
    const musicButton = document.getElementById('musicButton');
    const backgroundMusic = document.getElementById('backgroundMusic');
    const hugMessage = document.getElementById('hugMessage');
    const findWoodstockButton = document.getElementById('findWoodstockButton');
    let hugs = 0;
    let isMusicPlaying = false;

    // Efectos de sonido
    const hugSound = new Audio('https://www.soundjay.com/buttons/sounds/button-09.mp3');
    
    // Mensajes aleatorios de Snoopy
    const snoopyMessages = [
        "¡Gracias por el abrazo! 🐾",
        "¡Eres la mejor! 💖",
        "¡Me encantan tus abrazos! 🥰",
        "¡Eres mi persona favorita! 🌟",
        "¡Más abrazos por favor! 🤗"
    ];

    // Control de música
    musicButton.addEventListener('click', () => {
        if (isMusicPlaying) {
            backgroundMusic.pause();
            musicButton.textContent = '🎵 Música';
        } else {
            backgroundMusic.play();
            musicButton.textContent = '🔇 Música';
        }
        isMusicPlaying = !isMusicPlaying;
    });

    // Animación de mensajes al hacer scroll
    const messageCards = document.querySelectorAll('.message-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    messageCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease-out';
        observer.observe(card);
    });

    hugButton.addEventListener('click', () => {
        hugs++;
        hugCounter.textContent = `Abrazos: ${hugs}`;
        hugSound.play();

        // Mostrar mensaje aleatorio en el contenedor
        const randomMessage = snoopyMessages[Math.floor(Math.random() * snoopyMessages.length)];
        hugMessage.textContent = randomMessage;
        hugMessage.style.opacity = '0';
        hugMessage.style.transition = 'opacity 0.3s';
        setTimeout(() => {
            hugMessage.style.opacity = '1';
        }, 10);

        // Efecto de rebote en el botón
        hugButton.style.transform = 'scale(0.95)';
        setTimeout(() => {
            hugButton.style.transform = 'scale(1)';
        }, 100);
    });

    // Agregar estilos para la animación
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInOut {
            0% { opacity: 0; transform: translate(-50%, 20px); }
            20% { opacity: 1; transform: translate(-50%, 0); }
            80% { opacity: 1; transform: translate(-50%, 0); }
            100% { opacity: 0; transform: translate(-50%, -20px); }
        }
    `;
    document.head.appendChild(style);

    // Juego de estados de ánimo
    const moodButtons = document.querySelectorAll('.mood-button');
    const moodResult = document.querySelector('.mood-result');
    const moods = [
        "¡Feliz! 🎉 ¡Me encanta cuando estoy feliz!",
        "¡Triste! 😢 Necesito un abrazo...",
        "¡Emocionado! 🎮 ¡Vamos a jugar!",
        "¡Soñoliento! 😴 Zzz...",
        "¡Hambriento! 🍕 ¿Tienes galletas?"
    ];

    moodButtons.forEach(button => {
        button.addEventListener('click', () => {
            const randomMood = moods[Math.floor(Math.random() * moods.length)];
            moodResult.textContent = randomMood;
            moodResult.style.animation = 'none';
            moodResult.offsetHeight; // Trigger reflow
            moodResult.style.animation = 'fadeIn 0.5s ease';
        });
    });

    // Juego de encontrar a Woodstock
    const woodstockContainer = document.querySelector('.woodstock-container');
    const woodstockImage = woodstockContainer.querySelector('img');
    let isWoodstockVisible = false;

    function toggleWoodstock() {
        isWoodstockVisible = !isWoodstockVisible;
        woodstockImage.classList.toggle('hidden');
        
        if (isWoodstockVisible) {
            setTimeout(() => {
                woodstockImage.classList.add('hidden');
                isWoodstockVisible = false;
            }, 2000);
        }
    }

    // Juego de escritura
    const storyInput = document.getElementById('storyInput');
    const storyResult = document.querySelector('.story-result');
    const snoopyResponses = [
        "¡Qué historia tan interesante! 🎨",
        "¡Me encanta tu creatividad! ✨",
        "¡Eso me da una idea para mi próxima novela! 📚",
        "¡Wow! ¡Eso es genial! 🎉",
        "¡Qué imaginación tienes! 🌟"
    ];

    storyInput.addEventListener('input', () => {
        if (storyInput.value.length > 0) {
            const randomResponse = snoopyResponses[Math.floor(Math.random() * snoopyResponses.length)];
            storyResult.textContent = randomResponse;
            storyResult.style.animation = 'none';
            storyResult.offsetHeight; // Trigger reflow
            storyResult.style.animation = 'fadeIn 0.5s ease';
        } else {
            storyResult.textContent = '';
        }
    });

    if (findWoodstockButton) {
        findWoodstockButton.addEventListener('click', toggleWoodstock);
    }

    // Juego Snoopy Saltarín
    const jumpButton = document.getElementById('jumpButton');
    const snoopyJumpImg = document.getElementById('snoopyJumpImg');
    const jumpCounter = document.getElementById('jumpCounter');
    const jumpMessage = document.getElementById('jumpMessage');
    let jumps = 0;
    const jumpMessages = [
        "¡Qué salto tan alto! 🐶✨",
        "¡Eres un saltador profesional! 🏆",
        "¡Snoopy está feliz de saltar contigo! 😄",
        "¡Eso fue divertido! 🎉",
        "¡Sigue saltando! 💙"
    ];
    if (jumpButton) {
        jumpButton.addEventListener('click', () => {
            jumps++;
            jumpCounter.textContent = `Saltos: ${jumps}`;
            // Animación de salto
            snoopyJumpImg.style.transform = 'translateY(-50px) scale(1.1)';
            setTimeout(() => {
                snoopyJumpImg.style.transform = 'translateY(0) scale(1)';
            }, 300);
            // Mensaje divertido
            const randomJumpMsg = jumpMessages[Math.floor(Math.random() * jumpMessages.length)];
            jumpMessage.textContent = randomJumpMsg;
            jumpMessage.style.opacity = '0';
            setTimeout(() => {
                jumpMessage.style.opacity = '1';
            }, 10);
        });
    }

    // Juego ¿Qué está soñando Snoopy?
    const dreamButton = document.getElementById('dreamButton');
    const dreamBubble = document.getElementById('dreamBubble');
    const dreams = [
        "Volar un avión rojo ✈️",
        "Comer galletas 🍪",
        "Bailar bajo la luna 🌙",
        "Jugar con Woodstock 🐦",
        "Ser escritor famoso 📚",
        "Dormir en mi caseta 💤",
        "Viajar por el mundo 🌍",
        "Tener muchos amigos 🐾"
    ];
    if (dreamButton) {
        dreamButton.addEventListener('click', () => {
            const randomDream = dreams[Math.floor(Math.random() * dreams.length)];
            dreamBubble.textContent = randomDream;
            dreamBubble.style.opacity = '0';
            setTimeout(() => {
                dreamBubble.style.opacity = '1';
            }, 10);
        });
    }

    // Manejo del mensaje oculto para dispositivos táctiles
    const hiddenMessage = document.querySelector('.hidden-message');
    if (hiddenMessage) {
        hiddenMessage.addEventListener('touchstart', (e) => {
            e.preventDefault();
            hiddenMessage.classList.toggle('active');
        });

        // Cerrar el mensaje al tocar fuera
        document.addEventListener('touchstart', (e) => {
            if (!hiddenMessage.contains(e.target)) {
                hiddenMessage.classList.remove('active');
            }
        });
    }
}); 