# Cencosud API Test

# Links

| Plataforma | Links |
| ------ | ------ |
| GitHub | https://github.com/CaritoDasilva/cenco_api_test |
| Deploy | https://glacial-journey-74952.herokuapp.com/api/credits/users/api/credits/users |
| Portafolio | https://www.caritodasilva.work/ |

# API Documentation:
  - /api/credits/users => Trae todos los usuarios
  - /api/credits/stores => Muestra todas las tiendas con sus respectivos créditos
  - /api/credits/stores/:store => Muestra el saldo de una tienda en particular, realiza la búsqueda por nombre
- /api/credits/user  => Modifica los creditos de un usuario. Se envía el siguiente body:
>       
        {
            "id": string,
            "isDiscount": boolean,
            "creditToUpdate":
            {
                "store": string,
                "amount": number
            }
        }
- /api/credits/users/:id => Muestra el crédito de un usuario específico por ID
- /api/credits/new => Crea un nuevo usuario. Se envía el siguiente body:
>    
    {
        "email": string,    
        "credit": [
            {
                "store": string,
                "amount": number
            },
        ]
    }

## Implementación

> Se construyó una api que permite actualizar los créditos de los usuarios, ya sea que se quiera agregar o descontar saldo. También permite consultar los créditos que posee una tienda en particular, así como el de todas las tiendas.
> Se implementó la solución con una base de datos no relacional pero dependiendo del tamaño de negocio y las posibles relaciones y alcances se pudiese tomar una decisión distinta.
> También se hizo una configuración inicial de a medición del coverage para un futuro desarrollo de test unitarios.
> Por último mencionar que se pudiese realizar el front end con React/NextJS, para que puedan ingresar los datos los usuarios.
>Se utilizo una arquitectura MVC para la estructura del proyecto, dejando el manejo de la lógica del negocio en la capa de servicios.


### Instalación

Instalación de dependencias
```sh
$ npm install
```

Para correr el proyecto

```sh
$ node server.js
```

Para ver el coverage

```sh
$ node run test:coverage
```


