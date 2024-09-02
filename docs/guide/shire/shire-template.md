# Shire Command & Template

## Shire Template

We use velocity template to generate code. Here is a simple example:

    Refactor code:
    
    ```${context.language}
    ${context.selection}
    ```

## Shire Commands

- `/file`: read file content, format: `/file:<file-path>`, example: `/file:src/main/java/com/example/Controller.java`.
- `/write`: write file content, format: `file#L1-L12`, example: `src/main/java/com/example/Controller.java#L1-L12`
- `/rev`: read git change by git revision.
- `/run`: run code, especially for test file, which is the best way to run code.
- `/patch`: apply patches to file.
- `/commit`: commit changes to git
- `/symbol`: get child by symbol, like get Class by package name, format: `java.lang.String#length`,
  example: `<package>.<class>#<method>`
- `/shell`: run shell command or shell script, like `ls`, `pwd`, etc.
- `/browse`: browse web page, like `https://ide.unitmesh.cc`
- `/refactor`: refactor code, like `rename`, `delete`, `move` etc.

### File Command

we keep "/" as `File.separator` for macOS, Windows and Unix.

Read file content:

```yaml
Explain code /file:src/main/java/com/example/Controller.java
```

will call LLM to handle it.

### Write Command

write content to file:

    /write:src/main/java/com/example/Controller.java#L1-L12
    ```java
    public class Controller {
        public void method() {
            System.out.println("Hello, World!");
        }
    }
    ```

### Rev Command

Read git change by git revision:

```yaml
Explain code /rev:HEAD~1
```

will call LLM to handle it.

### Run Command

Run file:

```yaml
/run:src/main/java/com/example/Controller.java
```

PS: current only support for TestFile, since UnitTest is the best way to run code.

### Symbol Command

Get child elements by symbol, like get Class by package name.

```yaml
/symbol:com.phodal.shire.demo
```

The output will be:

    ```java
    com.phodal.shire.demo.MathHelper
    com.phodal.shire.demo.DemoApplication
    com.phodal.shire.demo.MathHelperTest
    com.phodal.shire.demo.DemoApplicationTests
    ```

Get method will return code:

```yaml
/symbol:com.phodal.shire.demo.MathHelper.calculateInsurance
```

The output will be:

    ```java
    public static double calculateInsurance(double income) {
        if (income <= 10000) {
            return income * 0.365;
        } else {
            return income * 0.365 + 1000;
        }
    }
    ```

### Browse Command

Browse web page:

```yaml
/browse:https://ide.unitmesh.cc
```

It will be text inside the body from web page.

### Refactor Command

Refactor code:

```yaml
/refactor:rename /symbol:com.phodal.shire.demo.MathHelper.calculateInsurance to calculateInsuranceTax
```

It will be handled in local.
