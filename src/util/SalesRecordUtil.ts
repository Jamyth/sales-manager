import type { SalesRecord } from 'type/SalesRecord';
import { MenuUtil } from './MenuUtil';
import { ArrayUtil } from 'jamyth-web-util';

export class SalesRecordUtil {
    static readonly RECORD_KEY = '@@SalesRecord/record';
    static readonly HISTORY_KEY = '@@SalesRecord/history';

    static getRecord(): Record<string, SalesRecord> {
        const rawRecord = localStorage.getItem(SalesRecordUtil.RECORD_KEY);
        if (rawRecord) {
            return JSON.parse(rawRecord);
        }
        localStorage.setItem(SalesRecordUtil.RECORD_KEY, JSON.stringify({}));
        return {};
    }

    static getDateRecord(date?: Date): SalesRecord {
        const dateKey = this.dateFormatter(date);
        const record = this.getRecord();
        const menu = MenuUtil.getMenu();
        const emptyRecord: SalesRecord = ArrayUtil.toObject(menu, (product) => [
            product.id,
            { ...product, quantity: 0 },
        ]);
        const todayRecord = record[dateKey];
        if (todayRecord) {
            return todayRecord;
        }
        record[dateKey] = emptyRecord;
        localStorage.setItem(SalesRecordUtil.RECORD_KEY, JSON.stringify(record));
        return emptyRecord;
    }

    static refreshRecord() {
        const record = this.getDateRecord();
        const menu = MenuUtil.getMenu();
        const newRecord: SalesRecord = ArrayUtil.toObject(menu, (product) => {
            const hasProduct = record[product.id];
            if (hasProduct === undefined) {
                return [product.id, { ...product, quantity: 0 }];
            }
            return [product.id, hasProduct];
        });
        this.updateDateRecord(newRecord);
    }

    static updateDateRecord(salesRecord: SalesRecord, date: Date = new Date()) {
        const dateKey = this.dateFormatter(date);
        const record = this.getRecord();
        record[dateKey] = salesRecord;
        localStorage.setItem(SalesRecordUtil.RECORD_KEY, JSON.stringify(record));
    }

    private static dateFormatter(date: Date = new Date()) {
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    }
}
