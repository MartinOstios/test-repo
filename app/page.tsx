import { Header, Card } from "@/components";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="w-full max-w-screen-xl mx-auto flex-wrap justify-evenly">
        <Card idCard="1" />
        <Card idCard="2"/>
        <Card idCard="3"/>
        <Card idCard="4"/>
        <Card idCard="5"/>
      </main>
    </div>
  );
}
