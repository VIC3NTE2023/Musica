const minhaMusica = document.getElementById('minhaMusica');

        function playMusica() {
            minhaMusica.play();
        }

        function pararMusica() {
            minhaMusica.pause();
            minhaMusica.currentTime = 0;
        }