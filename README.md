```
yarn # Install dependencies
yarn test # Run tests
```

With `jest@24`:

```
 PASS  ./index.test.js
  repros
    ✓ First (7ms)
    ✓ Second (4ms)
```

With `jest@25`, `jest@26` and `jest@next`:

```
 FAIL  ./index.test.js
  repros
    ✓ First (5 ms)
    ✕ Second (7 ms)

  ● repros › Second

    expect(received).toBe(expected) // Object.is equality

    Expected: "Second"
    Received: "First"

      16 |
      17 |     test('Second', () => {
    > 18 |         expect(method('Second')).toBe('Second');
         |                                  ^
      19 |     });
      20 | });
      21 |

      at Object.<anonymous> (index.test.js:18:34)
```
