[Notion-Notes](https://www.notion.so/Set-vs-Map-e40398e601b64892862fb7821bced05e)

## Set
所有的value都是唯一的，不會有重複的value

```js
const s = new Set([1,2,3,4,5,2,2,3,5]);
s // {1,2,3,4,5}
```

### 常用操作:

### add(value)
添加某个值，返回Set結構本身。
可以使用add(key)方法可以添加元素到Set中

```js
const obj = {
  foo: 'bar',
};

const mySet = new Set();
mySet.add(1); // [1]
mySet.add(5); // [1, 5]
mySet.add(obj); // [ 1, 5, { foo: 'bar' } ]
```

### delete(value)
删除某个值，返回一个布尔值，表示删除是否成功。

```js
const mySet = new Set([5]);
mySet.delete(5); // true，刪除成功
mySet.delete(2); // false，刪除失敗
```

### has(value)
返回一个布尔值，表示该值是否为Set的成员。

```js
const mySet = new Set([5]);
mySet.has(5) // true
```

### clear()
清除所有成员，没有返回值。

```js
mySet.clear();
```

## Map
它类似于Object，也是key value的集合，但是"key"的范围不限于字符串，各种类型的值（包括对象）都可以当作键

### 特性:
1. Map 裡面的 key 是唯一的，如果 set 到重複的 key，則舊的 value 會被覆蓋。
2. Map 中的 keys 會根據被添加資料的時間而有順序性，但 Object 沒有順序性。
3. Object 的鍵（key）只能是 字串（Strings）或 Symbols，而 Map 的鍵可以是任何值，包含物件、函式或原始型別（primitive type）。
4. 若要取得 Map 的大小非常容易，只需要取得 size 屬性即可；而 Object 的大小必須手動決定。

### 常用操作:

### set(key，val)
添加某个值，返回Map结构本身。

```js
let myMap = new Map([
  [1, 'one'],
  [2, 'two'],
]);
myMap(1, 'three')
myMap // {1 => 'three, 2 => 'two'}
```

### get(key)
读取某个键，如果该键未知，则返回undefined
```js
let myMap = new Map([
  [1, 'one'],
  [2, 'two'],
]);
myMap.get(1) // 'one'
```

### delete(key)
删除某个键，返回一个布尔值，表示删除是否成功。

```js
let myMap = new Map([
  [1, 'one'],
  [2, 'two'],
]);
myMap.delete(2) // {1 => 'one'}
```

### has(key)
返回一个布尔值，表示该值是否为Map的键。

```js
let myMap = new Map([
  [1, 'one'],
  [2, 'two'],
]);

myMap.has(1) //true
myMap.has(3) //false
```

### size
查看Map大小

```js
let myMap = new Map([
  [1, 'one'],
  [2, 'two'],
]);
myMap.size // 2
```

### clear()
清除所有成员，没有返回值。

```js
myMap.clear()
```
       
## 結論:
ES6 中如果希望「陣列（Array）」的元素不會重複，可以使用 Set；如果是希望物件（Object）的鍵不會重複，則可以使用 Map。

[IT邦幫忙](https://ithelp.ithome.com.tw/articles/10243277)