# Person Demo — Design Spec

**Date:** 2026-08-01
**Status:** Approved (pending user review)

## Goal

Create a single-file C++ demo program that defines a `Person` type with simple
demo data (name, age, height) and a set of safe methods for creating,
inspecting, and modifying `Person` objects.

## Language Choice

C++ (user changed from C) for safety: `std::string` handles string memory
automatically, and the class provides encapsulation and validation at the
setter level.

## File

- `main.cpp` — single self-contained file.
- Build: `g++ -std=c++17 -Wall -Wextra main.cpp -o main`

## Data Model

`struct Person` with:

| Field    | Type          | Notes                                  |
|----------|---------------|----------------------------------------|
| `name`   | `std::string` | Automatic memory management            |
| `age`    | `int`         | Validated: must be >= 0                |
| `height` | `double`      | Validated: must be >= 0                |

## Methods

- **Constructor** `Person(name, age, height)` with default arguments so
  `Person()` also works (empty name, age 0, height 0).
- **Getters:** `getName()`, `getAge()`, `getHeight()` — all `const`, return by value.
- **Setters** with validation:
  - `setName(name)` — ignores empty strings.
  - `setAge(age)` — ignores negative ages.
  - `setHeight(height)` — ignores negative heights.
- `celebrateBirthday()` — increments age by 1.
- `print()` — prints a formatted one-line summary using `std::cout`.

## Demo (`main()`)

1. Create a `Person` with initial values.
2. Print it.
3. Exercise setters (including invalid values to show validation).
4. Celebrate a birthday.
5. Print again.
6. Destroy nothing explicitly — RAII cleans up on scope exit.

## Error Handling

- No manual memory management needed (`std::string`, stack allocation).
- Invalid setter inputs are silently ignored; demo prints enough to show this.

## Testing / Validation

- Compile with `-Wall -Wextra` (no warnings).
- Run the binary and confirm the output matches expected demo flow.
