[Notion-Notes](https://www.notion.so/Linked-List-c3db70c5344640838e1cd879844625ad)

# Linked-List

是種一個串著一個的資料結構

![https://miro.medium.com/max/1400/1*t6vTXBXSOsXP_e-DRI0jiQ.png](https://miro.medium.com/max/1400/1*t6vTXBXSOsXP_e-DRI0jiQ.png)

## Linked-List 特性

1. Linked-List 只會知道自己的值跟下一個指向的 Node
2. 如果為最後一個 Node ，next 會指向 null

```jsx
function Node(val = null, next = null) {
  this.val = val;
  this.next = next;
};

const nodeA = new Node('A');
const nodeB = new Node('B');
const nodeC = new Node('C');

nodeA.next = nodeB;
nodeB.next = nodeC;

// A -> B -> C
```

## 單向Linked-List (Singly Linked-List)

### 讀取 Node

取得 Linked-List 長度

```jsx
var getLinkedListLength = function(head) {
	let num = 0
	while(head.next !== null){
		head = head.next
		num + 1
	}
}

getLinkedListLength([1, 2, 3, 4, 5])
```

### ****增加 Node****

- ****增加新的 Node 到 Linked List 的最前面****

![https://miro.medium.com/max/1400/1*78vHN8uhejxbSyhChWEwCA.png](https://miro.medium.com/max/1400/1*78vHN8uhejxbSyhChWEwCA.png)

```jsx
// head = A->B->C, newValue = D
const addNodeToFront = (head, newValue) => {
  const newNode = new Node(newValue);
  newNode.next = head;
  
  /* Node 的第二個參數就是 next，所以也可以直接寫成：
    const newNode = new Node(value, head);
  */

  return newNode;
}
```

- ****增加新的 Node 插到 Linked List 中****

![https://miro.medium.com/max/1400/1*2y6JBVZnVADui0DKpKJO9w.png](https://miro.medium.com/max/1400/1*2y6JBVZnVADui0DKpKJO9w.png)

```jsx
// head = A->B->C, targetIndex = 1, newValue = D
const addNodeToLinkedList = (head, targetIndex, newValue) => {
  let dummyHead = new Node(null);
  dummyHead.next = head;

  let prevNode = dummyHead;
  let currentIndex = 0;
  while (currentIndex <= targetIndex && head !== null) {
    if (currentIndex === targetIndex) {
      const newNode = new Node(newValue);
      prevNode.next = newNode;
      newNode.next = head;
    }
    prevNode = head;
    head = head.next;
    currentIndex += 1;
  };
  
  return dummyHead.next;
};
```

- ****增加新的 Node 插到 Linked List 的尾端****

![https://miro.medium.com/max/1400/1*s-alZwPL54vBmtkBZ1h85Q.png](https://miro.medium.com/max/1400/1*s-alZwPL54vBmtkBZ1h85Q.png)

```jsx
// head = A->B->C, newValue = D
const addNodeToBack = (head, newValue) => {
  const dummyHead = new Node(null);
  dummyHead.next = head;
  
  while (head.next !== null) {
    head = head.next;
  }
  
  const newNode = new Node(newValue);
  head.next = newNode;
  
  return dummyHead.next;
};
```

### 刪除 Node

- ****將 Linked List 最前面的 Node 移除****

![https://miro.medium.com/max/1398/1*YJDHBGAGo-CfNvTwha_jjA.png](https://miro.medium.com/max/1398/1*YJDHBGAGo-CfNvTwha_jjA.png)

```jsx
// head = a->b->c
const removeFrontNode = (head) => {
  return head.next;
};
```

- ****移除 Linked List 中的 Node****

![https://miro.medium.com/max/1400/1*xZrUhksfsyQrZuF65OFqZg.png](https://miro.medium.com/max/1400/1*xZrUhksfsyQrZuF65OFqZg.png)

```jsx
// head = a->b->c, targetIndex = 1
const removeNode = (head, targetIndex) => {
  let dummyHead = new Node(null);
  dummyHead.next = head;

  let prev = dummyHead;
  let currentIndex = 0;
  while (currentIndex <= targetIndex) {
    if (currentIndex === targetIndex) {
      prev.next = head.next;
    }
    prev = head;
    head = head.next;
    currentIndex += 1;
  }
  
  return dummyHead.next;
};
```

- ****移除 Linked List 最後一個 Node****

![https://miro.medium.com/max/1400/1*czqywsB4JMcwXElfZsau2g.png](https://miro.medium.com/max/1400/1*czqywsB4JMcwXElfZsau2g.png)

```jsx
// head = a->b->c
const removeBackNode = (head) => {
  if (head.next === null) return null;

  let dummyHead = new Node(null);
  dummyHead.next = head;  

  while (head.next.next !== null) {
    head = head.next;
  }
  head.next = null;
  
  return dummyHead.next;
};
```

## 雙向Linked-List (**Doubly Linked List**)

跟 單向 Linked-List 最大的不同就是他多了一個 prev 的屬性，記錄著前一個指向的 Node

## Linked-List vs Array

|  | Linked-List | Array |
| --- | --- | --- |
| search | O(n) | O(1) → have index |
| create | O(1) | O(n) |
| delete | O(1) | O(n) |
| 儲存所需空間 | 較大(值, next node) | 較小 |

https://medium.com/starbugs/%E4%BE%86%E5%BE%81%E6%9C%8D%E8%B3%87%E6%96%99%E7%B5%90%E6%A7%8B%E8%88%87%E6%BC%94%E7%AE%97%E6%B3%95%E5%90%A7-%E9%97%9C%E6%96%BC-linked-list-%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BB%8B%E7%B4%B9-feat-javascript-ff0ed89c326d

https://www.javaguides.net/2019/06/linkedlist-implementation-in-javascript.html

https://javascript.plainenglish.io/linked-list-implementation-in-javascript-ca0d3038f797

https://medium.com/@maggieliao.cm04g/%E8%B3%87%E7%B5%90%E8%88%87%E6%BC%94%E7%AE%97%E6%B3%95%E7%AD%86%E8%A8%98-1-linked-list-%E8%88%87-array-%E6%96%BCo-n-%E4%B9%8B%E5%B7%AE%E7%95%B0%E6%AF%94%E8%BC%83-badbf08b17ce