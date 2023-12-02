import React from "react";
import { Table } from "reactstrap";
import './QuizzesTable.css'
import { useNavigate } from "react-router-dom";
interface IQuizzesTableProps {
  data: any[];
}
const QuizzesTable: React.FC<IQuizzesTableProps> = ({ data }) => {
  const navigte = useNavigate();
  const editQuiz = (id:number) =>{
    navigte(`/quizzes/${id}`);
  }
  const displayQuiz = (id:number) =>{
    navigte(`/display/${id}`);
  }
  return (
    <Table className="main-table" responsive striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th> 
          <th>description</th>
          <th>final score</th>
          <th>url</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody>
        {data && data.map((item,index) => (
          <tr key={item.id}>
            <th scope="row">{index+1}</th>
            <td>{item.title}</td>
            <td>{item.description}</td>
            <td>{item.score ? item.score : '-'}</td>
            <td>
              <a href={item.url} target="blank">{item.url}</a>
            </td>
            <td className="action">
              <div className="d-flex gap-2">
                <button className="btn btn-success" onClick={()=> displayQuiz(item.id)}>Display</button>
                <button className="btn btn-primary px-4" 
                onClick={()=> editQuiz(item.id)}>Edit</button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default QuizzesTable;
