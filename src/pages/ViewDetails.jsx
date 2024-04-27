import { useParams } from "react-router-dom";

const ViewDetails = () => {
  const {id} = useParams();
  return (
    <div>
      <h3>view details of {id}</h3>
    </div>
  );
};

export default ViewDetails;
