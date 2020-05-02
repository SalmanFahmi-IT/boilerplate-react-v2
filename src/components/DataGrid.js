import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Paginator } from 'primereact/paginator';

function DataGrid({ data = [], columns = [] }) {
    return (
        <>
            <DataTable value={data} tableClassName="table table-hover j-datatable"
                autoLayout={true} paginator={true} rows={5}>
                {
                    columns && columns.map((col, index) => {
                        return <Column
                            headerClassName="sorting"
                            key={index}
                            field={col.field}
                            header={col.header}
                            body={col.body}
                        />
                    })
                }

            </DataTable>
            {/* <Paginator
                rows={5}
                first={0}
                totalRecords={100}
                onPageChange={(e) => console.log('event', e)}
            /> */}
        </>
    );
}

export default DataGrid;