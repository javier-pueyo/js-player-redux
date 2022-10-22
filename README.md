# Let's play!

Bienvenidos al hackathon. Aqui vamos a detallar información que les puede ser util

## Enlaces utiles

[Create React App](https://github.com/facebook/create-react-app)\
[React](https://reactjs.org/)\
[Redux](https://redux.js.org/)\
[Redux Toolkit](https://redux-toolkit.js.org/)\
[React Router](https://reactrouter.com/)

## Scripts

Para iniciar la app:

### `npm start`

Abre la pagina en [http://localhost:3000](http://localhost:3000)

### `npm test`

Ejecuta los tests. \
Si lo necesitan, hay mas información en [Ejecutando tests](https://facebook.github.io/create-react-app/docs/running-tests)

### `npm run build`

Construye la aplicación para producción. Importante comprobar que nuestro sitio construye correctamente antes de entregar el proyecto. Si hay algun problema, el terminal nos dará información

---

## `Contenido del proyecto`

### Rutas configuradas

- #### `/Login`
Se usa para abrir el modal de login de spotify y realizar el intercambio de oauth

- #### `/callback`
Se usa desde el modal de autenticación, para guardar los tokens de la autenticación

- #### `/player`
Aqui dentro se encuentran los componentes del reproductor

- - ##### `/player/songs`
Lista de canciones favoritas

- - ##### `/player/albums`
Lista de albums favoritos

- - ##### `/player/playlists`
Lista de playlists favoritas

### Archivos y carpetas importantes del proyecto

#### `App.js`
Nuestro primer y principal componente. Contiene algunas rutas y los controles de la sesión

#### `/app`
Inicialización del store de redux y gestion de tokens de sesión

#### `/features`
Componentes de la aplicación
Dentro de features encontramos:
#### `/features/login y /features/callbackHandler`
No se preocupen por estos. Se utilizan para la autenticación

#### `/features/player`
Componente base del reproductor\
Dentro de esta carpeta, se encuentran los componentes de nuestro reproductor:

#### `/features/player/topbar`
La barra superior

#### `/features/player/navigationBar`
El menu de navegación

#### `/features/player/mainPanel`
Aqui se encuentran los componentes que componen nuestra funcionalidad principal:

#### `/features/player/mainPanel/albums`
Mis albums favoritos

#### `/spotify`
Llamadas a api y reducers para almacenar los datos de esas llamadas


---
## Spotify

- Documentacion de APIs de spotify: https://developer.spotify.com/documentation/web-api/reference/#/

---

## Aclaraciones e información para implementar el reproductor de sonido
- Cada cancion ('track' en las APIs), tiene un campo **preview_url** con una URL. Este es el que debemos usar para enviar al reproductor.
- Documentación con eventos y metodos del tag audio https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement
  - Pista: hay una opcion autoplay que puede simplicarles la implementación


---
## Información complementaria

- Por simplicidad, no esta implementado el refresh de los tokens de la sesion de spotify. Si el token expira, se mostrara el modal, se generan nuevos tokens y se hara un refresh automaticamente sin que haga falta hacer login manualmente.
- El modo estricto de React 18 esta desactivado. Se pueden reactivar si lo desean en el archivo index.js, quitando los comentario. Solo tengan en cuenta que van a tener un doble renderizado de todo, y en muchos casos el doble de logs.
- La sintaxis de los modulos css es el estandar de css, solo que estan acotados al componente que los importa. Pueden ver ejemplo de como se importa desde el componente **Player.jsx** y su correspondiente **Player.module.css**
  - Si por alguna razon se bloquean con esto, pueden usar el index.css en **/src**


