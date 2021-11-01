import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../../App";
import AuthorData from "../TableData/AuthorData";
import EditorData from "../TableData/EditorData";

const EditorAuthorTable = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  console.log("userData: ", loggedInUser);

  // STANDARD GET REQUEST
  const authorDataUrl = `http://localhost/jess-backend/api/read/getmetadata.php?api_key=RXru1LUOOeKFX03LGSo7&authorID=${loggedInUser.personID}`;
  const [authorData, setAuthorData] = useState([]);

  // GET - (WORKING FINE)
  useEffect(() => {
    fetch(authorDataUrl, {
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
        setAuthorData(data);
      })
      .catch((error) => {
        console.error("JSON user data fetching error : ", error);
      });
  }, []);

  // STANDARD GET REQUEST
  const editorDataUrl = `http://localhost/jess-backend/api/read/getmetadata.php?api_key=RXru1LUOOeKFX03LGSo7`;
  const [editorData, setEditorData] = useState([]);

  // GET - (WORKING FINE)
  useEffect(() => {
    fetch(editorDataUrl, {
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
        setEditorData(data);
      })
      .catch((error) => {
        console.error("JSON user data fetching error : ", error);
      });
  }, []);

  return (
    <div>
      <h1>Editor Author Table</h1>
      
      <label>Dashboard</label>

      <div className="editorAuthorDashboard">
        <div className="filterDiv">
          <table>
            <tbody>
              <tr>
                <td>
                  {/* Filter by Topic */}
                  <select>
                    <option value="">Filter by Topic</option>
                    <option value="history">History</option>
                    <option value="science">Science</option>
                    <option value="social study">Social Study</option>
                    <option value="medicine">Medicine</option>
                    <option value="education">Education</option>
                    <option value="others">Others</option>
                  </select>
                </td>
                <td>
                  {/* Filter by Pages */}
                  <select>
                    <option value="">Filter by Pages</option>
                    <option value="<100">&lt; 100</option>
                    <option value="100-200">100 - 200</option>
                    <option value="200-300">200 - 300</option>
                    <option value="300-400">300 - 400</option>
                    <option value="400-500">400 - 500</option>
                    <option value=">500">&gt; 500</option>
                  </select>
                </td>
                <td>
                  {/* Filter by Date */}
                  <select>
                    <option value="">Filter by Date</option>
                    <option value="1week">Last one week</option>
                    <option value="1month">Last one month</option>
                    <option value="3months">Last three months</option>
                    <option value="6months">Last half year</option>
                    <option value="1year">Last one year</option>
                    <option value="3years">Last three years</option>
                  </select>
                </td>
                <td>
                  {/* Filter by Status */}
                  <select>
                    <option value="">Filter by Status</option>
                    <option value="1week">New</option>
                    <option value="1month">Pending Review</option>
                    <option value="3months">Rejected</option>
                    <option value="6months">Under View</option>
                    <option value="1year">Paid</option>
                    <option value="3years">Pending Modify</option>
                    <option value="3years">Pending Payment</option>
                    <option value="3years">Pending Final Check</option>
                    <option value="3years">Published</option>
                    <option value="3years">Cancelled</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="editorDashboard">
          <form method="GET">
            <table className="dataTable">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Title</th>
                  <th>Topic</th>
                  <th>Pages</th>
                  <th>Submit Date</th>
                  <th>Author Name</th>
                  {/* If the user's role is Author will not display this col, it will show only the user's role is reviewer*/}
                  <th>Status</th>
                </tr>
              </thead>
              {/* If the user's role is Author will display this data table. */}
              {authorData.map((item) => (
                <AuthorData key={item.documentID} data={item} />
              ))}
              {/* If the user's role is Editor will display this data table. */}
              {/* {editorData.map((item) => (
                <EditorData key={item.documentID} data={item} />
              ))} */}
            </table>
          </form>
        </div>
      </div>
    </div>
    
  );
};

export default EditorAuthorTable;
