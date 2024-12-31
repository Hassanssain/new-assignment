let items = [];

// Function to add an item to the list
function add(item) {
    if (!items.includes(item)) {
        items.push(item);
    }
}

// Function to remove an item from the list
function remove(item) {
    const index = items.indexOf(item);
    if (index !== -1) {
        items.splice(index, 1);
    }
}

// Function to get the last character of a string
function lastChar(str) {
    if (str.length === 0) return null; // Handle empty string case
    return str[str.length - 1];
}

// Function to reverse a string
function reverse(str) {
    return str.split('').reverse().join('');
}

// Example usage
add('apples');
add('bananas');
console.log(items); // Output: ['apples', 'bananas']

remove('apples');
console.log(items); // Output: ['bananas']

console.log(lastChar('JavaScript')); // Output: 't'
console.log(reverse('JavaScript')); // Output: 'tpircSavaJ'
console.log(reverse(reverse('JavaScript'))); // Output: 'JavaScript'

