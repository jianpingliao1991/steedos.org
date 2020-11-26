module.exports = {
  someSidebar: {
    "Getting Started": ['overview', 'installation'],
    "Metadata API": ['metadata/metadata', {
      "Object": ['metadata/object/summary', 'metadata/object/field', {
        "Field Type": ["metadata/object/field_type/basic", "metadata/object/field_type/complex", "metadata/object/field_type/built_in"]
      }, 'metadata/object/listview', 'metadata/object/button', 'metadata/object/permission', 'metadata/object/validation_rule', 'metadata/object/workflow_rule']
    },'metadata/application','metadata/report','metadata/permission_set'],
  },
};
