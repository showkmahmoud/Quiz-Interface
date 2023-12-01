import React from "react";
import { Table } from "reactstrap";
import './QuizzesTable.css'
interface IQuizzesTableProps {
  data: any[];
}
const QuizzesTable: React.FC<IQuizzesTableProps> = ({ data }) => {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>description</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <th scope="row">{item.id}</th>
            <td>{item.title}</td>
            <td>{item.description}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default QuizzesTable;
