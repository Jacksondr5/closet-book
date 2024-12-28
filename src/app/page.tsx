import { ColorSelect } from "~/components/color-select";
import { SeasonGroup } from "~/components/season-group";

import { HydrateClient } from "~/trpc/server";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <SeasonGroup />
          <ColorSelect type="jacket" value="white" />
        </div>
      </main>
    </HydrateClient>
  );
}
