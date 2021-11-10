import { useRouter } from "./node_modules/next/router";
import AdminLayout from "../../../components/Layouts/AdminLayout";

export default function MenuItem() {
  const router = useRouter();
  const { menuItem } = router.query;

  return (
    <AdminLayout>
      <h1>MODAL TESTING</h1>
    </AdminLayout>
  );
}
