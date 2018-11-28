## Refactoring with Suspense

Our app is still a List-Detail view

- Detail controls data loading
- List has no knowledge of children state
- Siblings appear together (CONCURRENT)

Result:

- ✅ one 🌀
- ✅ unless data is cached/loads under maxDuration
- ✅ Only shows when all loaded, no jumps
