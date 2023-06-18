/**
 * 动态表头模型
 * @export
 * @class DynamicHeaderModel
 * @template T
 * @description
 * @property {string} title 表头名称
 * @property {boolean} isShowCheckbox 是否展示复选框
 * @property {boolean} isDisabled 是否禁用复选框
 * @property {boolean} isIndeterminate 是否半选状态
 * @property {boolean} isChecked 是否选中
 * @property {boolean} isShowRowSelection 是否展示行选择
 * @property {Array<{ text: string; onSelect(...args: any[]): any }>} selections 行选择下拉菜单
 *
 * @property {string | null} width 列宽度
 * @property {string | boolean} left 列左边距
 * @property {string | boolean} right 列右边距
 * @property {'left' | 'right' | 'center' | null} align 列对齐方式
 * @property {boolean} isBreakWord 是否换行
 * @property {boolean} isEllipsis 是否省略
 * @property {number | null} colSpan 列合并
 * @property {number | null} rowSpan 行合并
 */
export class DynamicHeaderModel {
  title = '';
  // 勾选属性
  isShowCheckbox = false;
  isDisabled = false;
  isIndeterminate = false;
  isChecked = false;
  // 下拉选择属性
  isShowRowSelection = false;
  selections: Array<{ text: string; onSelect(...args: any[]): any }> = [];
  // 排序属性
  // 过滤属性
  // 样式属性
  width: string | null = null;
  left: string | boolean = false;
  right: string | boolean = false;
  align: 'left' | 'right' | 'center' | null = null;
  isBreakWord = false;
  isEllipsis = false;
  colSpan: number | null = null;
  rowSpan: number | null = null;
}
