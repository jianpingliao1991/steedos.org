---
title: Button
---

Represents an custom button on a standard or custom object.

There are three built-in basic operations: add (standard_new), edit (standard_edit), delete (standard_delete). From there, the user can customize some button and write a javascript script to perform the desired action, such as printing.

## Declarative Metadata File Suffix and Directory Location

Custom button are defined as additional part of a standard or custom object.

```txt title="directory location for custom button on a standard or custom object"
steedos-app # root directory of your steedos app
├── src
│   └── objects
│       └── accounts
// highlight-start
│           └── buttons
│               └── enableSupplier.button.yml
│               └── enableSupplier.button.js
// highlight-end
├── ...
```

## Declarative Metadata Sample Definition

A sample yml and js definition of a custom button in a custom object is shown below.

```yml title="src/objects/accounts/buttons/enableSupplier.button.yml"
label: Enable as a supplier
'on': record_only_more
name: enableSupplier
```

```js title="src/objects/accounts/buttons/enableSupplier.button.js"
module.exports = {
    enableSupplier: function (object_name, record_id, fields) {
        let text = 'When enabled, you can create vendor users for vendor associated contacts. Are you sure?';
        swal({
            title: "Enable as a supplier",
            text: "<div>" + text + "</div>",
            html: true,
            showCancelButton: true,
            confirmButtonText: t('YES'),
            cancelButtonText: t('NO')
        }, function (confirm) {
            if (confirm) {
                Creator.odata.update('accounts', record_id, { is_supplier: true })
            }
            sweetAlert.close();
        })
    },
    enableSupplierVisible: function (object_name, record_id, record_permissions) {
        if (!Creator.isSpaceAdmin()) {
            return false
        }
        var record = Creator.getCollection(object_name).findOne(record_id);
        if (record) {
            return record.is_supplier != true
        }
    }
}
```
