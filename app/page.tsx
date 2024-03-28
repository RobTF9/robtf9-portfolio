import Header from "@/components/header";
import Work from "@/components/work";
import Nav from "@/components/nav";
import Wrapper from "@/components/wrapper";

export default function Home() {
  return (
    <Wrapper blue>
      <main>
        <Nav />
        <Header />
        <Work />
      </main>
    </Wrapper>
  );
}
