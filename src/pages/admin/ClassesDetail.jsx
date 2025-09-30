import { useParams } from "react-router-dom";
import ClassName from "../../components/admin/Classes/ClassName";
import ClassStats from "../../components/admin/Classes/ClassStats";
import ClassesTable from "../../components/admin/Classes/ClassesTable";
import ClassTabs from "../../components/admin/Classes/ClassTabs";

const ClassesDetail = () => {
  const { classname } = useParams();

  return (
    <div>
      <ClassName />
      <ClassStats />
      <ClassTabs />
    </div>
  );
};

export default ClassesDetail;
