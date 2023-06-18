import { TemplateRef, TrackByFunction } from '@angular/core';
import {
  NzTablePaginationPosition,
  NzTablePaginationType,
  NzTableSize,
} from 'ng-zorro-antd/table/src/table.types';
import { PagerModel } from './pager.model';
import { DynamicDataModel } from './dynamic-data.model';

/**
 * 动态表格模型
 * @export
 * @class DynamicTableModel
 * @template DataModel
 *
 * @property {DataModel[]} data 数据数组
 * @property {boolean} isFrontPagination 是否前端分页
 * @property {number} total 当前总数据，在服务器渲染时需要传入
 * @property {PagerModel} pager 分页器
 * @property {boolean} isShowPagination 是否展示分页器
 * @property {string} paginationPosition 分页器位置，可选值为 top、bottom、both
 * @property {string} paginationType 分页器类型，可选值为 default、simple
 * @property {boolean} isBordered 是否展示边框
 * @property {boolean} isOuterBordered 是否展示外边框
 * @property {string[]} widthConfig 列宽配置
 * @property {string} nzSize 表格大小，可选值为 default、middle、small
 * @property {boolean} isLoading 是否加载中
 * @property {boolean} loadingIndicator 自定义加载中的图标
 * @property {number} loadingDelay 延迟显示加载效果的时间（防止闪烁）
 * @property {{ x: string; y: string; } | undefined} scroll 横向或纵向支持滚动，也可用于指定滚动区域的宽和高，可以设置为像素值，百分比，true 和 'max-content'
 * @property {(string | undefined)} title 表格标题
 * @property {(string | undefined)} footer 表格尾部
 * @property {(string | undefined)} noResult 无数据时显示内容
 * @property {number[]} pageSizeOptions 指定每页可以显示多少条
 * @property {boolean} isShowQuickJumper 是否可以快速跳转至某页
 * @property {boolean} isShowSizeChanger 是否可以改变 pageSize
 * @property {TemplateRef<{ $implicit: number; range: [number, number] }>} showTotal 用于显示总共有多少数据
 * @property {TemplateRef<{ $implicit: 'page' | 'prev' | 'next'; page: number; }>} itemRender 用于自定义页码的结构，可用于优化 SEO
 * @property {boolean} isHideOnSinglePage 只有一页时是否隐藏分页器
 * @property {boolean} isSimple 是否为简单分页
 * @property {boolean} isTemplateMode 是否为模板模式
 * @property {number} virtualItemSize 虚拟滚动时每个数据项的高度，单位 px
 * @property {number} virtualMaxBufferPx 虚拟滚动时最大缓冲区大小，单位 px
 * @property {number} virtualMinBufferPx 虚拟滚动时最小缓冲区大小，单位 px
 * @property {TrackByFunction<DynamicDataModel>} virtualForTrackBy 虚拟滚动时用于跟踪的函数
 */
export class DynamicTableModel<T> {
  data: DynamicDataModel<T>[] = [];
  isFrontPagination = true;
  total = 0;
  pager = new PagerModel();
  isShowPagination = true;
  paginationPosition: NzTablePaginationPosition = 'bottom';
  paginationType: NzTablePaginationType = 'default';
  isBordered = false;
  isOuterBordered = false;
  widthConfig: string[] = [];
  size: NzTableSize = 'small';
  isLoading = false;
  loadingIndicator = null;
  loadingDelay = 0;
  scroll?: {
    x?: string | null;
    y?: string | null;
  };
  title: string | TemplateRef<any> | null = null;
  footer: string | TemplateRef<any> | null = null;
  noResult?: string | TemplateRef<void>;
  pageSizeOptions = [10, 20, 30, 40, 50];
  isShowQuickJumper = false;
  isShowSizeChanger = false;
  // showTotal?: TemplateRef<{ $implicit: number; range: [number, number] }>;
  // itemRender?: TemplateRef<{
  //   $implicit: 'page' | 'prev' | 'next';
  //   page: number;
  // }>;
  isHideOnSinglePage = false;
  isSimple = false;
  isTemplateMode = false;
  virtualItemSize = 0;
  virtualMaxBufferPx = 200;
  virtualMinBufferPx = 100;
  // virtualForTrackBy?:TrackByFunction<DataModel>;
}


export class DataModel {}
