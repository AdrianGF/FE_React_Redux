# ![React + Redux Example App](project-logo.png)

# FE_React/Redux APP

Aplicación hecha para testear parte del potencial de React-Redux, con ejemplos comunes de una Web actual "listado de productos, usuarios..." y ver el flujo de la aplicación entre otros.

## Aquello visto en este proyecto

### **Primeros pasos**

Los priemeros pasos fueron hacer un clone de Thinkster:

* [react-redux-realworld-example-app](https://github.com/gothinkster/react-redux-realworld-example-app) 

E iniciar con los siguientes comandos:

```
npm install
```

```
npm start
```

<hr>

### **Código de React-Redux** (:3001)

Mi primer contacto fué crear un "List - Details" utilizando el "Agent" para enviar la petición al servidor (En este caso con DJango, Postgres & Redis con un docker compose) y así recibir datos e imprimirlos como una lista en la aplicación.

*El listado de "productos" también cuenta con una barra dinámica de porcentaje, favoritos con un usuario con la sesión iniciada y con un "link" hacia los detalles del producto seleccionado.*

* Los detalles del producto están hechos con un "slug" propio del producto.

* Los favoritos los procesa mandando una petición "post/delete" al servidor junto a su "slug".

* Un registro y login de usuarios algo modificado.

* Un "Settings" donde poder cambiar tus datos personales al iniciar sesión.

* Mejoras varias con los ciclos de vida de react...

<hr>

### **Datos sobre el Backend**(:8000)

Como ya he dicho anteriormente está con DJango, al cual le he añadido algunas mejoras, como la creación aleatoria de un "slug" a cada producto, y arreglar también algunos fallos "^^.

La creación de tests, y rutas a partir de "/api/"...

Las "apps" del backend usadas:
* authentication
* core
* profiles
* projects "mis productos"

Link al git del servidor:

* [BE_Django_Postgres](https://github.com/AdrianGF/BE_Django_Postgres)

<hr />

[![Brought to you by Thinkster](https://raw.githubusercontent.com/gothinkster/realworld/master/media/end.png)](https://thinkster.io)
