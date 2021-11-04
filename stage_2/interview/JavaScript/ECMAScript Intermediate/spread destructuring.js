//Spread can simplify common tasks with arrays. For example, let’s say you have two arrays and want to combine them:
const tools = ['hammer', 'screwdriver']
const otherTools = ['wrench', 'saw']

// Originally you would use concat() to concatenate the two arrays:
// Concatenate tools and otherTools together
const allTools = tools.concat(otherTools)

// Now you can also use spread to unpack the arrays into a new array:
// Unpack the tools Array into the allTools Array
const allTools = [...tools, ...otherTools]

console.log(allTools)

// Output
["hammer", "screwdriver", "wrench", "saw"]

// Rest can be used when destructuring arrays as well:
const [firstTool, ...rest] = ['hammer', 'screwdriver', 'wrench']

console.log(firstTool)
console.log(rest)