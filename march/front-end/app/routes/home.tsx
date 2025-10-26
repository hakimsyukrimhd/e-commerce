import type { Route } from "./+types/home";
import MainBanner from "~/components/main-banner";

export function meta({}: Route.MetaArgs) {
  return [{ title: "PERTI" }, { name: "description", content: "Welcome to React Router!" }];
}

export default function Home() {
  return (
    <div>
      <MainBanner />
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptas amet aut sequi pariatur laudantium. Ab sint tempore deleniti cumque exercitationem repellat dolorum! Fuga velit sequi soluta dolore magni, explicabo facere
        architecto ipsam labore id excepturi distinctio molestias modi eos beatae vitae animi adipisci quis aut quaerat cumque sunt numquam. Distinctio, similique quo temporibus voluptatibus est aut! Qui enim magnam fugit, harum consectetur
        consequuntur porro odio, a doloremque illum perspiciatis, quos rem sequi quod! Iure molestias rerum minus. Commodi, ab? Repellat mollitia, illo saepe incidunt quod quidem unde deserunt sunt cupiditate blanditiis a officiis vel
        tenetur dolorum temporibus, eveniet omnis.
      </div>
    </div>
  );
}
