let array = [];

// Function to add an item to the array
function addToArray() {
  const itemInput = document.getElementById('itemInput');
  const item = itemInput.value;
  array.push(item);
  itemInput.value = ''; // Clear the input field
  displayArray();
}

// Function to push an item to the array
function pushItem() {
  const itemInput = document.getElementById('itemInput');
  const item = itemInput.value;
  array.push(item);
  itemInput.value = ''; // Clear the input field
  displayArray();
}

// Function to pop an item from the array
function popItem() {
  array.pop();
  displayArray();
}

// Function to shift an item from the array
function shiftItem() {
  array.shift();
  displayArray();
}

// Function to unshift an item to the array
function unshiftItem() {
  const itemInput = document.getElementById('itemInput');
  const item = itemInput.value;
  array.unshift(item);
  itemInput.value = ''; // Clear the input field
  displayArray();
}

// Function to splice the array
function spliceArray() {
  const startIndex = parseInt(prompt('Enter the start index:'));
  const deleteCount = parseInt(prompt('Enter the number of items to delete:'));
  array.splice(startIndex, deleteCount);
  displayArray();
}

// Function to slice the array
function sliceArray() {
  const startIndex = parseInt(prompt('Enter the start index:'));
  const endIndex = parseInt(prompt('Enter the end index:'));
  const slicedArray = array.slice(startIndex, endIndex);
  displayArray(slicedArray);
}

// Function to display the array
function displayArray(arr = array) {
  const displayText = document.getElementById('displaytext');
  displayText.innerText = `Array: ${arr.join(', ')}`;
}