import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'antd';

import { parseChildrenToArray } from './utils';

// 定义布局组件Tooltip，api参数参考https://ant.design/components/tooltip-cn/
export default class AntdTooltip extends Component {
    render() {
        // 取得必要属性或参数
        let {
            id,
            children,
            className,
            style,
            key,
            title,
            placement,
            color,
            mouseEnterDelay,
            mouseLeaveDelay,
            overlayClassName,
            overlayStyle,
            overlayInnerStyle,
            trigger,
            zIndex,
            popupContainer,
            setProps,
            loading_state
        } = this.props;

        children = parseChildrenToArray(children)

        return (
            <Tooltip id={id}
                className={className}
                style={style}
                key={key}
                title={title}
                placement={placement}
                color={color}
                mouseEnterDelay={mouseEnterDelay}
                mouseLeaveDelay={mouseLeaveDelay}
                overlayClassName={overlayClassName}
                overlayStyle={overlayStyle}
                overlayInnerStyle={overlayInnerStyle}
                trigger={trigger}
                zIndex={zIndex}
                getPopupContainer={
                    popupContainer === 'parent' ?
                        (triggerNode) => triggerNode.parentNode :
                        undefined
                }
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }>
                {children}
            </Tooltip>
        );
    }
}

// 定义参数或属性
AntdTooltip.propTypes = {
    // 组件id
    id: PropTypes.string,

    children: PropTypes.node,

    // css类名
    className: PropTypes.string,

    // 自定义css字典
    style: PropTypes.object,

    // 辅助刷新用唯一标识key值
    key: PropTypes.string,

    // 设置显示的文字内容
    title: PropTypes.node,

    // 设置气泡框的位置，可选的有'top'、'left'、'right'、'bottom'、'topLeft'
    // 、'topRight'、'bottomLeft'、'bottomRight'、'leftTop'、'leftBottom'
    // 、'rightTop'、'rightBottom'，默认为'top'
    placement: PropTypes.oneOf([
        'top', 'left', 'right', 'bottom', 'topLeft', 'topRight', 'bottomLeft',
        'bottomRight', 'leftTop', 'leftBottom', 'rightTop', 'rightBottom'
    ]),

    // 设置背景颜色
    color: PropTypes.string,

    // 设置鼠标移入后延时多少才显示 Tooltip，单位：秒，默认为0.1
    mouseEnterDelay: PropTypes.number,

    // 设置鼠标移出后延时多少才隐藏 Tooltip，单位：秒，默认为0.1
    mouseLeaveDelay: PropTypes.number,

    // 设置卡片样式
    overlayStyle: PropTypes.object,

    // 设置卡片内容区域的样式
    overlayInnerStyle: PropTypes.object,

    // 设置触发行为，可选的有'hover'、'focus'、'click'，或是以上多个组成的数组，默认为'hover'
    trigger: PropTypes.oneOfType(
        [
            PropTypes.oneOf(['hover', 'focus', 'click']),
            PropTypes.arrayOf(PropTypes.oneOf(['hover', 'focus', 'click']))
        ]
    ),

    // 设置悬浮层zIndex
    zIndex: PropTypes.number,

    // 设置悬浮层锚定策略，可选的有'parent'、'body'，默认为'body'
    popupContainer: PropTypes.oneOf(['parent', 'body']),

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
AntdTooltip.defaultProps = {
    popupContainer: 'body'
}
