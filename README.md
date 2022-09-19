# Markdown Links

## Índice

* [1. Resumen](#1-resumen)
* [2. Diagrama de flujo](#2-diagrama-de-flujo)
* [3. Paso a paso](#3-paso-a-paso)
* [4. Línea de comandos](#4-línea-de-comandos)
* [5. Guía de instalación](#5-guía-de-instalación)
* [6. Autor](#6-autor)

## 1. Resumen

Markdown es un lenguaje de marcado sencillo que sirve para agregar formato, vínculos e imágenes con facilidad al texto simple, normalmente lo podemos encontrar en cualquier tipo de repositorio, empezando por el tradicional README.md.

![img markdown mark](/src/img/Markdown-mark.png)

En este proyecto se construyó una libreria propia, que lea los archivos con extensión. md de un _path o ruta_ y que con ello verificar los links que contenga y aportar algunas estadísticas como lo son cantidad de links, links repetido y links rotos o no válidos.

## 2. Diagrama de flujo

Para la ejecución del proyecto se tuvo en cuenta el siguiente diagrama de flujo:

![diagrama de flujo](/src/img/Diagrama%20de%20flujo.jpg)

## 3. Paso a paso

En el **diagrama de flujo** se plantea las siguientes tareas:

1. Evaluar si el path o ruta ingresado por el usuario es relativo o absoluto si es relativo se convierte en absoluto.

2. Al disponer del path absoluto se evalúa si este existe, si el path existe se evalúa si es archivo y si es un archivo con extensión .md, si se cumple con esta condición se retorna un array de contiene todos los links encontrados. Si no se cumple esta condición se evalúa si es un directorio y por medio de la _**recursividad**_ se vuelve a evaluar que archivos .md hay en cada una de las carpetas situadas en el path.

3. De la función anterior se retorna un array con los archivos .md, la cual será el parámetro con la que se ejecutara la función _**leer archivo**_ que convierte el texto del archivo .md en un texto HTML.

4. El retorno de la función anterior, es un array de objetos que entrega el path absoluto y el texto HTML que se encuentra en ese path/archivo, ahora así, la siguiente función _**selecciona los links dentro de ese archivo**_ (todos los links que incluyan _**https o http**_).

5. De la función anterior retorna una promesa que al utilizar el método de las promesas _**.then**_ entrega resueltas en un array las promesas internas que sería la selección de todos los links por cada uno de los paths, ahora entonces se llama la función status la cual entrega el estado de cada uno de los links (si su estado es Ok o fail) para su desarrollo se usó el método *fecth* el cual hace una solicitud de respuesta del código HTTP.

6. Ahora así, el retorno de la función anterior de igual modo es una promesa que se resolverá dentro de la función _**mdLinks**_, función que define unos resultados si el usuario ingresa la opción de validación para un path.

7. Dada la función mdLinks se ejecuta la función para el CLI, en la cual incluye además de la validación (_**validate**_), las estadísticas de los links obtenidos (_**stats**_), stats entrega al usuario la cantidad de links obtenidos en su ruta y si estos son únicos, además el usuario al ingresar la función stats y validate, se ejecutara la cantidad de links totales, los únicos y los rotos.

## 4. Línea de comandos

El ejecutable de la aplicación al ejecutarse se observara de la siguiente manera a través de la terminal:

`md-links <path-to-file> [options]`

Por ejemplo:

```sh
$ md-links ./some/example.md
./some/example.md http://algo.com/2/3/ Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html algún doc
./some/example.md http://google.com/ Google
```

El comportamiento por defecto no valida si las URLs responden ok o no, si el usuario no ingresa **opción** el programa solo identificara el archivo markdown (a partir de la ruta que recibe como argumento), analiza el archivo Markdown e imprime los links que vaya encontrando, junto con la ruta del archivo donde aparece y el texto que hay dentro del link.

#### Options

##### `--validate`

Si pasamos la opción `--validate`, el módulo hará una petición HTTP para averiguar si el link funciona o no. Si el link resulta en una redirección a una
URL que responde ok, entonces consideraremos el link como ok.

Por ejemplo:

```sh
$ md-links ./some/example.md --validate
./some/example.md http://algo.com/2/3/ ok 200 Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html fail 404 algún doc
./some/example.md http://google.com/ ok 301 Google
```

Vemos que el _output_ en este caso incluye la palabra `ok` o `fail` con la Key de nombre status_response, así como el status de la respuesta recibida a la petición HTTP a dicha URL.

##### `--stats`

Si pasamos la opción `--stats` se imprime un texto con estadísticas básicas sobre los links.

```sh
$ md-links ./some/example.md --stats
Total: 3
Unique: 3
```

En la combinación de las opciones `--stats` y `--validate` se obtienen estadísticas que necesitan los resultados de validación.

```sh
$ md-links ./some/example.md --stats --validate
Total: 3
Unique: 3
Broken: 1
```
## 5. Guía de instalación

Para hacer uso de la librería ejecuta en la terminal el siguiente comando:

```sh
npm install icarreno-md-links
```
La librería se importa de la siguiente manera:

```sh
const {mdLinks} = require('icarreno-md-links')
```
La librería se ejecuta desde cli.js

```sh
 ./utils/cli.js
```
Los comandos validos de opciones desde la terminal son:
```sh
1. --validate
2. --stats
3. --stats --validate
```
A continuación se da un ejemplo de cómo ingresar las opciones:
```sh
mdLinks <path-to-file> [options]
```

## 6. Autor

Ibeht Milady Carreño Avella


