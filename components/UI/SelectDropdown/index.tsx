"use client";
import React from "react";
import * as Select from "@radix-ui/react-select";
import classnames from "classnames";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";

interface DataItem {
  value: string;
  label: string;
  disabled?: boolean;
}

interface SelectDropdownProps {
  data?: DataItem[]; // Allowing data to be undefined
}

const SelectDropdown: React.FC<SelectDropdownProps> = ({ data = [] }) => {
  const initialValue = data.length > 0 ? data[0].value : "";

  return (
    <Select.Root defaultValue={initialValue}>
      <Select.Trigger className="SelectTrigger" aria-label="Select">
        <Select.Value placeholder="Select an option…" />
        <Select.Icon className="SelectIcon">
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="SelectContent">
          <Select.ScrollUpButton className="SelectScrollButton">
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport className="SelectViewport">
            {data.map((item, index) => (
              <SelectItem key={index} value={item.value} disabled={item.disabled}>
                {item.label}
              </SelectItem>
            ))}
          </Select.Viewport>
          <Select.ScrollDownButton className="SelectScrollButton">
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

interface SelectItemProps extends React.ComponentPropsWithoutRef<typeof Select.Item> {
  children: React.ReactNode;
  className?: string;
}

const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <Select.Item className={classnames("SelectItem", className)} {...props} ref={forwardedRef}>
        <div className="SelectItemContent">
          <Select.ItemText>{children}</Select.ItemText>
          <Select.ItemIndicator className="SelectItemIndicator">
            <CheckIcon />
          </Select.ItemIndicator>
        </div>
      </Select.Item>
    );
  }
);

SelectItem.displayName = "SelectItem";

export default SelectDropdown;
