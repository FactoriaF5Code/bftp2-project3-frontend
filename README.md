# Film City Frontend


Para lanzar este proyecto hace falta tener `yarn` instalado en tu máquina.

Ejecuta `yarn install` para instalar o actualizar las dependencias del proyecto. 

Ejecuta `yarn start` para lanzar el proyecto. 



### Known issues

Esta aplicación se comunica por defecto con un backend en `localhost:8080`. Para evitar errores por bloqueo de conexión, habilita CORS (en Spring añadiendo la anotación `@CrossOrigin` de acuerdo a [estas instrucciones](https://www.baeldung.com/spring-cors))