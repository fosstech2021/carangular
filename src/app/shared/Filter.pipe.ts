import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'FilterData'
})
export class FilterPipe implements PipeTransform {
    transform(Data: any[], searchTerm: string): any[] {
        debugger;
        if (!Data || !searchTerm) {
            return Data;
        }

        return Data.filter(data =>
            data.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}
