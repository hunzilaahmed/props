import React from "react";
import Card from "./components/Card";

const App = () => {
  return (
    <>
      <div className="text-center text-4xl">through props</div>
      <div className="flex flex-wrap justify-center items-center gap-5 mt-10">
        <Card
          image="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNob2VzfGVufDB8fDB8fHww"
          title="First Tittle"
          description="loremmm hello world dunya lorem hello world props "
          buttontext="purchase me"
        />
        <Card
          image="https://lzd-img-global.slatic.net/g/p/9d9872574a242eb9b12c49ec779dbfe9.jpg_960x960q80.jpg_.webp"
          title="Second Tittle"
          description="Focusing on benefits rather than on the product itself is a better way to sell. "
          buttontext="sold"
        />
        <Card
          image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D"
          title="third Tittle"
          description="The buyer persona here is not just any person looking for snacks. This description is tailored for people who are looking for better-for-you, healthy products."
          buttontext="out now"
        />
        <Card
          image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D"
          title="fourth Tittle"
          description="The most common way to research customers is with a buyer persona: a representation of your ideal customer. It contains info like demographics, interests, needs, and goals.

          "
          buttontext="buy me"
        />
        <Card
          image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D"
          title="Fifth Tittle"
          description="Their main job is actually to persuade customers to buy, which is more likely to happen when they focus on benefits, not features."
          buttontext="kharid lo"
        />
        <Card
          image="https://static-01.daraz.pk/p/9a283ac05f0cf6875c0e278efb444e2f.jpg"
          title="Sixth Tittle"
          description="The “compelling reasons” are the main feature of strong product descriptions. There’s a common misconception that product descriptions need to describe the product."
          buttontext="loot lo"
        />
      </div>
    </>
  );
};

export default App;
