import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'customDate',
})
export class CustomDatePipe implements PipeTransform {
  transform(value: any): string {
    const datePipe = new DatePipe('zh-CN');
    const date = new Date(value);

    // 将日期字符串转为数组
    const dateArray = datePipe.transform(date, 'M月d日,E')!.split(',');

    // 根据星期几的文本确定英文缩写
    const weekDay = dateArray[1];
    let enWeekDay;

    enWeekDay = `星期${weekDay[1]}`;

    return `${dateArray[0]} ${enWeekDay}`;
  }
}
