import { Header } from "./components/Header";
import { Suspense, lazy } from "react";
import { Route } from "wouter";

const TopStoriesPage = lazy(() => import("./pages/TopStories"));
const DetailPage = lazy(() => import("./pages/Detail"));

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <Suspense>
          <Route path="/" component={TopStoriesPage}></Route>
          <Route path="/item/:id" component={DetailPage}></Route>
        </Suspense>
      </main>
    </>
  );
}

export default App;
