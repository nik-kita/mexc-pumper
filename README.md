# Types
* file-naming: *.type.ts `example.type.ts`
* in code: T*: `type TExample = 'example'`
* Complete general types should be in upper-dashes case, especially if they contains child types: `type T_EXAMPLE = { child: TChild }`
> Types may be not only tsc type, but also constants or classes if they are used like type
