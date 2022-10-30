function linkedList() {
    let headNode = null;
    function append(value) {
        if (headNode === null) {
            headNode = node(value, null);
            return;
        }
        let current = headNode;
        while (current.next !== null) {
            current = current.next;
        }
        const obj = node(value, null);
        current.next = obj;
    }

    function at(index) {
        if (index < 1) return headNode.value;
        let current = headNode;
        let position = 0;
        while (position < index) {
            position++;
            current = current.next;
            if (current === null) return null;
        }
        return current.value;
    }

    function contains(value) {
        let current = headNode;
        let bool = false;
        while (bool === false) {
            if (current.value === value) {
                // console.log(4);
                return true;
            }
            current = current.next;
            if (current === null) {
                return false;
            }
        }
    }

    function find(value) {
        let current = headNode;
        let index = 0;
        while (current.value !== value) {
            current = current.next;
            index++;
            if (current === null) {
                return null;
            }
        }
        return index;
    }

    function head() {
        return headNode.value;
    }

    function insertAt(value, index) {
        if (typeof index !== 'number') return;
        if (index < 1) {
            const obj = node(value, headNode);
            headNode = obj;
            return;
        }
        let current = headNode;
        let position = 1;
        while (position < index) {
            current = current.next;
            position++;
            if (current.next === null) break;
        }
        const obj = node(value, current.next);
        current.next = obj;
    }

    function propend(value) {
        headNode = node(value, headNode);
    }

    function pop() {
        let current = headNode;
        if (current === null) return;
        if (current.next === null) {
            headNode = null;
            return;
        }
        let prev;
        while (current.next !== null) {
            prev = current;
            current = current.next;
        }
        prev.next = null;
    }

    function removeAt(index) {
        if (index < 1) {
            headNode = headNode.next;
        }
        let current = headNode;
        let position = 1;
        while (position < index) {
            current = current.next;
            position++;
        }
        current.next = current.next.next;
        return;
    }

    function size() {
        let current = headNode;
        let i = 0;
        if (current !== null) {
            i++;
        } else {
            return i;
        }
        while (current.next !== null) {
            i++;
            current = current.next;
        }
        return i;
    }

    function tail() {
        let current = headNode;
        while (current.next !== null) {
            current = current.next;
        }
        return current.value;
    }

    function toString() {
        let string = "";
        let current = headNode;
        while (current !== null) {
            string = string.concat('', `( ${current.value} ) -> `);
            current = current.next;
        }
        string = string.concat('', null);
        return string;
    }

    return { append, at, contains, find, head, insertAt, pop, propend, removeAt, size, tail, toString }
}

function node(value, next) {
    return {
        value,
        next
    }
}

const a = linkedList();
console.log(a);
console.log(a.toString());
a.append(5);
console.log(a.toString());
a.append(8);
a.propend(43);
console.log(a.toString());
console.log(a.size());
console.log(a.head());
console.log(a.tail());
console.log(a.at(5));
console.log(a.toString());
console.log(a.find(5));
a.insertAt(13, -7);
a.removeAt(1);
console.log(a.toString());


export default linkedList;