import { Selector } from 'testcafe';

class AureliaSelector {
    _createSelector (bindingDescriptor, selectorInit) {
        const elementSelector = `*[${bindingDescriptor.type}\\.${bindingDescriptor.command}="${bindingDescriptor.expression}"]`;

        return selectorInit ? Selector(selectorInit).find(elementSelector)
            : Selector(elementSelector);
    }

    /*valueBind*/

    _createBindSelector (type, expression, selectorInit) {
        return this._createSelector({
            type:       type,
            command:    'bind',
            expression: expression
        }, selectorInit);
    }

    byValueBind (expression, parentSelector) {
        return this._createBindSelector('value', expression, parentSelector);
    }

    byShowBind (expression, parentSelector) {
        return this._createBindSelector('show', expression, parentSelector);
    }

    byCheckedBind (expression, parentSelector) {
        return this._createBindSelector('checked', expression, parentSelector);
    }

    byFocusBind (expression, parentSelector) {
        return this._createBindSelector('focus', expression, parentSelector);
    }

    /*eventDelegate*/

    _createDelegateSelector (event, expression, selectorInit) {
        return this._createSelector({
            type:       event,
            command:    'delegate',
            expression: expression
        }, selectorInit);
    }

    byDbClickDelegate (expression, parentSelector) {
        return this._createDelegateSelector('dblclick', expression, parentSelector);
    }

    byClickDelegate (expression, parentSelector) {
        return this._createDelegateSelector('click', expression, parentSelector);
    }
}

export default new AureliaSelector();
