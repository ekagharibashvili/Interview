# Bubbling and capturing
### Let's start with an example.
### This handler is assigned to <div>, but also runs if you click any nested tag like <em> or <code>:
<div onclick="alert('The handler!')">
  <em>If you click on <code>EM</code>, the handler on <code>DIV</code> runs.</em>
</div>

### if you click on em, the handler on div runs.
