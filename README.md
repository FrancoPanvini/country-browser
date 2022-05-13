# Desafío para Software Engineers

- Nombre postulante: Franco Panvini
- Link a la app en producción: [Country browser](https://kimchechallenge-iid2s36lc-francopanvini.vercel.app/)

## Pregunta abierta
"La tabla que contiene la información correspondiente a la asistencia diaria de un niño en un colegio tiene 90 millones de filas. Todas las tablas del sistema existen en la misma BDD en MySQL. La lógica del backend que actualiza la información correspondiente al pasar la asistencia tiene un tiempo de servicio p95 de 10 segundos. El equipo está interesado en bajar este tiempo para mejorar la experiencia del usuario (y porque nos gusta pensar en Kimche como un Ferrari). ¿Qué propondrías para enfrentar el problema? Esta pregunta es abierta, no hay respuestas malas. Puedes proponer arquitectura, tecnologías, diseño, etc."

Para lograr disminuir el tiempo de servicio existen varios puntos sobre los que sería posible trabajar. Dependiendo el caso puede ser conveniente trabajar primero en uno o en otro. 

- Optimizar la DB evaluando si tiene una estructura correcta normalizada. Si es posible indexar la misma y particionar las tablas para logar una estrutura tipo HashTable . Considerar la posibilidad de almecenar cierta data con otra estuctura por ejemplo orientado a grafos,etc.
- Revisar las lógicas de las queries, para controlar que no exista código innecesario o que la lógica tenga en cuenta la performance. Evaluar que no exista overfetching, que solicite data no necesaria en este punto o underfethcing que obligue a utilizar 2 queries distintas.
- Utilizar caché cada vez que se pueda. Para esto se pueden utilizar otras tenologías como Redis
- Considerar la posibilidad de reetructurar el servidor a una estructura tipo GraphQL, de modo de permitir que los clientes brinden y consulten exclusivamente la información necesitada para el request necesario-
- Evaluar que el servicio de hosting sea el indicado

Seguramente existan más alternativas, éstas son solo algunas.


## Instrucciones

Debes crear un buscador de países consultando el [siguiente grafo](https://countries.trevorblades.com/). Este código contiene una base para seguir con la aplicación en React y ApolloClient. Queda a disposición tuya cualquier cambio, ya sea de estructura, estilo, etc.

Se espera que logres hacer una aplicación parecida a la del siguiente diagrama:

![image1](imgs/1.png)
![image2](imgs/2.png)

La funcionalidad y estructura debe ser igual, pero el diseño y variantes (por ejemplo, cambiar colores de las cosas) queda a tu gusto. **Considerar que el ícono al lado del nombre de cada país es el emoji**.

Además de esto, se espera que hagas deploy de tu app en el servicio que desees (Heroku, Netlify, AWS, Github Pages, etc).

## Consideraciones

- Se espera que uses buenas prácticas como gitflow (pull requests y commits), orden del código, estructura, eficiencia, etc.
- Puedes dejar comentarios de decisiones que tuviste que tomar y del por qué en este repositorio.
- Se va a considerar un buen diseño de UX/UI.

## Hints

Acá van algunas cosas que pueden ser útiles (o no 👀):

- [Gitignore](https://www.toptal.com/developers/gitignore)
- [GraphQL](https://www.howtographql.com/)
- [React](https://es.reactjs.org/)
- [Styled components](https://styled-components.com/docs/basics)
- [ApolloClient](https://www.apollographql.com/docs/react/)
- [Lodash](https://lodash.com/)
- [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
- [Commitlint](https://commitlint.js.org/#/)
- [Eslint](https://eslint.org/)
- [Eslint airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
- [Husky](https://www.npmjs.com/package/husky)
