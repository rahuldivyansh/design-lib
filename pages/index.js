import Nav from "@/components/Nav";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/Button/button";
import { Toast } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import Layout from "@/components/ui/Layout";

export default function Home() {
  const { toast } = useToast();
  return (
    <Layout.Main className="flex p-4 gap-2">
      <Nav />
      <ModeToggle />
      <Button
        onClick={() => {
          toast({
            title: "Success: Record created",
            description: `${new Date().toString()}`,
          });
        }}
      >
        Log In
      </Button>
      <Button variant="secondary"
        onClick={() => {
          toast({
            title: "Success: Record created",
            description: `${new Date().toString()}`,
          });
        }}
      >
        Sign Up
      </Button>
    </Layout.Main>
  );
}
