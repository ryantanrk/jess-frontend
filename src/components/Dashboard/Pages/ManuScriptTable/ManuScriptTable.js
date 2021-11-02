import React from "react";
import { useContext } from "react";
import { UserContext } from "../../../../App";
import AuthorTable from "./AuthorTable/AuthorTable";
import EditorTable from "./EditorTable/EditorTable";
import ReviewerTable from "./ReviewerTable/ReviewerTable";

const ManuScriptTable = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  return (
    <div>
      {loggedInUser.type === 2 && <ReviewerTable />}
      {loggedInUser.type === 0 && <EditorTable />}
      {loggedInUser.type === 1 && <AuthorTable />}
    </div>
  );
};

export default ManuScriptTable;
