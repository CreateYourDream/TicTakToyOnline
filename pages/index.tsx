import { Header } from "./components/Header";
import {GameInfo, GameTitle, GameFild} from './components/Game';



export default function Home() {
  return (
    <div>
      <Header />
      <main className="py-6 mx-auto max-w-[616px]">
        <GameTitle/>
        <GameInfo className='mt-5'/>  
        <GameFild className='mt-6 mx-8'/>
      </main>
    </div>
  );
}
