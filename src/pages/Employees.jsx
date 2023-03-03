import React from 'react';
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Page } from '@syncfusion/ej2-react-grids';
import { employeesData, employeesGrid } from '../data/dummy';

import { Header } from '../layouts';



const Employees = () => {
  const toolBarOptions = ['search'];

  const editing = { allowDeleting: true , allowEditing: true}

  return (
    <div className="row m-6">
      <Header category="page" title=" Employees"/>
      <GridComponent
        dataSource={employeesData}
        width="auto"
        allowPaging="true"
        allowSorting="false"
        pageSettings={{ pageCount: 5}}
        editSettings={editing}
        toolbar={toolBarOptions}
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index)=> <ColumnDirective key={index} {...item}/>)}
        </ColumnsDirective>
        <Inject service={[Search, Page]}/>
      </GridComponent>
    </div>
  )
}

export default Employees;