import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Record 컴포넌트는 한 행(row)에 대한 데이터를 나타내는 컴포넌트이다.
const Record = (props) => (
  <tr>
    <td>{props.record.name}</td>
    <td>{props.record.position}</td>
    <td>{props.record.level}</td>
    <td>
      {/* Edit 버튼을 클릭하면 해당 레코드의 id를 인코딩하여 Edit 페이지로 이동한다. */}
      <Link className="btn btn-link" to={`/edit/${encodeURIComponent(props.record._id)}`}>Edit</Link> |
      {/* Delete 버튼을 클릭하면 해당 레코드를 삭제한다. */}
      <button className="btn btn-link"
        onClick={() => {
          props.deleteRecord(props.record._id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);

export default function RecordList() {
  const [records, setRecords] = useState([]);

  // useEffect hook을 이용하여 컴포넌트가 마운트 되었을 때와 records state가 업데이트 되었을 때
  // 데이터베이스에서 레코드를 가져온다.
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:4000/record/`);

      if (!response.ok) {
        const message = `An error occured: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      setRecords(records);
    }

    getRecords();

    return; // 컴포넌트가 언마운트 되기 전에 호출된다.
  }, [records.length]);

  // 해당 레코드를 삭제하는 함수
  async function deleteRecord(id) {
    await fetch(`http://localhost:4000/${encodeURIComponent(id)}`, {
      method: "DELETE"
    });

    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
  }

  // 레코드 목록을 표시하는 함수
  function recordList() {
    return records.map((record) => {
      return (
        <Record
          record={record}
          deleteRecord={() => deleteRecord(record._id)}
          key={record._id}
        />
      );
    });
  }

  // 레코드 목록을 나타내는 테이블을 표시하는 컴포넌트
  return (
    <div>
      <h3>Record List</h3>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Level</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{recordList()}</tbody>
      </table>
    </div>
  );
}
