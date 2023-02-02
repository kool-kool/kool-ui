import React, { ReactNode } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./style/index.scss";

export interface SwitchProps {
  checked?: boolean;
  // defaultChecked?: boolean;
  disabled?: boolean;
  size?: "default" | "small";
  loading?: boolean;
  className?: string;
  children?: ReactNode;
  autoFocus?: boolean;
  onChange?: Function;
  onClick?: Function;
}

const Switch: React.FC<SwitchProps> = (props: SwitchProps) => {
  const {
    autoFocus,
    checked,
    // defaultChecked = false,
    disabled,
    className,
    size,
    loading,
    children,
    onChange,
    onClick
  } = props;
  const classes = classNames(
    "koo-switch",
    {
      ["koo-switch-small"]: size === "small",
      ["koo-switch-disabled"]: disabled,
      ["koo-switch-loading"]: loading
    },
    className
  );

  function handleClick(e: any & {
    target: HTMLInputElement
  }) {
    if (onClick) {
      onClick(e.target.checked, e);
    }

    return;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement> & {
    target: HTMLInputElement
  }) {
    if (onChange) {
      onChange(e.target.checked, e);
    }

    return;
  }

  return (
    <div>
      <input
        type="checkbox"
        id="switch"
        checked={checked}
        // defaultChecked={defaultChecked}
        autoFocus={autoFocus}
        disabled={disabled || loading}
        onClick={(e) => handleClick(e)}
        onChange={(e) => handleChange(e)}
      />
      <label htmlFor="switch" className={classes}>
        <div></div>
      </label>
      {children}
    </div>
  );
};

Switch.propTypes = {
  /**
   * 开启状态的內容。若设置，则由外部参数控制；若不设置，则由內部 state 控制
   */
  checked: PropTypes.bool,
  /**
   * 禁用状态
   */
  disabled: PropTypes.bool,
  /**
   * callback function
   */
  onChange: PropTypes.func,
  /**
   * 开关大小
   */
  size: PropTypes.oneOf(["default", "small"]),
  /**
   * 开关初识时是否默认选择
   */
  // defaultChecked: PropTypes.bool,
  /**
   * Classnames
   */
  className: PropTypes.string,
  /**
   * 是否为加载状态
   */
  loading: PropTypes.bool
};

Switch.defaultProps = {
  size: "default",
  onChange: () => {
  },
  onClick: () => {
  }
};

export default Switch;
