import Card from "@/components/Card";
import { Button } from "@/components/Button";
const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">Landing Page</h1>
      <Card />
      <Button title="small" styles="rounded-sm" />
      <Card />
      <Button title="medium" styles="md:rounded-md " />
      <Card />
      <Button title="large" styles="rounded-lg" />
    </div>
  );
};
export default Landing;