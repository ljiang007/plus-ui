/**
 * 处理样式属性值，如果是数字则添加px单位
 * @param value 样式属性值
 * @returns 处理后的样式属性值
 */
export function addPxIfNeeded(value: any): string {
  if (value === undefined || value === null) {
    return '';
  }
  
  // 如果是数字类型或者是纯数字的字符串
  if (typeof value === 'number' || /^\d+$/.test(String(value))) {
    return `${value}px`;
  }
  
  // 如果已经包含单位（如px, em, rem等），则直接返回
  if (typeof value === 'string' && /\d+[a-z%]+$/.test(value)) {
    return value;
  }
  
  // 其他情况直接返回字符串形式
  return String(value);
} 