<h1>Event delegation </h1>
<p>Capturing and bubbling allow us to implement one of the most powerful 
event handling patterns called event delegation </p>
<p>The idea is that if we have a lot of elements handled in a similar way, then instead of 
assigning a handler to each of them - we put a single handler on the commont ancestor</p> 
<p>In the handler we get event.target to see where the event actually happened and handle it</p>
<p> Let's see diagram for example</p>

[diagram](https://en.js.cx/article/event-delegation/bagua/)
[diagram with code](https://plnkr.co/edit/Q6Aafx11IW6CnC8k?p=preview)
<p>The table has 9 cells, but there could be 99 or 9999, doesn't matter </p>
<h5><strong>Our task is to highlight a cell < td > on click<strong></h5>
<p> Instead of assign an onClick handler to each < td >- we will set up "catch all" handler on < table > element.
<p>It will use event.target to get the clicked element and highlight it </p>

```js

let selectedTd;

table.onclick = function(event) {
  let target = event.target; // where was the click?

  if (target.tagName != 'TD') return; // not on TD? Then we're not interested

  highlight(target); // highlight it
};

function highlight(td) {
  if (selectedTd) { // remove the existing highlight if any
    selectedTd.classList.remove('highlight');
  }
  selectedTd = td;
  selectedTd.classList.add('highlight'); // highlight the new td
}


```

<p>Such a code doesn't care how many cells there are in the table. we can add/remove < td > dynamically and the highliting will still work</p>

<p>Still, there's drawback </p>
<p>The click may occur not on the < td >, but inside it</p>
<p>In our case if we take a look inside HTML, we can see nested tags inside < td > like strong</p>

```js
<td>
  <strong>Northwest</strong>
  ...
</td>

```
<p>Naturally if a click happens on that < strong > then it becomes the value of event.target </p> 
<p>In the handler table.onclick we shoul take such event.target and find out whether click was inside < td > or not
</p>
<p>Here's the improved code </p>

```js
table.onclick = function(event) {
  let td = event.target.closest('td'); // (1)

  if (!td) return; // (2)

  if (!table.contains(td)) return; // (3)

  highlight(td); // (4)
};
```

[delegating](https://javascript.info/event-delegation)