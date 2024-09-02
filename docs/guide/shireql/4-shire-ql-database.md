# ShireQL Database Query

## Variable 方式

支持的 variables 或者 function

- table()
- columns()

## ShireQL 示例

```yaml
---
variables:
  "tables": {
    from {
        DBTable table
    }
    where {
        table.name == "public"
    }
    select {
        table.name, table.columns
    }
  }
---
```

