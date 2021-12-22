<h1>Browser default actions</h1>
<h5>Many events automatically lead to certain actions performed by the browser </h5>
<p>For instance</p>
<p>A click on a link - initiates navigation to its URL</p>
<p>A click on a form submit button - initiates its submission to the server</p>
<p>Pressing a mouse button over a text and moving it - selects th text</p>
<p>If we handle an event in JavaScript, we may not want to corresponding browser action to happen, and want to implement another behavior insted</p>

<h3>Preventing browser actions</h3>
<p> There are two ways to tell the browser we don't want it to act </p>
<p> The main way is to use the event object. There's a method event.preventDefault()</p>
<p>If the handler is assigned using on< event > the returning false also works the same
<p>In this Html a click on a link doesn't lead to navigation, browser doesn't do anything</p>

