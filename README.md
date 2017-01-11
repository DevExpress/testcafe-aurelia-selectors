# testcafe-aurelia-selectors

[Tescafe](https://github.com/DevExpress/testcafe) selector extentions for [Aurelia](https://github.com/aurelia/framework) apps.

## Avalible selector extentions
- byValueBind
- byShowBind
- byCheckedBind
- byFocusBind
- byDbClickDelegate
- byClickDelegate

## Install
`npm install testcafe-aurelia-selectors`

## Usage

```
import aureliaSelectors from 'testcafe-aurelia-selectors';

fixture `TestFixture`
    .page('http://todomvc.com/examples/aurelia/');
    
test('add new item', async t => {
    await t.typeText(aureliaSelector.byValueBind('newTodoTitle'), 'new item')
        .pressKey('enter')
        .expect(aureliaSelector.byShowBind('items.length').exists).ok();
});    
```