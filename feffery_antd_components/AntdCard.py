# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdCard(Component):
    """An AntdCard component.


Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    The content of the tab - will only be displayed if this tab is
    selected.

- id (string; optional)

- bodyStyle (dict; optional)

- bordered (boolean; optional)

- className (string; optional)

- coverImg (dict; optional)

    `coverImg` is a dict with keys:

    - alt (string; optional)

    - src (string; optional)

    - style (dict; optional)

- extraLink (dict; optional)

    `extraLink` is a dict with keys:

    - className (string; optional)

    - content (string; optional)

    - href (string; optional)

    - style (dict; optional)

    - target (string; optional)

- headStyle (dict; optional)

- hoverable (boolean; optional)

- key (string; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- size (a value equal to: 'default', 'small'; optional)

- style (dict; optional)

- title (a list of or a singular dash component, string or number; optional)"""
    _children_props = ['title']
    _base_nodes = ['title', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdCard'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, key=Component.UNDEFINED, extraLink=Component.UNDEFINED, coverImg=Component.UNDEFINED, bodyStyle=Component.UNDEFINED, headStyle=Component.UNDEFINED, bordered=Component.UNDEFINED, hoverable=Component.UNDEFINED, size=Component.UNDEFINED, title=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'bodyStyle', 'bordered', 'className', 'coverImg', 'extraLink', 'headStyle', 'hoverable', 'key', 'loading_state', 'size', 'style', 'title']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'bodyStyle', 'bordered', 'className', 'coverImg', 'extraLink', 'headStyle', 'hoverable', 'key', 'loading_state', 'size', 'style', 'title']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdCard, self).__init__(children=children, **args)
