---
title: Dropdown manual with recursive method
author: Trent1900
date: 2023-8-6 10:02:00 +1000
categories: [dropdown manual, recursive component]
tags: [recursion, drop down]
---

### Creating a Recursive List Menu Any Number of Levels Deep

> In this example, we'll leverage `recursion` to build a menu that can have an unlimited number of nested levels. <!-- prettier-ignore -->
{:.prompt-info}

- And the result will looks like this:
- ![result](https://typeofnan.dev/dfde5d8cfef5dd13108a3a1010f5ed38/menu.gif)

<p> Before diving into the task at hand, it is essential to establish the data type we are working with. Think about a scenario where we aim to display an image using a URL stored within the data. Without prior knowledge of the data structure, attempting to achieve this task would be impossible. Therefore, defining the data type is a fundamental prerequisite.</p>
- this is to say that: generics in ts does not help with this case that much.
for data looks like :

```json
 const items = [
    {
      title: "Item 1",
      subItem: [
        {
          title: "Item 1.1",
          subItem: [
            {
              title: "Item 1.1.1",
            },
          ],
        },
        {
          title: "Item 1.2",
        },
      ],
    },
  ];
```

- the type should be :

```ts
interface SubItem {
  title: string;
  subItem?: SubItem[];
}
```

```tsx
interface DropdownListProps<T> {
  items: T[];
}

const DropdownItem = ({ item }: DropdownItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ cursor: "pointer" }}
    >
      {item.title}
      {Array.isArray(item?.subItem) && isOpen && (
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "90px",
            width: "90px",
          }}
        >
          {item.subItem.map((childItem) => (
            <DropdownItem key={childItem.title} item={childItem} />
          ))}
        </div>
      )}
    </div>
  );
};

function DropdownList<T extends SubItem>({ items }: DropdownListProps<T>) {
  return (
    <div>
      {items.map((item) => (
        <DropdownItem key={item.title} item={item} />
      ))}
    </div>
  );
}
export default DropdownList;
```

- in the code, we will check the type of `item.subItem` with `Array.isArray(item?.subItem)`, if it is an array, we will proceed the recursion function ` {item.subItem.map((childItem) => (
  <DropdownItem key={childItem.title} item={childItem} />
))}`.

- that is how to implement the recursion method to create an dropdown list.
- further improvement(TODOS:): considering `accessibility` and `keyboard events`
