---
layout: page
title: Blazescript
description: Compilers are software tools that translate source code written in a high-level language into a lower-level representation, typically machine code, that a computer can execute directly.
importance: 2
---

---

| Project Domains                    | Mentors        |
|------------------------------------|----------------|
| Compilers, Programming Languages   | Ved, Mustafa   |

---

### Project Description

Compilers are software tools that translate source code written in a high-level language into a lower-level representation, typically machine code, that a computer can execute directly.

In this project, you will design the syntax of our own programming language and build a compiler for it from scratch, motivated by the idea that a compiled, statically-analyzed language can offer real advantages over JavaScript for certain workloads on the web. While modern JavaScript engines do use just-in-time (JIT) compilation rather than pure interpretation, they still carry the overhead of dynamic typing, runtime type checks, and unpredictable warm-up and deoptimization behavior. A language that is compiled ahead of time, by contrast, can be analyzed and optimized fully before it ever runs, producing more predictable, near-native performance, which makes it well suited to computationally intensive, domain-specific workflows running in the browser.

To build this, you will write a handwritten lexer and parser to form the compiler's front end, responsible for tokenizing and parsing source code into an intermediate representation. From there, the project will use the LLVM compiler infrastructure to perform optimizations and handle the backend, ultimately compiling down to WebAssembly, a portable, low-level bytecode format that browsers can execute at near-native speed within a secure, sandboxed environment.

---

### Resources

[LLVM Kaleidoscope](https://llvm.org/docs/tutorial/MyFirstLanguageFrontend/LangImpl01.html)<br>
[Crafting Interpreters](https://craftinginterpreters.com/)<br>

---
