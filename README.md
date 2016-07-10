
## 01-skeleton
### Añadido estructura de directorios
### Añadidos archivos readme.md y .gitignore
NOTA: hemos dejado fuera de la estructura los directorios:

* **node_modules** => módulos de node (NPM)
* **bower_components** => en principio no vamos a utilizar bower pero si por un causal lo utilizáramos también debería estar fuera de nuestro repositorio
* **build** => donde compilan los fuentes
* **dist** => donde se copia de build a dist y se realizan los ajustes necesarios para prudcción (minimizar css, js etc etc)


## 02-node-grunt
### Añadido node con node init --> package.json
### Añadido grunt --> gruntfile.js

## 03-grunt-config-task
### Añadido  `load-grunt-config 
    Este modulo nos permitirá poder separar nuestro archivo grunt en tareas y configuraciones de módulos.
    De esta forma nuestro código podrá ser reutilizable y mantenible
### Añadimos `jit-grunt`
    Opcionalmente para cargar las tareas poodemos utilizar jit ( Just In Time) que incrementa la velocidad
    de carga de los módulos.
    https://www.npmjs.com/package/jit-grunt
    
## 04-helpers
### Añadidos helpers para manejo de ficheros
#### `grunt-replace` para reemplazar partes del código siguiendo patrones ej:
#### `grunt-contrib-copy` para copiar archivos de u directorio a otro
#### `grunt-contrib-clean` para limpiar directorios.Se utiliza para regenerar el directorio de build/dist etc
#### `grunt-contrib-concat` concatena diferentes archivos. Muy util para unir varios javascript en uno solo
#### `grunt-injector` inyecta referencias en ficheros (js y css en html)
#### `grunt-contrib-watch` para colocar un escuchador a un proceso
#### `grunt-concurrent` para correr tareas costosas de forma concurrente  (alternativa grunt-parallel)


## 05-dev-helpers
### Añadidos helpers para desarrollo que n os facilitan la vida
#### `grunt-open` abre un navegador
#### `grunt-beep` para que cunado termine una tarea realice un pitido el ordenador util en procesos concurrentes  ej:  tasks: ['compass', 'beep:***']
####  `grunt-newer` para que compile sólo los archivos que se han tocado. Muy eficaz para incrementar la velocidad y no tenr que regenerar todo un directorio ej:  tasks: ['newer:jshint:all']
#### `grunt-notify` notificaciones de escritorio
#### `time-grunt`  muestra estadísticas de tiempo de las tareas grunt

## 06-servidores-preprocesadores
### Añadimos modulos que nos ayuden a compilar /  preprocesar
#### `grunt-contrib-compass` para compilar SASS con COMPASS
#### `grunt-handlebars` si utilizamos HANDLEBARS si fuera otro tedremos que buscar el módulo
#### `grunt-assemble` para layout del site
#### `grunt-contrib-connect` para arrancar un servidor

## 07-post-procesadores
### Añadimos modulos que nos realicen tareas en los archivos una vez compiladas nuestras fuentes
#### `grunt-postcss` realiza tareas de post CSS como añadir vendors (requiere autoprefixer) fallbacks etc
#### `grunt-contrib-cssmin` minifica css para su pase a dist

## 08-imagenes-svg
### Añadimos modulos que nos permitirán tratar las imágenes y los SVG
#### `grunt-webfont` para generar fuentes a partie de SVG NOTA: se instala con sudo y se psoblemente se necesite FontForge como motor de renderizado de la fuente
#### `grunt-svgstore` une SVG's en un único archivo (como un sprite de png)
#### `grunt-svgmin` minifica SVG
#### `grunt-tinypng` optimiza PNG
#### `grunt-responsive-images` crea varias imágenes de una única fuente según la resolución que queramos
#### `grunt-responsive-videos` crea varios vídeos de una única fuente según la resolución que queramos



