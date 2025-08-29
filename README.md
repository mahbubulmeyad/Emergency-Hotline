# Emergency-Hotline
1. Difference between getElementById, getElementsByClassName, querySelector, and querySelectorAll:
  getElementById : Returns one element with that ID.
  getElementsByClassName : Returns a live HTMLCollection of all elements with that class.
  querySelector: Returns the first element that matches a CSS selector.
  querySelectorAll : Returns a static NodeList of all matching elements.

2. How I create and insert a new element into the DOM are given below:
  let div = document.createElement("div");  
  div.textContent = "Hello";  
  document.body.appendChild(div);

3.Event Bubbling: When an event occurs on an element, it bubbles up the DOM tree from the target element to its ancestors.
How it works :
  a.Create the element → document.createElement()
  b.Add content/attributes → textContent, setAttribute
  c.Insert it into the DOM → appendChild, prepend, or insertBefore

4. Event Delegation: Attaching a single event listener on a parent element to handle events on its child elements.It is useful for handling dynamic elements & improving performance.

5. Difference between preventDefault() and stopPropagation():
preventDefault() : Stops the default browser action.
stopPropagation() : Stops the event from bubbling up to parent elements.
