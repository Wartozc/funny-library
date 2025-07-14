# Proyecto Backend

    Este servicio se encuentra construido utilizando en nodeJS con ayuda de express y mongodb para la conexión de base de datos.

Antes de levantar el servidor, por favor tener presente que es necesario configurar las variables que se encuentran definidas en el archivo '.env' que es el lugar donde definimos nuestras variables de entorno. Es este caso se solicita configurar PORT, BASE_PATH y DATABASE_NAME

## PORT
Este es el puerto en el cual se levanta el servidor, por ejemplo el puerto '3000'

## BASE_PATH
Este es el path base de nuestra aplicación, normalmente utilizador el api para decir que se expone un endPoint, seguido de la versión y finalmente el nombre de la aplicación. Esta es la base de todos los endPoints expuestos.

## DATABASE_NAME
Este se utiliza para especificar el nombre de la base de datos con la cual estamos trabajando o deseamos trabajar para el caso de mongoDB

## Para levantar el servidor tenemos dos opciones:

* Pararse en la raíz del proyecto, es decir dentro de la carpeta backend y ejecutar el comando 'npm run start' esto llamará el script que fue condifurador en el package.json para levantar el proyecto.
* La otra opción es pararse en el directorio view es decir ./backend/view y correr el comando 'node app.js', esto correrá el archivo app y levantará el servidor.

**Nota:** Despues de levantada la aplicación, se puede realizar una petición get al endPoint de vida o salud, para verificar el estado de la aplicación
```
http://localhost:3000/api/v1/user-handler/health

```
