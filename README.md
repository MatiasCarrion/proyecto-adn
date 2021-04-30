# Instrucciones de uso


1. Clonar el repositorio en tu computadora mediante la terminal. Para ello deberás abrir una terminal, ubicarte en tu directorio elegido con el comando "cd ./tudirectorio" y luego ejecutar "git clone (URL)".

2. Una vez clonado, descargar las dependencias. Para ello, nos ubicamos sobre la carpeta del proyecto y ejecumos "npm install".

3. Podemos ejecutar el proyecto de dos maneras, local o vía URL de la API:
    # Local: 
        1. Sobre una terminal, ubicados en la ruta del proyecto, ejecutamos el comando "nodemon app".
        2. Abrimos un navegador y nos dirigimos a "http://localhost:3000/"
        3. Allí tendremos un navbar donde podremos dirigirnos a inicio o a Stats (estadísticas de las consultas realizadas).
        4. Para ejecutar una peticion debemos utilizar el aplicativo POSTMAN >>
            * Seleccionamos verbo POST,
            * Colocamos esta URL : localhost:3000/mutation
            * Seleccionamos body y raw
            * Por último, colocamos un código JSON como el siguiente y damos SEND:
                {
                "dna":["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]
                }
            * Recibiremos un status 200 para el éxito en caso de que la cadena posea mutación,
            * O un status 403 Forbidden cuando no posea mutación la cadena.

    # URL de la API:
        1. Vamos a un navegador y nos dirigimos a https://proyecto-adn.herokuapp.com/
        2. Allí tendremos un navbar donde podremos dirigirnos a inicio o a Stats (estadísticas de las consultas realizadas).
        3. Para ejecutar una peticion debemos utilizar el aplicativo POSTMAN >>
            * Seleccionamos verbo POST,
            * Colocamos esta URL : https://proyecto-adn.herokuapp.com/mutation
            * Seleccionamos body y raw
            * Por último, colocamos un código JSON como el siguiente y damos SEND:
                {
                "dna":["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]
                }
            * Recibiremos un status 200 para el éxito en caso de que la cadena posea mutación,
            * O un status 403 Forbidden cuando no posea mutación la cadena.
