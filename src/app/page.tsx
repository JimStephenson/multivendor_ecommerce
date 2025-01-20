import ThemeToggle from "@/components/shared/theme-toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (<div>
    <div className="w-100 flex justify-end">
      <ThemeToggle />
    </div>
    <h1 className="font-bold text-blue-500 font-barlow">Welcome to the course</h1>
    <Button>Click here</Button>
  </div>
  );
}
