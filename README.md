keyboardItemNavigation.js
=========================

jQuery Plugin zum Navigieren, durch HTML Listen bzw. Container, per Tastatur (Pfeiltasten: hoch / runter).


Beispiel #1
--------
```html
    <ul>
        <li>A</li>
        <li>B</li>
        <li>C</li>
    </ul>
```
```javascript
	$('ul').keyboardItemNavigation();
```

Beispiel #2
--------
```html
    <div>
        <p>D</p>
        <p>E</p>
        <p>F</p>
    </div>
```
```javascript
	$('div').keyboardItemNavigation({"item":"p"});
```
