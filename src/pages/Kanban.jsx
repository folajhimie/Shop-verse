import React from 'react';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban';

import { KanbanData, KanbanGrid } from '../data/dummy';
import { Header } from '../layouts';

const Kanban = () => (
  <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    <Header title="App" category="Kanban"/>
    <KanbanComponent
      id="Kanban" 
      keyField="Status"
      dataSource={KanbanData}
      cardSettings={{ contentField: 'Summary', headerField: 'Id'}}
    >
      <ColumnsDirective>
        {KanbanGrid.map((item, index)=> <ColumnDirective key={index} {...item}/>)}
      </ColumnsDirective>
    </KanbanComponent>
  </div>
);

export default Kanban;