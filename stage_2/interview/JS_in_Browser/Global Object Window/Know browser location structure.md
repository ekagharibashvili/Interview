# Location
### The Location interface represents the location(URL) of the object  it is linked to.
### Changes done on it are reflected on the object it relates to.
### Both the Document and Window interface have such a linked Location, accesible via Document.location and Window.location respectively.
![location](../assets/location2.jpg)

#### Location.origin - Read only
#### Returns a USVString containing the canonical form of the origin of the specific location.

### Methods
#### Location.assign() - Loads the resource at the URL which is provided in parameter
#### Location.reload() - Reloads current URL, like the Refresh button
#### Location.replace() - replaces the current resource with the one the provided URL. Current page will ot be saved is session History.
#### Location.toString() - synonym of href but can't be modified value