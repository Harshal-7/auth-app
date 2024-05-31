import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";

const Dashboard = async () => {
  const session = await auth();

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center gap-y-5">
      <div className="text-4xl font-bold">DASHBOARD</div>
      <p>{JSON.stringify(session)}</p>

      <form
        action={async () => {
          "use server";

          await signOut();
        }}
      >
        <Button variant="default" type="submit">
          Sign Out
        </Button>
      </form>
    </div>
  );
};

export default Dashboard;
