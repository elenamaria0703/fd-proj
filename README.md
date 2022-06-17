# custom-table

This is a Web Component to implement a custom table, based on LitElement.

# Installation

To locally test this component, please run the following command from the terminal:

```bash
git clone https://github.com/elenamaria0703/fd-proj.git
npm install
npm run serve
```

Now, you can visit the address: http://localhost:8000/dev where you will find 3 examples of this web component. Please be aware that on your machine, the port may be different.

# Usage

Import the component in your HTML file:
```
<script type="module" src="../custom-table.js"></script>
```

Use the ```<custom-table>``` tag to create a new modal:
```
<custom-table id="table-1" headers='["Product", "Price"]' items='[["Butter", "22"],["Milk", "10"],["Apples", "5"], ["Water", "7"]]'></custom-table>
```

# Properties

Property        | Type    | Default  | Description                                                    
--------------- | ------- | -------- | ------------                                                   
`headers`       | Array   | `[]`     | Array containing elements for the header of the table
`items`         | Array   | `[]`     | Array containing the arrays of items to be displayed in the table

Properties can be set as attributes of the element:

```
<custom-table headers='["First Name", "Last Name", "Age"]' items='[["Elena", "Maria", "3"],["Tudor", "Pop","4"],["Raluca", "Popa","4"]]'></custom-table>
```

# Styling

Simple modal is easily styleable with custom properties and CSS mixins

Property                          | Default            | Description                                   
--------------------------------- | ------------------ | ------------                                  
`--border-color`                  | `#ddd`             | Color of the table's borders                       
`--nth-background-color`          | `#f2f2f2`          | N'th line background color             
`--header-background-color`       | `#04AA6D`          | Background color of the header              
`--hover-background-color`        | `#ddd`             | Background color when hover is applied                 

The styling can be applied as shown in this example:

```css
my-table {
        --border-color: #4d0000;
        --nth-background-color: #ffe6e6;
        --header-background-color: #990000;
        --hover-background-color: #ff9999;
      }
```