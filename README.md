# Backend almundo
> Backend de almundo.

[![NPM Version][npm-image]][npm-url]
[![Downloads Stats][npm-downloads]][npm-url]

Aplicación movíl contruida con react-native

![](./Logo-Almundo.png)

## Instalación

OS X, Linux y Windows:

```sh

npm install


```

## Configuración de entorno local para correr aplicación

Para instalar algunas la las dependencias que necesitamos, tenemos que tener instado nodeJs y con su gesor de paqueter npm procederemos a instalar algunas dependencias estando ubicados con la terminar en el folder o directorio del proyecto. Recuerda que como es un packete que se instalara en tu computador para ser usado desde cualquier lugar, no olvides si estas en windows ejecutar la consola de comandos como administrador del sistema y si estas en linux ejecutar el como super usuario root.

```sh

npm install -g react-native-cli

```

este comando nos sirve para instalar in cli de react-native que nos ayudara desde la consola a realizar algunas acciones necesarias para la ejecusión del proyecto.


##Configuración del entorno de api a consumir

La aplicación tiene un archivo de configuración de entornos de trabajo (desarrollo, QA y produccioón), dicho archivo se puede encontrar en el directorio ```sh appAlmundo/Store/services/ENV.js  ```

```sh

const ENV = {
    development: '<Aqui va tu ip>:<puerto>',
    QA: 'qa.almundo.com',
    production: 'almundo.com',
};
  
export default ENV;

```

Ademas de este tenemos un archivo en donde se establece el ambiente desde el cual la aplicación va a consumir el api rest y es el siguiente :    ```sh   appAlmundo/Store/services/API.js    ```

```sh

import ENV from './ENV'
const api = ENV.development;

exports.getListHotels = () => {
    return new Promise((resolve, reject) => {
        try {
            fetch(`http://${api}/api/v1/hotels`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }
            })
            .then(response => response.json())
            .then(response => {resolve(response);})
            .catch(error => reject(error));
        } catch (error) {
            console.log(error);
            reject(error);
        }
    });
}

exports.getHotelDetails = (values) => {
    return new Promise((resolve, reject) => {
        try {
            fetch(`http://${api}/api/v1/hotel/${values.id}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }
            })
            .then(response => response.json())
            .then(response => resolve(response))
            .catch(error => reject(error));
        } catch (error) {
            console.log(error);
            reject(error)
        }
    });
}

```

modificando la segunda linea del archivo podemos determinar cual de los entornos configurados para consumir el api rest sera usado (development, QA, production).

## Puesta en marcha

Si todo ha salido bien en las instalaciones anteriores, para ejecutar nuestra aplicación en un dispositivo virtual dentro de nuestro computador se debera realizar en consola, estando ubicador en el forder origen de la aplicación el siguiente comando.


Emulador o dispositivo IOS

```sh

react-native run-ios

```


Emulador o dispositivo Android

```sh

react-native run-android

```

## Historial de versiones

* 0.0.1
    * Trabajo en progreso

## Meta

Eder Diaz – [@ederdiaz8](https://twitter.com/ederdiaz8) – ederdiaz_@hotmail.com

Distribuido bajo la licencia MIT. Ver ``LICENSE`` para más información.

[https://github.com/ederius/backend-almundo.git](https://github.com/ederius/backend-almundo.git)

[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square