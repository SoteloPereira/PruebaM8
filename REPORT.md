# Reporte de Implementación

## 1. Configuración inicial del repositorio
- Inicialicé el repositorio Git y realicé un commit con el archivo `db.json`.
- Configuré el repositorio remoto en GitHub y subí el código.

## 2. Configuración básica de la API
- Utilicé `json-server` para servir los datos de `db.json` como una API local.
- Verifiqué que la API responde correctamente en `http://localhost:3000/users`.

## 3. Automatización con Jenkins
- Configuré un pipeline en Jenkins usando un `Jenkinsfile` que:
  - Clona el repositorio.
  - Instala las dependencias con `npm install`.
  - Inicia el servidor para validar la respuesta de la API.

## 4. Ejecución de pruebas automatizadas
- Configuré el pipeline para ejecutar las pruebas automáticas con `npm test`.
- El pipeline fallará si alguna prueba no pasa.

## 5. Reporte de resultados
- Configuré Jenkins para generar un reporte de pruebas en formato JUnit.
- El reporte se publica automáticamente al finalizar el pipeline.

## Problemas encontrados
- (Aquí puedes escribir cualquier problema que encontraste durante la implementación).
