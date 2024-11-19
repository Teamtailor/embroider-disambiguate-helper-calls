# Helpers disambiguation in Embroider

A minimal repro for the issue of helpers breaking when called in the unambiguous way:

`{{(translate)}}`

It turns out that no matter what kind of helper you have (class-based, functional or plain-function), they all break when called as above.

**What matters is that `staticHelpers` be set to `false` in the config.**

If it is, it breaks with the following:

```
Uncaught TypeError: func is not a function
    at Compilers.compile (opcode-compiler.js:417:1)
    at expr (opcode-compiler.js:587:1)
    at opcode-compiler.js:1799:1
    at SwitchCases (opcode-compiler.js:943:1)
    at opcode-compiler.js:1798:1
    at Compilers.compile (opcode-compiler.js:417:1)
    at compileStatements (opcode-compiler.js:2070:1)
    at maybeCompile (opcode-compiler.js:2049:1)
    at CompilableTemplateImpl.compile (opcode-compiler.js:2032:1)
    at Object.evaluate (runtime.js:2973:1)
```

If the `staticHelpers` is set to `true`, it works fine.
