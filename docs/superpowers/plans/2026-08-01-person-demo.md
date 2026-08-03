# Person Demo Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a single self-contained `main.cpp` defining a `Person` struct with validated getters/setters and a demo in `main()`.

**Architecture:** One file. `struct Person` wraps `std::string name`, `int age`, `double height` with validation in setters (ignore invalid input). `main()` exercises every method so the run itself is the test.

**Tech Stack:** C++17, `g++`, standard library only (`<iostream>`, `<string>`).

## Global Constraints

- Build command: `g++ -std=c++17 -Wall -Wextra main.cpp -o main` (must produce zero warnings).
- Setters ignore invalid input: `setName("")` no-op, `setAge(<0)` no-op, `setHeight(<0)` no-op.
- No external dependencies; no manual memory management.
- Spec: `docs/superpowers/specs/2026-08-01-person-demo-design.md`

---

### Task 1: Create `main.cpp` with Person struct and demo

**Files:**
- Create: `main.cpp`
- Test: compile + run (see steps 2–3)

**Interfaces:**
- Consumes: nothing (standalone program)
- Produces: `struct Person` with `Person(name, age, height)` (all args defaulted), `getName()`, `getAge()`, `getHeight()` (all `const`, return by value), `setName()`, `setAge()`, `setHeight()` (validated), `celebrateBirthday()`, `print()`

- [ ] **Step 1: Write `main.cpp`**

```cpp
#include <iostream>
#include <string>

struct Person {
private:
    std::string name_;
    int age_;
    double height_;

public:
    // Constructor with defaults so Person() also works
    Person(std::string name = "", int age = 0, double height = 0.0)
        : name_(name), age_(age), height_(height) {}

    // Getters (const, by value)
    std::string getName() const { return name_; }
    int getAge() const { return age_; }
    double getHeight() const { return height_; }

    // Setters with validation: invalid input is silently ignored
    void setName(const std::string& name) {
        if (!name.empty()) name_ = name;
    }

    void setAge(int age) {
        if (age >= 0) age_ = age;
    }

    void setHeight(double height) {
        if (height >= 0.0) height_ = height;
    }

    void celebrateBirthday() { ++age_; }

    void print() const {
        std::cout << "Name: " << name_ << " | Age: " << age_
                  << " | Height: " << height_ << " m\n";
    }
};

int main() {
    Person alice("Alice", 30, 1.65);
    alice.print();

    // Exercise setters, including invalid values
    alice.setName("Alice Smith");
    alice.setName("");        // ignored (empty)
    alice.setAge(31);
    alice.setAge(-5);         // ignored (negative)
    alice.setHeight(1.66);
    alice.setHeight(-1.0);    // ignored (negative)
    alice.print();

    alice.celebrateBirthday();
    alice.print();

    Person defaultPerson;     // exercises default constructor
    defaultPerson.print();

    return 0;
}
```

- [ ] **Step 2: Compile with strict flags**

Run: `g++ -std=c++17 -Wall -Wextra main.cpp -o main`
Expected: success, zero warnings/errors.

- [ ] **Step 3: Run and verify output**

Run: `./main`
Expected output:

```
Name: Alice | Age: 30 | Height: 1.65 m
Name: Alice Smith | Age: 31 | Height: 1.66 m
Name: Alice Smith | Age: 32 | Height: 1.66 m
Name:  | Age: 0 | Height: 0 m
```

- [ ] **Step 4: Commit**

```bash
git add main.cpp
git commit -m "feat: add Person struct demo with validated getters/setters"
```

> Note: commits are skipped unless the user requests them.
