# Markdown Links

## Índice

* [1. Resumen](#1-resumen)
* [2. Diagrama de flujo](#2-diagrama-de-flujo)
* [3. Paso a paso](#3-paso-a-paso)
* [4. Linea de comandos - CLI](#4-linea-de-comandos)
* [5. Autor](#5-autor)


## 1. Resumen

Markdown es un lenguaje de marcado sencillo que sirve para agregar formato, vínculos e imágenes con facilidad al texto simple, normalmente lo podemos encontrar en cualquier tipo de repositorio, empezando por el tradicional README.md.


![img markdown mark](/src/img/Markdown-mark.png)

En este proyecto se construyo una libreria propia, que lea los archivos con extension. md de un _path o ruta_ y que con ello verificar los links que contenga y aportar algunas estadisticas como lo son cantidad de links, links repetido y links rotos o no validos.

## 2. Diagrama de flujo

Para la ejecucion del proyecto se tuvo en cuenta el siguiente diagrama de flujo:

![diagrama de flujo](/src/img/Diagrama%20de%20flujo.jpg)

## 3. Paso a paso

En el **diagrama de flujo** se plantea las siguientes tareas:

1. Evaluar si el path o ruta ingresado por el usuario es relativo o absoluto si es relativo se convierte en absoluto.

2. Al disponer del path absoluto se evalua si este existe, si el path existe se evalua si es archivo y si es un archivo con extension .md, si se cumple con esta condicion se retorna un array de contiene todos los links encontrados. Si no se cumple esta condicion se evalua si es un directorio y por medio de la _**recursividad**_ se vuelve a evaluar que archivos .md hay en cada una de las carpetas situadas en el path.

3. De la funcion anterior se retorna un array con los archivos .md, la cual sera el parametro con la que se ejecutara la funcion _**leer archivo**_ que convierte el texto del archivo .md en un texto HTML.

4. El retorno de la funcion anterior, es un array de objetos que entrega el path absoluto y el texto HTML que se encuentra en ese path/archivo, ahora asi, la siguiente funcion _**selecciona los links dentro de ese archivo**_ (todos los links que incluyan _**https o http**_).

5. De la funcion anterior retorna una promesa que al utilizar el metodo de las promesas _**.then**_ entrega resueltas en un array las promesas internas que seria la seleccion de todos los links por cada uno de los paths, ahora entonces se llama la funcion status la cual entrega el estado de cada uno de los links (si su estado es Ok o fail) para su desarrollo se uso el metodo *fecth* el cual hace una solicitud de respuesta del codigo HTTP.

6. Ahora asi, el retorno de la funcion anterior de igual modo es una promesa que se resolvera dentro de la funcion _**mdLinks**_, funcion que define unos rsultados si el usuario ingresa la opcion de validacion para un path.

7. Dada la funcion mdLinks se ejecuta la funcion para el CLI, en la cual incluye ademas de la validacion (_**validate**_), las estadisticas de los links obtenidos (_**stats**_), stats entrega al usuario la cantidad de links obtenidos en su ruta y si estos son unicos, ademas el usuario al ingresar la funcion stats y validate, se ejecutara la cantidad de links totales, los unicos y los rotos.


## 4. Linea de comandos

El ejecutable de la aplicación al ejecutarse se observara de la siguiente manera a través de la terminal:

`md-links <path-to-file> [options]`

Por ejemplo:

```sh
$ md-links ./some/example.md
./some/example.md http://algo.com/2/3/ Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html algún doc
./some/example.md http://google.com/ Google
```

El comportamiento por defecto no valida si las URLs responden ok o no, si el usuario no ingresa **opcion** el programa solo identificara el archivo markdown (a partir de la ruta que recibe como argumento), analiza el archivo Markdown e imprime los links que vaya encontrando, junto con la ruta del archivo donde aparece y el texto que hay dentro del link.

#### Options

##### `--validate`

Si pasamos la opción `--validate`, el módulo hara una petición HTTP para averiguar si el link funciona o no. Si el link resulta en una redirección a una
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

En la combinacion de las opciones `--stats` y `--validate` se obtienen estadisticas que necesitan los resultados de validacion.

```sh
$ md-links ./some/example.md --stats --validate
Total: 3
Unique: 3
Broken: 1
```
## 5. Autor

Ibeht Milady Carreño Avella
