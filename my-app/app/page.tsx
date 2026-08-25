import Image from "next/image";
import Card from "@/components/Card";
import { someActions } from "@/app/actions/somethins";
export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <Card title="Card 1" description="This is the first Card"/>
      <button onClick={someActions}>clickMe</button>
    </div>
  );
}
