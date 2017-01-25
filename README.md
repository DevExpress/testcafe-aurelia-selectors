# testcafe-aurelia-selectors

This plugin provides selector extensions that make it easier to test Aurelia applications with [TestCafe](https://github.com/DevExpress/testcafe/). These extensions allow you to select page elements in a way that is native to Aurelia.

## Install

```
npm install testcafe-aurelia-selectors
```

## Selector extensions

### byValueBind

Selects an element whose `value` attribute is bound to the specified expression.

```
byValueBind(expression, parentSelector)
```

Parameter                   | Description
--------------------------- | -----------
expression                        | The JavaScript expression to which the element's `value` attribute is bound.
parentSelector&#160;*(optional)*  | A TestCafe [selector](https://devexpress.github.io/testcafe/documentation/test-api/selecting-page-elements/selectors.html). If specified, TestCafe will search for the target element among the descendants of the element identified by this selector.

### byShowBind

Selects an element whose visibility is bound to the specified expression.

```
byShowBind(expression, parentSelector)
```

Parameter                   | Description
--------------------------- | -----------
expression                       | The JavaScript expression to which the element's visibility is bound.
parentSelector&#160;*(optional)*  | A TestCafe [selector](https://devexpress.github.io/testcafe/documentation/test-api/selecting-page-elements/selectors.html). If specified, TestCafe will search for the target element among the descendants of the element identified by this selector.

### byCheckedBind

Selects an element whose checked state is bound to the specified expression (for checkbox and radio input elements).

```
byCheckedBind(expression, parentSelector)
```

Parameter                   | Description
--------------------------- | -----------
expression                       | The JavaScript expression to which the element's checked state is bound.
parentSelector&#160;*(optional)*  | A TestCafe [selector](https://devexpress.github.io/testcafe/documentation/test-api/selecting-page-elements/selectors.html). If specified, TestCafe will search for the target element among the descendants of the element identified by this selector.

### byFocusBind

Selects an element whose focus state is bound to the specified expression.

```
byFocusBind(expression, parentSelector)
```

Parameter                   | Description
--------------------------- | -----------
expression                       | The JavaScript expression to which the element's focus state is bound.
parentSelector&#160;*(optional)*  | A TestCafe [selector](https://devexpress.github.io/testcafe/documentation/test-api/selecting-page-elements/selectors.html). If specified, TestCafe will search for the target element among the descendants of the element identified by this selector.

### byDbClickDelegate

Selects an element whose `dblclick` event is handled by the specified expression.

```
byDbClickDelegate(expression, parentSelector)
```

Parameter                   | Description
--------------------------- | -----------
expression                  | The expression that handles the element's `dblclick` event.
parentSelector&#160;*(optional)*  | A TestCafe [selector](https://devexpress.github.io/testcafe/documentation/test-api/selecting-page-elements/selectors.html). If specified, TestCafe will search for the target element among the descendants of the element identified by this selector.

### byClickDelegate

Selects an element whose `click` event is handled by the specified expression.

```
byClickDelegate(expression, parentSelector)
```

Parameter                   | Description
--------------------------- | -----------
expression                  | The expression that handles the element's `click` event.
parentSelector&#160;*(optional)*  | A TestCafe [selector](https://devexpress.github.io/testcafe/documentation/test-api/selecting-page-elements/selectors.html). If specified, TestCafe will search for the target element among the descendants of the element identified by this selector.

## Usage

```js
import aureliaSelectors from 'testcafe-aurelia-selectors';

fixture `TestFixture`
    .page('http://todomvc.com/examples/aurelia/');

test('add new item', async t => {
    await t.typeText(aureliaSelector.byValueBind('newTodoTitle'), 'new item')
        .pressKey('enter')
        .expect(aureliaSelector.byShowBind('items.length').exists).ok();
});
```