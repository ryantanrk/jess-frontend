import React, { useEffect, useState } from "react";

const PendingRatingData = (props) => {
  const { documentID } = props.data;

  // STANDARD GET REQUEST
  const docInfoDataUrl = `http://localhost/jess-backend/api/read/getdocument.php?api_key=RXru1LUOOeKFX03LGSo7&docID=${documentID}`;
  const [docInfoData, setDocInfoData] = useState([]);

  // GET - (WORKING FINE)
  useEffect(() => {
    fetch(docInfoDataUrl, {
      method: "GET",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        console.log(data);
        setDocInfoData(data);
      })
      .catch((error) => {
        console.error("JSON user data fetching error : ", error);
      });
  },[]);

  return (
    <tr>
      {docInfoData.map((item) => (
        <td key={item.documentMetaDataObject.documentID}>{item.documentMetaDataObject.documentID}</td>
      ))}
      {docInfoData.map((item) => (
        <td key={item.documentMetaDataObject.documentID}>{item.documentMetaDataObject.title}</td>
      ))}
      {docInfoData.map((item) => (
        <td key={item.documentMetaDataObject.documentID}>{item.documentMetaDataObject.topic}</td>
      ))}
      {docInfoData.map((item) => (
        <td key={item.documentMetaDataObject.documentID}>{item.documentMetaDataObject.dateOfSubmission}</td>
      ))}
      {docInfoData.map((item) => (
        <td key={item.documentMetaDataObject.documentID}>{item.documentMetaDataObject.authorUsername}</td>
      ))}
      {docInfoData.map((item) => (
        <td key={item.documentMetaDataObject.documentID}>{item.documentMetaDataObject.documentStatus}</td>
      ))}
      <td>
        <button>View</button>
        <button onClick={props.isRateManuscriptDashboard}>Rate</button>
      </td>
    </tr>
  );
};

export default PendingRatingData;