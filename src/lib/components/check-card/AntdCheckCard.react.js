import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { CheckCard } from '@ant-design/pro-card';
import { isUndefined } from 'lodash';
import { parseChildrenToArray } from '../utils';

// 定义选择卡片组件AntdCheckCard，api参数参考https://procomponents.ant.design/components/check-card
const AntdCheckCard = (props) => {
    // 取得必要属性或参数
    let {
        id,
        children,
        className,
        style,
        key,
        checked,
        bordered,
        value,
        defaultChecked,
        disabled,
        size,
        setProps,
        loading_state
    } = props;

    useEffect(() => {
        if (!isUndefined(defaultChecked) && isUndefined(checked)) {
            setProps({ checked: defaultChecked })
        }
    }, [])

    children = parseChildrenToArray(children)

    return (
        <CheckCard id={id}
            className={className}
            style={style}
            key={key}
            description={children}
            checked={checked}
            bordered={bordered}
            value={value}
            defaultChecked={defaultChecked}
            disabled={disabled}
            size={size}
            onChange={e => setProps({ checked: e })}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            } />
    );
}

// 定义参数或属性
AntdCheckCard.propTypes = {
    // 组件id
    id: PropTypes.string,

    children: PropTypes.node,

    // css类名
    className: PropTypes.string,

    // 自定义css字典
    style: PropTypes.object,

    // 辅助刷新用唯一标识key值
    key: PropTypes.string,

    // 设置当前选择卡片是否处于选择状态，默认为false
    checked: PropTypes.bool,

    // 设置是否显示边框，默认为true
    bordered: PropTypes.bool,

    // 设置当前选项的选项值
    value: PropTypes.string,

    // 设置当前选择卡片是否默认已选择，默认为false
    defaultChecked: PropTypes.bool,

    // 是否禁用当前选择卡片，默认为false
    disabled: PropTypes.bool,

    // 设置尺寸规格，可选的有'small'、'default'及'large'
    // 默认为'default'
    size: PropTypes.oneOf(['small', 'default', 'large']),

    loading_state: PropTypes.shape({
        /**
         * Determines if the component is loading or not
         */
        is_loading: PropTypes.bool,
        /**
         * Holds which property is loading
         */
        prop_name: PropTypes.string,
        /**
         * Holds the name of the component that is loading
         */
        component_name: PropTypes.string
    }),

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

// 设置默认参数
AntdCheckCard.defaultProps = {
}

export default React.memo(AntdCheckCard);