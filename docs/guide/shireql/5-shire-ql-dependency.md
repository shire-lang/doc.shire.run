# ShireQL Dependency Query (TBC)

## Maven 示例

```shire
---
variables:
  "mavenDependencies": {
    from {
        ProjectDependency dependency
    }
    where {
        dependency.groupId == "org.springframework.boot" and dependency.artifactId == "spring-boot-starter-web"
    }
    select {
        dependency.groupId, dependency.artifactId, dependency.version
    }
  }
---
```
