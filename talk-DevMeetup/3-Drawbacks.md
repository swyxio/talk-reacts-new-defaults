## Drawbacks

Our app is a classic List-Detail view

- Detail controls data loading
- List has no knowledge of children state
- Siblings have no knowledge of each other

Result:

- ❌ Will show three 🌀's
- ❌ Even if the data loads almost instantly
- ❌ UI may jump around based on loading
