# Quiz 2

## 1. What do props help us accomplish?
Make a component more reusable.

## 2. How do you pass a prop into a component?
```
<MyAwesomeHeader title="???" />
```

## 3.  Can I pass a custom prop (e.g. ````isThat={true}````) to a native DOM element? (e.g. ```<div blahblahblah={true}>```) Why or why not?
No, because the JSX we use to describe native DOM elements will be turned into REAL DOM elements by React. And real DOM elements only have the properties/attributes specified in the HTML specification. (Which doesn't include properties like `blahblahblah`).

## 4. How do I receive props in a component?
```
function Navbar(props) {
    console.log(props.blahblahblah)
    return (
        <header>
            ...
        </header>
    )
}
```

## 5. What data type is `props` when the component receives it?
An object!