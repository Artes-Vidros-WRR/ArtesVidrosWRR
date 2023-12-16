import { Cards } from "@/components/Cards";
import { Header } from "@/components/Header";
import { Sash } from "@/components/Sash";
import { Section1 } from "@/components/Section1";
import { Section2 } from "@/components/Section2";

export default function Home() {
  return (
    <main>
      <Header/>
      <Section1/>
      <Sash text="Nossos Serviços"/>
      <Cards/>
      <Section2/>
    </main>
  )
}
