## Cookies let you store user information in web pages.

## What are Cookies?
### Cookies are data, stored in small text files, on your computer.
### Cookies were invented to solve the problem "how to remember information about the user":
### 1. When a user visits a web page, his/her name can be stored in a cookie.
### 2. Next time the user visits the page, the cookie remembers his/her name

### Cookies are saved in name-value pairs like
### username = John Doe
### When a browser requests a web page from a server, cookies belonging to the page are added to the request. This way the server gets the necessary data to remember information about users.


## Create a Cookie with JavaScript
### JavaScript can create, read and delete cookies with the document.cookie property.
### You can create a cookie like below:
### document.cookie = "username=John Doe";
### Read a Cookie with JavaScript.
### With Javascript, cookies can be read like this:
### let x = document.cookie;
### Change a Cookie with JavaScript:
### document.cookie = "username=John Smith; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
### Delete Cookie with Javascript
### Deleting a cookie is very simle.
### You don't have to specify a cookie value when you delete a cookie.
### Just set the expires parameter to a past date:
### document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

### A function to Set a Cookie

```js
   function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

    ```
