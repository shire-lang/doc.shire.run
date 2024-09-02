# Language Specification

See in [ShireParser.bnf] for latest version.

## Hobbit Hole Design

### Normal type

Example:

```yaml
---
key: "value"
---
```

All

| ValueType  | Description                  |
|------------|------------------------------|
| String     | "value"                      |
| IDENTIFIER | enum key in Shire soure code |
| Number     | 123                          |
| Boolean    | true                         |
| Array      | [1, 2, 3]                    |
| Object     | {key: "value"}               |

### Function Type

Example:

```yaml
---
when:  { $selection.length() >= 0 }
---
```

All

| ValueType            | Description                       | Example                                                                     |
|----------------------|-----------------------------------|-----------------------------------------------------------------------------|
| Pattern Action       | /regex/ { functionBlock }         | /.*.java/ { $selection.length() >= 0 }                                      |
| Function             | { functionBlock }                 | { $selection.length() >= 0 }                                                |
| Ast Query Expression | use `from`, `select`, `where`,    | see in `Ast Query Expression`                                               |
| Case Block           | case "variable" { functionBlock } | case "$0" { default  { grep("ERROR")   \| sort \| xargs("notify_admin") } } |
| Flags Block          | flags { flagBlock }               | flags { "ignore": { } }                                                     |

#### Ast Query Expression

```yaml
---
variables:
  "allController": {
    from {
        PsiClass clazz // the class
    }
    where {
        clazz.extends("org.springframework.web.bind.annotation.RestController") and clazz.getAnAnnotation() == "org.springframework.web.bind.annotation.RequestMapping"
    }

    select {
        clazz.id, clazz.name, "code"
    }
  }
---
```
