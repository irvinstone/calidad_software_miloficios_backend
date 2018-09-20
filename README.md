# calidad_software_miloficios_backend
[![GitHub stars](https://img.shields.io/github/stars/irvinstone/calidad_software_miloficios_backend.svg?style=social)](https://github.com/irvinstone/calidad_software_miloficios_backend/stargazers)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/irvinstone/calidad_software_miloficios_backend.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Firvinstone%2Fcalidad_software_miloficios_backend)
[![GitHub downloads](https://img.shields.io/github/downloads/irvinstone/calidad_software_miloficios_backend/total.svg)](https://github.com/irvinstone/calidad_software_miloficios_backend)




## Información
Proyecto del curso de calidad de software, aplicación mil oficios lado backend.


## Instalacion de desarrollo
#### Requisitos
    Node 6.14.3
    Npm 3.10.10
    DBmaria 10
#### Frameworks
    * Express
    * Sequelize
#### Pasos
Clonar el proyecto
```
    $ git clone https://github.com/irvinstone/calidad_software_miloficios_backend
```
Ubicarse en el proyecto
```
    $ cd calidad_software_miloficios_backend
```
Instalar dependencias
```
    $ npm install
```
Instalar sequelize-cli

```
    $ npm install -g sequelize-cli
```

En el archivo orm/config/config.json configurar credenciales de acuerdo al ambiente
```
    {
      "development": {
        "username": "root",
        "password": "root",
        "database": "calidad_software",
        "host": "127.0.0.1",
        "dialect": "mysql",
        "charset": "utf8",
        "collate": "utf8_general_ci"

      },
      "test": {
        "username": "root",
        "password": null,
        "database": "database_test",
        "host": "127.0.0.1",
        "dialect": "mysql"
      },
      "production": {
        "username": "root",
        "password": null,
        "database": "database_production",
        "host": "127.0.0.1",
        "dialect": "mysql"
      }
    }
```
Instalar dependecias de desarrollo
```
    $ cd orm/
```
```
    $ sequelize db:create
```
Levantar el servidor local por defecto localhost:3000 , el siguiente comando mapeara y 
syncronizara las tablas en la bd preestablecida

```
    $ npm start
```

## License
    Open source
## providede By irvin leon
